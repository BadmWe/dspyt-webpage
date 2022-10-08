---
title: "Simple App with Ceramic Data Model and Unstoppable Domains - DSPYT"
date: "April 24, 2022"
excerpt: "Ceramic allows users to have complete ownership over their data by providing decentralized technologies for authentication and data storage."
cover_image: "/images/posts/ceramic/pexels-antonio-batinic-4164418.jpg"
time_read: "5 min"
tags: ["javascript", "ceramic", "React", "Node"]
---

Ceramic allows users to have complete ownership over their data by providing decentralized technologies for authentication and data storage.

In this tutorial we set up an application to interact with JS HTTP Client through a public Ceramic node. In addition we create a deterministic Ceramic Tile and resolve an unstoppable domain which we store in the decentralized profile of the user.

<div style="position: relative; padding-bottom: 56.25%;">
<iframe style="border: 1; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" src="https://www.youtube.com/embed/IVo6tN8BpOY?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

The app is hosted on Vercel at https://ceramic-unstoppable.vercel.app/.

The GitHub repository is at https://github.com/Pfed-prog/Ceramic_Unstoppable.

## Requirements

Node.js v14 and npm v6

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

First we create an app by using React framework and cd into the directory:

<div style="background: #ffffff; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><table><tr><td><pre style="margin: 0; line-height: 125%">1
2</pre></td><td><pre style="margin: 0; line-height: 125%">npx create-react-app new-app
cd new-app
</pre></td></tr></table></div>

Then we install the dependencies for ceramic and unstoppbale domains:

<div style="background: #ffffff; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">npm install @ceramicnetwork/http-client @ceramicnetwork/3id-did-resolver dids @3id/connect @ceramicnetwork/stream-tile @unstoppabledomains/resolution
</pre></div>

and install dependencies necessary to connect the pieces:

<div style="background: #ffffff; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">npm install @ethersproject/providers @uauth/web3-react @web3-react/abstract-connector @web3-react/core @web3-react/injected-connector @web3-react/walletconnect-connector
</pre></div>

After the dependencies are installed we move into the <code> src </code> folder via <code> cd src </code> and create a new file where after a successful login we can access ceramic DID Datastore and update the data. This file we name as <code> DataModels.js </code>. We also create an additional css file for <code> Datamodels.js </code> that we name as <code>App.module.css</code>.

Additionally, we create <code> connectors.js </code> file that we access in <code>App.js</code> to connect to Ethereum Providers.

## Coding the application

In <code> connectors.js </code> we create three wallet connectors: useWeb3React Injected connector to Ethereum Mainnet with MetaMask, Walletconnect and UAuthConnector for Unstoppable Domains.

<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2FPfed-prog%2FCeramic_Unstoppable%2Fblob%2Fmain%2FUnstoppable_Ceramic%2Fsrc%2Fconnectors.js&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on"></script>

In <code> App.js </code> we import following libraries, files and define a constant to initialize ceramic client:

<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2FPfed-prog%2FCeramic_Unstoppable%2Fblob%2Fmain%2FUnstoppable_Ceramic%2Fsrc%2FApp.js%23L1-L13&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on"></script>

Meanwhile the function App is where we define states, hooks and functions:

<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2FPfed-prog%2FCeramic_Unstoppable%2Fblob%2Fmain%2FUnstoppable_Ceramic%2Fsrc%2FApp.js%23L15-L140&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on"></script>

On the initial state the app display three buttons, which relate to a distinct wallet connector. Once the user pushes the button the state active becomes true, connecting to the wallet. After the wallet is connected the ceramic client initializes and connects to the decentralizes identity. Finally, following the successful ceramic client connection the user enters to the profile skills page.

In <code>DataModels.js</code> we define the determenistic Ceramic tiles where the users edits and stores skills data.

<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2FPfed-prog%2FCeramic_Unstoppable%2Fblob%2Fmain%2FUnstoppable_Ceramic%2Fsrc%2FDataModels.js&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on"></script>

![Ceramic Unstoppable Domains skills page](/images/posts/ceramic/qyg4dep.jpg)

## Related Posts

- [Simple QR code generator on AWS with Flask](https://dspyt.com/simple-qr-code-generator-on-aws-with-flask)
- [How to implement asyncio python tutorial](https://dspyt.com/simple-asynchronous-python-webscraper-tutorial)
- [Aurora — EVM on the NEAR Protocol blockchain](https://dspyt.com/aurora-near-protocol-evm)
- [Simple and easy heroku telegram bot in Python](https://dspyt.com/simple-telegram-bot-in-python-hosted-easily-on-heroku)
