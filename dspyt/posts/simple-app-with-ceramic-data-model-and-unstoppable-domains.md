---
title: "Simple App with Ceramic Data Model and Unstoppable Domains - DSPYT"
date: "April 24, 2022"
excerpt: "Ceramic allows users to have complete ownership over their data by providing decentralized technologies for authentication and data storage."
cover_image: "/images/posts/ceramic/pexels-antonio-batinic-4164418.webp"
tags:
  [
    "javascript",
    "yarn",
    "ceramic",
    "React",
    "vercel",
    "data",
    "Node",
    "blockchain",
    "data model",
    "unstoppable domains",
  ]
---

Ceramic allows users to have complete ownership over their data by providing decentralized technologies for authentication and data storage.

In this tutorial we set up an application to interact with JS HTTP Client through a public Ceramic node. In addition we create a deterministic Ceramic Tile and resolve an unstoppable domain which we store in the decentralized profile of the user.

The app is hosted on [Vercel](https://ceramic-unstoppable.vercel.app/) and the code is available at [GitHub repository](https://github.com/Pfed-prog/).

## Requirements

- Node.js v14 and npm v6

For more detailed information look at [Ceramic Developers Portal](https://developers.ceramic.network/build/javascript/http/)

## Libraries

- @3id/connect
- @ceramicnetwork/http-client
- @ceramicnetwork/stream-tile
- @ceramicnetwork/3id-did-resolver
- dids
- @unstoppabledomains/resolution
- @ethersproject/providers
- @uauth/web3-react
- @web3-react/abstract-connector
- @web3-react/core
- @web3-react/injected-connector
- @web3-react/walletconnect-connector

## Application dependencies and set up

First we create an app by using React framework and `cd` into the directory:

```bash
npx create-react-app new-app
cd new-app
```

Then we install the dependencies for ceramic and unstoppbale domains:

```bash
npm install @ceramicnetwork/http-client @ceramicnetwork/3id-did-resolver dids @3id/connect @ceramicnetwork/stream-tile @unstoppabledomains/resolution
```

and install dependencies necessary to connect the pieces:

```bash
npm install @ethersproject/providers @uauth/web3-react @web3-react/abstract-connector @web3-react/core @web3-react/injected-connector @web3-react/walletconnect-connector
```

After the dependencies are installed we move into the `src` folder via `cd src` and create a new file where after a successful login we can access ceramic DID Datastore and update the data. This file we name as `DataModels.js`. We also create an additional css file for `Datamodels.js` that we name as `App.module.css`.

Additionally, we create `connectors.js` file that we access in `App.js` to connect to Ethereum Providers.

## Coding the application

In `connectors.js` we create three wallet connectors: useWeb3React Injected connector to Ethereum Mainnet with MetaMask, Walletconnect and UAuthConnector for Unstoppable Domains.

```javascript
import { UAuthConnector } from "@uauth/web3-react";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const injected = new InjectedConnector({ supportedChainIds: [1] });

export const walletconnect = new WalletConnectConnector({
  infuraId: process.env.REACT_APP_INFURA_ID,
  qrcode: true,
});

export const uauth = new UAuthConnector({
  clientID: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  redirectUri: process.env.REACT_APP_REDIRECT_URI,
  //postLogoutRedirectUri: process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI,
  //fallbackIssuer: process.env.REACT_APP_FALLBACK_ISSUER,

  // Scope must include openid and wallet
  scope: "openid wallet",

  // Injected and walletconnect connectors are required
  //connectors: {injected, walletconnect},
  connectors: { injected },
});

const connectors = {
  injected,
  walletconnect,
  uauth,
};

export default connectors;
```

In `App.js` we import following libraries, files and define a constant to initialize ceramic client:

```javascript
import { EthereumAuthProvider, ThreeIdConnect } from "@3id/connect";
import ThreeIdResolver from "@ceramicnetwork/3id-did-resolver";
import CeramicClient from "@ceramicnetwork/http-client";
import { useWeb3React } from "@web3-react/core";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { DID } from "dids";
import { useEffect, useState } from "react";
import "./css/App.css";
import connectors from "./connectors";
import DataModels from "./DataModels";

const API_URL = "https://ceramic-clay.3boxlabs.com";
```

Meanwhile the function App is where we define states, hooks and functions:

```javascript
function App() {
  const { active, account, activate } = useWeb3React();
  const [ceramic, setCeramic] = useState();
  const [ethAddresses, setEthAddresses] = useState();
  const [ethereum, setEthereum] = useState();
  const [appStarted, setAppStarted] = useState(false);

  function createConnectHandler(connectorId) {
    return async () => {
      try {
        const connector = connectors[connectorId];

        if (
          connector instanceof WalletConnectConnector &&
          connector.walletConnectProvider?.wc?.uri
        ) {
          connector.walletConnectProvider = undefined;
        }

        await activate(connector);
      } catch (error) {
        console.error(error);
      }
    };
  }

  function buttons() {
    return (
      <>
        <button onClick={createConnectHandler(Object.keys(connectors)[0])}>
          <span>Login with Metamask</span>
        </button>

        <button onClick={createConnectHandler(Object.keys(connectors)[1])}>
          <span>Login with WalletConnect</span>
        </button>

        <button
          className="unst"
          onClick={createConnectHandler(Object.keys(connectors)[2])}
        ></button>
      </>
    );
  }

  useEffect(() => {
    if (active) {
      setEthereum(window.ethereum);
      (async () => {
        try {
          const addresses = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setEthAddresses(addresses);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, [active]);

  const condition = ethereum !== undefined && ethAddresses !== undefined;
  useEffect(() => {
    if (condition) {
      (async () => {
        const newCeramic = new CeramicClient(API_URL);

        const resolver = {
          ...ThreeIdResolver.getResolver(newCeramic),
        };
        const did = new DID({ resolver });
        newCeramic.did = did;
        const threeIdConnect = new ThreeIdConnect();
        const authProvider = new EthereumAuthProvider(
          ethereum,
          ethAddresses[0]
        );
        await threeIdConnect.connect(authProvider);

        const provider = await threeIdConnect.getDidProvider();
        newCeramic.did.setProvider(provider);
        await newCeramic.did.authenticate();

        setCeramic(newCeramic);
      })();
    }
  }, [condition]);

  function getWaitingForDIDPanel() {
    return (
      <div>
        <h2> Waiting for a decentralized ID :{account}</h2>
      </div>
    );
  }

  function getLandingPage() {
    return (
      <div className="Init">
        <h1>Take Control of Your Data with T+D</h1>

        {active ? (
          ceramic ? (
            <button onClick={() => setAppStarted(true)}>
              Let&apos;s go !!
            </button>
          ) : (
            getWaitingForDIDPanel()
          )
        ) : (
          buttons()
        )}
      </div>
    );
  }

  function getSkillsPage() {
    return <DataModels ceramic={ceramic} setAppStarted={setAppStarted} />;
  }

  return (
    <div>{ceramic && appStarted ? getSkillsPage() : getLandingPage()}</div>
  );
}

export default App;
```

On the initial state the app display three buttons, which relate to a distinct wallet connector. Once the user pushes the button the state active becomes true, connecting to the wallet. After the wallet is connected the ceramic client initializes and connects to the decentralizes identity. Finally, following the successful ceramic client connection the user enters to the profile skills page.

In `DataModels.js` we define the determenistic Ceramic tiles where the users edits and stores skills data.

```javascript
import { TileDocument } from "@ceramicnetwork/stream-tile";
import Resolution from "@unstoppabledomains/resolution";
import { useEffect, useState } from "react";
import styles from "./css/App.module.css";

const resolution = new Resolution();

function DataModels(props) {
  const [Data, setData] = useState();
  const ceramic = props.ceramic;
  const setAppStarted = props.setAppStarted;
  const [Name, setName] = useState();
  const [ID, setID] = useState();
  const [Desc, setDesc] = useState();
  const [ImageURL, setImageURL] = useState();
  const [loadingMessage, setLoadingMessage] = useState("Loading...");
  const [document, setDocument] = useState();
  const [Decode, setDecoded] = useState();

  useEffect(() => {
    if (ceramic) {
      setLoadingMessage("Loading your skills...");

      (async () => {
        const doc = await TileDocument.create(
          ceramic,
          null,
          {
            controllers: [ceramic.did.id],
            deterministic: true,
          },
          { anchor: false, publish: false }
        );
        if (doc.content.description) {
          setDesc(doc.content.description);
        }
        if (doc.content.name) {
          setName(doc.content.name);
        }
        if (doc.content.image) {
          setImageURL(doc.content.image);
        }
        if (doc.content.id) {
          setID(doc.content.id);
          await setDecoded(getResolution(doc.content.id));
        }
        if (doc.content.decode) {
          setDecoded(doc.content.decode);
        }
        if (
          doc.content.description ||
          doc.content.name ||
          doc.content.id ||
          doc.content.image
        ) {
          setData({
            name: Name,
            id: ID,
            description: Desc,
            decode: Decode,
            image: ImageURL,
          });
        }

        setDocument(doc);
        setLoadingMessage("");
      })();
    }
  }, [ceramic]);

  function getResolution(input) {
    var promise = new Promise((resolve) => {
      if (true) {
        resolve(resolution.addr(input, "ETH"));
      }
    });

    promise.then(
      (result) => {
        setDecoded(result);
      },
      function (error) {
        setDecoded("");
      }
    );
  }

  function display() {
    let Panel = (
      <div className={styles.csnSkillRecord}>
        <div className={styles.csnSkillRecordRight}>
          <img
            src={ImageURL}
            alt="value"
            className="image1"
            width="200"
            height="200"
          />
          <div className={styles.csnSkillName}>
            <h1>{Name}</h1>
          </div>
          <div className={styles.csnSkillDesc}>
            <h2> {ID} </h2>
          </div>
          <div className={styles.csnSkillDesc}>
            <h2> {Decode} </h2>
          </div>
          <div className={styles.csnSkillDesc}>
            <h2> {Desc} </h2>
          </div>
        </div>
      </div>
    );

    return Panel;
  }

  function handleSubmit(e) {
    setLoadingMessage("Updating...");
    let t = setTimeout(() => {
      setLoadingMessage("");
    }, 20000);

    if (ID) {
      getResolution(ID);
    }

    let Data = {
      name: Name,
      id: ID,
      description: Desc,
      decode: Decode,
      image: ImageURL,
    };

    setData(Data);

    if (Data) {
      (async () => {
        await document.update(Data);
        setLoadingMessage("");
        clearTimeout(t);
      })();
    }

    e.preventDefault();
  }

  function getSimpleSkillForm() {
    return (
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.csnFormLabel}>
          <h2>Name</h2>
        </div>
        <div className={styles.csnFormInput}>
          <input
            type="text"
            name="skill-name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={styles.csnFormLabel}>
          <h2>ID:Eth</h2>
        </div>
        <div className={styles.csnFormInput}>
          <input
            type="text"
            name="skill-id"
            value={ID}
            onChange={(e) => setID(e.target.value)}
          />
        </div>

        <div className={styles.csnFormLabel}>
          <h2>Description</h2>
        </div>
        <div className={styles.csnFormInput}>
          <input
            name="skill-desc"
            value={Desc}
            onChange={(e) => setDesc(e.target.value)}
          ></input>
        </div>

        <div className={styles.csnFormInput}>
          <div className={styles.csnFormLabel}>
            <h2>Image Url</h2>
          </div>
          <input
            type="text"
            name="skill-image-url"
            value={ImageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>

        <input type="submit" name="submit" value="submit" />
      </form>
    );
  }

  function getSkillsPage() {
    let skillsContent = (
      <div className={styles.csnSkillsPage}>
        <h1> Take Control of Your Data with TtD </h1>
        <div className={styles.csnSkillsPageHeadingRow}>
          <div onClick={() => setAppStarted(false)}></div>
        </div>
        <div className={styles.csnSkillsPageMainRow}>
          {loadingMessage && (
            <div className={styles.csnOverlay}>
              <div className={styles.csnOverlayContent}>
                <div className={styles.csnOverlayTextUpper}>
                  <h2>{loadingMessage}</h2>
                </div>
              </div>
            </div>
          )}

          <div className={styles.csnSkillsFormContainer}>
            <div className={styles.csnSkillsFormContainerContent}>
              <div>
                <div>{getSimpleSkillForm()}</div>
              </div>
            </div>
          </div>

          <div className={styles.csnSkillsContainer}>
            <div className="data-models">
              {Data ? display(Data) : <h1>You need to add some data!</h1>}
            </div>
          </div>
        </div>
        <div className="Footer">
          <h1>T+D</h1>
        </div>
      </div>
    );
    return skillsContent;
  }

  return getSkillsPage();
}

export default DataModels;
```

![Ceramic Unstoppable Domains skills page](/images/posts/ceramic/qyg4dep.webp)

## Related Posts

- [Simple QR code generator on AWS with Flask](https://dspyt.com/simple-qr-code-generator-on-aws-with-flask)
- [How to implement asyncio python tutorial](https://dspyt.com/simple-asynchronous-python-webscraper-tutorial)
- [Aurora — EVM on the NEAR Protocol blockchain](https://dspyt.com/aurora-near-protocol-evm)
- [Simple and easy heroku telegram bot in Python](https://dspyt.com/simple-telegram-bot-in-python-hosted-easily-on-heroku)
