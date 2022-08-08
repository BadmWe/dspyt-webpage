---
title: "Simple App with Ceramic Data Model and Unstoppable Domains"
date: "OCtober 26, 2021"
excerpt: ""
cover_image: "/images/posts/ceramic/pexels-antonio-batinic-4164418.jpg"
time_read: "5 min"
---

Ceramic allows users to have complete ownership over their data by providing decentralized technologies for authentication and data storage.

In this tutorial we set up an application to interact with JS HTTP Client through a public Ceramic node. In addition we create a deterministic Ceramic Tile and resolve an unstoppable domain which we store in the decentralized profile of the user.

![](/images/posts/ceramic/qyg4dep.jpg)

<iframe width="560" height="315" src="https://www.youtube.com/embed/IVo6tN8BpOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The app is hosted on Vercel at https://ceramic-unstoppable.vercel.app/.

The GitHub repository is at https://github.com/Pfed-prog/Ceramic_Unstoppable.

## Requirements

Node.js v14 and npm v6

For more detailed information look at:
https://developers.ceramic.network/build/javascript/http/

## Libraries

- @ceramicnetwork/http-client
- @ceramicnetwork/stream-tile
- @ceramicnetwork/3id-did-resolver
- @3id/connect
- dids
- @unstoppabledomains/resolution

## Application dependencies and set up

First we create an app by using React framework and cd into the directory:

<div style="background: #ffffff; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><table><tr><td><pre style="margin: 0; line-height: 125%">1
2</pre></td><td><pre style="margin: 0; line-height: 125%">npx create-react-app new-app
cd new-app
</pre></td></tr></table></div>

Then we install the dependencies:

<div style="background: #ffffff; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">npm install @ceramicnetwork/http-client @ceramicnetwork/3id-did-resolver dids @3id/connect @ceramicnetwork/stream-tile @unstoppabledomains/resolution
</pre></div>

After the dependencies are installed we move into the <code> src </code> folder via <code> cd src </code> and create a new file where after a successful login we can access ceramic DID Datastore and update the data. This file we name as <code> DataModels.js </code>. We also create an additional css file for <code> Datamodels.js </code> that we name as <code>App.module.css</code>.

## Coding the application

In <code> App.js </code> we import following libraries and files:
