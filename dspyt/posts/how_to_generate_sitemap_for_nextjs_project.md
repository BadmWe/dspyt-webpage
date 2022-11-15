---
title: "How to generate nextjs sitemap for your project"
date: "29 October, 2022"
excerpt: "We generate sitemap and robots.txt for our webbadminton open-source nextjs project with help of next-sitemap."
cover_image: "/images/posts/sitemap/sitemap.webp"
time_read: "1 min"
tags: ["nextjs", "sitemap", "webbadminton", "next-sitemap", "npm", "javascript"]
---

## What is a sitemap?

A sitemap is a file that contains information about your site's pages, videos, and other assets, as well as the relationships between them. This file is read by search engines like Google in order to crawl your site more efficiently. A sitemap tells Google which pages and files on your site you believe are significant, as well as providing valuable information about these items. For example, when was the page last changed, and if there are any different language versions of the page.

## What are the disadvantages?

Using a sitemap effectively involves more work, as you have to create a proper, structured one. You can use a link-reduction service like Yoast SEO to generate your sitemap for you, but then you have to maintain and update it on a regular basis. There are also some SEO risks involved, like modifying page elements within your sitemap without taking out any pages. It's worth keeping in mind that with a well-organized sitemap, Googlebot will still index your site even without a title tag, category tags, internal links, image alt tags, article text, meta descriptions, or other HTML tags.

## Generating nextjs sitemap

We generate nextjs sitemap with next-sitemap npm package: https://www.npmjs.com/package/next-sitemap.

To run the process, you need a nextjs application. To install next-sitemap, you can run:
<code>yarn add next-sitemap</code>

<div style="position: relative; padding-bottom: 56.25%;">
<iframe style="border: 1; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" src="https://www.youtube.com/embed/Dud9a8ShCVM?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Web Badminton

Web badminton is a decentralized badminton centered dapp on IPFS and Polygon Blockchain.

The application utilises JavaScript, NextJS, React, Tailwind Css and Wagmi library, IPFS, nft.storage and web3.storage.

The smart contract is built with solidity, hardhat and polygon blockchain mumbai testnet.

GitHub: https://github.com/BadmWe/WebBadminton

Demo: https://webbadminton.com
