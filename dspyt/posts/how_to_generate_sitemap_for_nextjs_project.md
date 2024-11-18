---
title: "How to generate nextjs sitemap for your project"
date: "29 October, 2022"
excerpt: "We generate sitemap and robots.txt for our webbadminton open-source nextjs project with help of next-sitemap."
cover_image: "/images/posts/sitemap/sitemap.webp"
tags:
  [
    "nextjs",
    "sitemap",
    "webbadminton",
    "npm",
    "javascript",
    "yarn",
    "google",
    "sitemap",
    "next-sitemap",
    "nextjs sitemap",
    "next js sitemap",
    "next js robots txt",
    "generate metadata nextjs",
    "nextjs generate sitemap",
  ]
---

Creating a sitemap for your nextjs project can be a daunting task. But with the right tools, it's easy to create a custom sitemap that is both efficient and effective. Here's a quick guide on how to create a sitemap for your nextjs project.

## What is a sitemap?

A sitemap is a file that contains information about your site's pages, videos, and other assets, as well as the relationships between them. Search engines like Google read sitemap to crawl your site more efficiently. A sitemap tells Google which pages and files on your site you believe are significant. For example, sitemap documents the latest update date of pages, and if there are any different language versions of the page.

## NextJs Sitemap Example: Web Badminton

<div className="flex justify-center">
    <iframe width="600" height="350" src="https://www.youtube.com/embed/Dud9a8ShCVM?autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"></iframe>
</div>

Web Badminton is a decentralized badminton centered dapp on IPFS and Polygon Blockchain.

The application utilizes JavaScript, NextJS, React, Tailwind Css and Wagmi library, IPFS, nft.storage and web3.storage.

The smart contract is built with solidity, hardhat and polygon blockchain mumbai testnet.

[Web Badminton GitHub](https://github.com/BadmWe/WebBadminton)

[Web Badminton Demo](https://webbadminton.com)

## What are the disadvantages?

Using a sitemap effectively involves more work, as you have to create a proper, structured one. You can use a link-reduction service like Yoast SEO to generate your sitemap for you, but then you have to maintain and update it on a regular basis. There are also some SEO risks involved, like modifying page elements within your sitemap without taking out any pages. It's worth keeping in mind that with a well-organized sitemap, Googlebot will still index your site even without a title tag, category tags, internal links, image alt tags, article text, meta descriptions, or other HTML tags.

## Generating nextjs sitemap

We generate nextjs sitemap with `next-sitemap` [npm package](https://www.npmjs.com/package/next-sitemap).

To run the process, you need a nextjs application. To install `next-sitemap`, you can run:
`yarn add next-sitemap`.

Next in the config file which is `next-sitemap.config.js` you include the website url and options such as where to generate `robots.txt`:

```js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://example.com",
  generateRobotsTxt: true,
};
```

Further adding `postbuild` script to `package.json` will automatically generate sitemap on the server hosted by vercel.

```json
{
  "build": "next build",
  "postbuild": "next-sitemap"
}
```

You can also add extra options to the next-sitemap.config.js file. These include options to exclude paths, specify priority levels for different types of pages, and even add extra metadata to each page. You can also customize the sitemap format with a custom XSLT template.

Once you have the sitemap generated, you can submit it to Google and other search engines. This will ensure that your site is indexed quickly and accurately.

You can also use the sitemap to create a custom navigation bar for your site. This can help users find the content they are looking for quickly and easily.

Finally, you can use the sitemap to create a sitemap index file. This will make it easier for search engines to find your sitemaps and index your site faster.

## Submitting Your Nextjs Sitemap to Search Engines

Submitting your nextjs sitemap to search engines is the best way to ensure that your website is indexed quickly and accurately. To do this, you need to submit the sitemap to Google, Bing, and other search engines. This can be done by adding the URL of your sitemap in the robots.txt file of your website or by manually submitting it to each search engine. It is important to keep the sitemap up to date as search engines use it to crawl your website. Regularly updating your sitemap will help make sure that your site is indexed correctly and efficiently.

## Conclusion

Creating a sitemap for your nextjs project is a great way to ensure that your site is indexed quickly and accurately by search engines. By using the right tools, such as the next-sitemap npm package and adding `postbuild` scripts to your package.json file, you can easily generate a sitemap for your project. Furthermore, submitting your sitemap to search engines can help them index your site faster and more accurately. With the right tools and techniques, creating a sitemap for your nextjs project is easy and efficient.

## Related Posts

- [Simple Ceramic Data Model App](https://dspyt.com/simple-app-with-ceramic-data-model-and-unstoppable-domains)
- [Advanced Realized Volatility and Quarticity](https://dspyt.com/advanced-realized-volatility-and-quarticity)
- [Machine Learning with Simple Sklearn Ensemble](https://dspyt.com/machine-learning-simple-sklearn-ensemble)
- [How to illustrate log returns vs simple returns](https://dspyt.com/simple-returns-log-return-and-volatility-simple-introduction)
- [A How to EfficientNet Classification](https://dspyt.com/efficientnet-classification)
- [Cross-sectional data – An easy introduction](https://dspyt.com/cross-sectional-data-an-easy-introduction)
