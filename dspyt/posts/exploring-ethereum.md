---
title: "Exploring Ethereum Network with Etherscan and BlockScout"
date: "February 9, 2023"
excerpt: "Powerful tools for exploring Ethereum networks and their associated contracts provide users with an easy-to-use interface for searching and exploring contracts."
cover_image: "/images/posts/explorer/pexels-pixabay-163064.webp"
authors: ["dspytdao", "pavel-fedotov"]
tags:
  [
    "Ethereum",
    "explorer",
    "etherscan",
    "data",
    "blockhain",
    "ethplorer",
    "interface",
    "smart contracts",
    "blockscout",
    "Bitquery",
    "javascript",
    "typescript",
    "blockchain indexer",
  ]
---

The Ethereum blockchain is a powerful tool for developers, providing a platform for the creation and deployment of smart contracts. With the increasing popularity of decentralized applications, there is a need for an efficient way to explore and analyze the Ethereum network and its associated contracts.

Fortunately, there are some great tools available to help with this task. Etherscan, Ethplorer and BlockScout are three of the most popular Ethereum contract explorers. They provide users with an easy-to-use interface for exploring Ethereum contracts, and offer a variety of features to help users understand the blockchain.

## Etherscan

[Etherscan](https://etherscan.io/) is one of the most popular contract explorers, offering a comprehensive view of the Ethereum network. It allows users to search for contracts based on various criteria such as address, transaction hash, contract name, etc. It also provides detailed information about each contract such as the code, deployed transactions, storage and execution costs, etc. Additionally, Etherscan allows users to view the network activity of a contract over a period of time.

[Etherscan Docs](https://docs.etherscan.io/) Ethereum Mainnet example in javascript

```js
const response = await fetch(
  `https://api.etherscan.io/api?module=contract&action=getsourcecode&address=${address}&apikey=${process.env.ETHERSCAN_API_KEY}`
);
const body = await response.json();
```

## Ethplorer

[Ethplorer](https://ethplorer.io/) is another popular contract explorer that provides similar features as Etherscan since 2016. It allows users to search for contracts and view detailed information about them. It also offers advanced analytics such as token holders, transactions, which can be used to better understand the underlying network.

[Ethplorer API](https://github.com/EverexIO/Ethplorer/wiki/Ethplorer-API) Ethereum Mainnet example in javascript

```js
const response = await fetch(
  `https://api.ethplorer.io/getAddressInfo/${address}?apiKey=freekey`
);
const body = await response.json();
```

## Bitquery

[Bitquery](https://explorer.bitquery.io/) is an Ethereum block explorer that provides users with an easy-to-use interface for searching and exploring Ethereum contracts and their associated data. It allows users to search for contracts based on various criteria such as address, transaction hash, contract name. Additionally, it provides detailed information about each contract such as the code, deployed transactions, storage and execution costs. It also offers advanced analytics such as gas usage and other metrics that can be used to analyze the performance of the network.

However, [this stack overflow thread](https://stackoverflow.com/questions/70784272/bitquery-wrong-data-not-real-time) does not seem to promise accurate data.

## BlockScout

Finally, [BlockScout](https://www.blockscout.com/) is a powerful open source project that allows users to explore Ethereum networks and their associated contracts. It provides an easy-to-use interface for searching and exploring contracts, as well as detailed information about each contract. Additionally, BlockScout offers advanced analytics such as gas usage and other metrics that can be used to analyze the performance of the network.

[BlockScout Ethereum Mainnet API](https://eth.blockscout.com/api-docs) example in typescript:

```ts
export type CountersContract = {
  gas_usage_count: string;
  token_transfers_count: string;
  transactions_count: string;
  validations_count: string;
};

const query = `https://eth.blockscout.com/api/v2/addresses/${address}/counters`;
const response: Response = await fetch(query);
const body: CountersContract = await response.json();
```

## Conclusion

Overall, Etherscan, Ethplorer, Bitquery and BlockScout are all excellent tools for exploring Ethereum networks and their associated contracts. They provide users with an easy-to-use interface for searching and exploring contracts, as well as detailed information about each contract. Additionally, they offer advanced analytics that can be used to better understand the underlying network.

## Further Resources and Related Posts

- [NextJs Ethereum Explorer](https://github.com/Pfed-prog/NextJsExplorer)
- [Exploring and Refactoring Contraktor - Ethereum Explorer](https://dspyt.com/refactoring-contraktor)
- [Blockchain Data Indexer with TrueBlocks](https://dspyt.com/blockchain-data-indexer-with-trueblocks)
- [Advanced Realized Volatility and Quarticity](https://dspyt.com/advanced-realized-volatility-and-quarticity)
- [Machine Learning with Sklearn](https://dspyt.com/machine-learning-time-series-temperature-data-modeling)
- [How to illustrate log returns vs simple returns](https://dspyt.com/simple-returns-log-return-and-volatility-simple-introduction)
- [A How to EfficientNet Classification](https://dspyt.com/efficientnet-classification)
