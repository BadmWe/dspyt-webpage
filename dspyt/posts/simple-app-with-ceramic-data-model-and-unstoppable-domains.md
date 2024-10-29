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
    "useweb3react",
  ]
---

Ceramic allows users to have complete ownership over their data by providing decentralized technologies for authentication and data storage.

In this tutorial we set up an application to interact with JS HTTP Client through a public Ceramic node. In addition we create a deterministic Ceramic Tile and resolve an unstoppable domain which we store in the decentralized profile of the user.

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
  scope: "openid wallet",
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

The `DataModels` component integrates with the Ceramic Network using the `TileDocument` library and resolves domain names using the `Resolution` library from Unstoppable Domains.

When initialized, `DataModels` component does the following:

1. Initializes state variables to store data, the Ceramic document, and other necessary fields such as `Name`, `ID`, `Desc`, and `ImageURL` using the `useState` hook.
2. The `useEffect` hook is used to perform actions upon component mounting and when `ceramic` prop changes.
   - If the `ceramic` instance is available, it begins loading data.
   - An asynchronous function is executed to create a new TileDocument on the Ceramic Network. The document is created with the specified controller (user ID) and other required parameters.
   - Contents of the document, such as `description`, `name`, `image`, and `id`, are extracted and stored in the component state using corresponding `setState` functions.
   - If there's an `ID`, the `getResolution` function is called to resolve the domain name into an address, which is then stored in the state.
   - The `Data` state variable is then set with the collected information.
   - The loaded document from Ceramic is stored in the `document` state variable, and the loading message is cleared after the data has been fetched.
3. The `getResolution` function uses the `Resolution` library to resolve domain names to addresses.
   - It returns a promise which resolves by setting the resolved address into the `Decode` state.
4. The `handleSubmit` function updates the document on Ceramic Network with the data specified in the state when the form is submitted.
5. The `display` function returns JSX to render UI elements showing the loaded data or the data input by the user.
6. The `getSimpleSkillForm` function returns JSX for a simple form, allowing a user to input the name, ID, description, and image URL of their skill and submit the data.
7. Finally, `getSkillsPage` constructs and returns the overall page layout combining loading messages, form, and display components.
8. The `DataModels` component is exported at the end, making it available for import in other parts of the application.

![Ceramic Unstoppable Domains skills page](/images/posts/ceramic/qyg4dep.webp)

## Related Posts

- [Simple QR code generator on AWS with Flask](https://dspyt.com/simple-qr-code-generator-on-aws-with-flask)
- [How to implement asyncio python tutorial](https://dspyt.com/simple-asynchronous-python-webscraper-tutorial)
- [Aurora — EVM on the NEAR Protocol blockchain](https://dspyt.com/aurora-near-protocol-evm)
- [Simple and easy heroku telegram bot in Python](https://dspyt.com/simple-telegram-bot-in-python-hosted-easily-on-heroku)
