---
title: "How to generate parsiq wallet triggers for CryptoPunks - DSPYT"
date: "November 7, 2021"
excerpt: "We create 3 PARSIQ Platform Smart Triggers that respond to Crypto Punks directly related on-chain events and follow custom logic with parsiq wallet tracking."
cover_image: "https://dspyt.com/images/posts/parsiq/soc-e1658960455528.webp"
authors: ["pavel-fedotov"]
tags:
  [
    "smart triggers",
    "parsiq",
    "wallet",
    "data",
    "blockchain",
    "crypto punks",
    "on chain",
    "analysis",
    "wallet tracking",
  ]
---

In this post we create three parsiq platform smart Triggers that respond to CryptoPunks directly related on-chain events and follow custom logic to deliver all necessary transaction information about the price action.

Offers for Sale of the limited CryptoPunks collection are particularly vital to traders and collectors. New listings might prove to be an opportunity to profit from the immediate purchase. Meanwhile for traders new sales provide indicators for the demand and supply within the collections as well as for the market, in general.

Crypto punks is the NFT collection of 10000 uniquely generated characters. The collection has a highest market capitalization and market volume as of November 4th 2021.

![Crypto punks](https://dspyt.com/images/posts/parsiq/140242896-9c339336-e36b-4388-8aa9-56760bf8cd4a.webp)

## Simple Walkthrough

1. We created parsiq account with an Empty project instead of a template as it allows us to edit the trigger code.
   ![parsiq account with an Empty project](https://dspyt.com/images/posts/parsiq/140244531-09e16a47-fa12-40f6-bc77-7d139a8be8f4.webp)

2. Next, to monitor the NFT collection we added its contract ABI in the User stream on parsiq platform.
   ![monitor the NFT collection](https://dspyt.com/images/posts/parsiq/140627741-bea5116d-0b93-4f4d-af08-6fb4e321223e.webp)
   We select the ABI straight from the page and export into RAW/TEXT format and upload to parsiq platform.
   ![export abi](https://dspyt.com/images/posts/parsiq/140244623-07f2cb8d-c07c-448d-a9d3-809bb6d66600.webp)

3. Following data from Etherscan we choose three most frequent events so that we could use them with ParsiQL to create a trigger.
   ![Parsiq Trigger](https://dspyt.com/images/posts/parsiq/140629662-b5a2820d-e445-4846-9640-60b68ca4f946.webp)
   In our instance, we added the events: PunkOffered, PunkBidEntered and PunkBidWithdrawn.
   ![Parsiq Events](https://dspyt.com/images/posts/parsiq/140629515-5b5ccb36-07ed-46bc-ac06-1293bd50eb78.webp)

4. Back in our Project we also included transports to get the necessary data. There are four options: Web, Discord, Telegram and Google Sheets. In this project we implemented Web, Telegram and Google Sheets transports.
   ![Parsiq Transports](https://dspyt.com/images/posts/parsiq/image-768x333.webp)

5. As we implemented the necessary details we combine them as a final product. In our Project we create triggers for each of the events with similar ParsiQL code, deploy them and add transports. Here are some details on the code and configuration:
   ![ParsiQL code](https://dspyt.com/images/posts/parsiq/140609712-a9a03f36-60b8-4e35-b46d-0bede069844d.webp)
   ![ParsiQL code 2](https://dspyt.com/images/posts/parsiq/140251634-7ab5aeeb-613b-4921-8e32-718ae099d980.webp)
   ![ParsiQL code 3](https://dspyt.com/images/posts/parsiq/140609790-05521031-d2b7-4904-a67f-3b3a9412eb60.webp)
   ![ParsiQL code 4](https://dspyt.com/images/posts/parsiq/140245287-348d09c4-b07d-4762-b06a-7034bda3d7bd.webp)

## Results

We get immediate notifications through a telegram bot in the private channel.

![telegram bot in the private channel](https://dspyt.com/images/posts/parsiq/140609836-eb44988a-9017-4802-bb92-17279241a2f8.webp)

By using ngrok, we receive the post requests from the triggers.

For two out of three trigger we also post the data back on the Platform to update the User Tables with NodeJs.

```javascript
var express = require('express')
var request = require('request')

var app = express()
app.use(express.json())

app.post('/', function(req, res) {
console.log(JSON.stringify(req.body));
var options = {
'method': 'POST',
'url': 'https://api.parsiq.net/v1/data/{key-of-the-table}&#39;,
'headers': {
'Authorization': 'Bearer API-key-of-the-project',
'Content-Type': 'application/json'
},
body: JSON.stringify([
{
"address": req.body.fromAddress,
"Punk": req.body.punkIndex,
"Event":req.body.event
}
])};

request(options);
res.end();

})
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Application listening on port ${port} `))
```

We also configured three separate Google Sheet spreadsheets that serve as real time database for CryptoPunks collection. We use R to host the database and display the CryptoPunks on-chain activity.

<div className="flex justify-center">
    <iframe width="600" height="350" src="https://www.youtube.com/embed/5Be_iZKCQd0?autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"></iframe>
</div>

Further we suggest to utilize the data for a more comprehensive analysis with parsiq.

[GitHub repository for PARSIQ CryptoPunks Offers and Bids Tracking Dashboard](https://github.com/dspytdao/PARSIQ-CryptoPunks)

## Related Posts

- [Simple Ceramic Data Model App and Unstoppable Domains](https://dspyt.com/simple-app-with-ceramic-data-model-and-unstoppable-domains)
- [Simple QR code generator on AWS with Flask](https://dspyt.com/simple-qr-code-generator-on-aws-with-flask)
- [How to implement asyncio python tutorial](https://dspyt.com/simple-asynchronous-python-webscraper-tutorial)
- [Great blockchain insights with PARSIQ triggers for AXS](https://dspyt.com/blockchain-insights-with-parsiq-triggers-for-axie-infinity)
- [Guide to Marhaba Decentralized Financial Platform](https://dspyt.com/mrhb-defi-great-technologies-and-functionalities)
