---
title: "Exploring and Refactoring Contraktor - Ethereum Explorer"
date: "February 25, 2023"
excerpt: "Refactored an archived open source Ethereum explorer called Contraktor, connecting Rainbowkit, Wagmi and Ethers to the explorer."
cover_image: "/images/posts/explorer/explorer.webp"
authors: ["dspytdao"]
tags:
  [
    "smart contracts",
    "Ethereum",
    "explorer",
    "etherscan",
    "nextjs",
    "Rainbowkit",
    "wagmi",
    "ethers",
    "refactoring",
    "evm explorer",
    "blockscout",
    "JavaScript",
    "React",
  ]
---

This week I explored and refactored an archived open source Ethereum explorer called [Contraktor](https://github.com/wslyvh/contraktor). The project had not been updated in some time and was not working properly, so I took it upon myself to bring it back to life.

## Contraktor

Contraktor is an open source Ethereum explorer that provides users with the ability to browse through common DeFi projects or any other verified smart contract from Etherscan, find related smart contracts on different networks, and visualize and interact with the contract's resources and state. It is written in JavaScript and uses React for the frontend and Node.js for the backend.

Contraktor is an excellent tool for developers who are looking to explore and interact with the Ethereum blockchain. It provides a user-friendly interface that allows users to easily navigate through the various contracts on the network and view detailed information about them. Furthermore, it also provides users with the ability to find related smart contracts on different networks and interact with their resources and state.

Overall, Contraktor is a powerful tool that can be used by developers to quickly explore and interact with the Ethereum blockchain.

## Updated NextJs Ethereum Explorer

[NextJs Ethereum Explorer](https://github.com/Pfed-prog/NextJsExplorer) provides users with the ability to browse through common DeFi projects or any other verified smart contract from Etherscan, find related smart contracts on different networks, and visualize and interact with the contract's resources and state. To achieve this, I connected Rainbowkit Wagmi Ethers to the explorer and refactored the types in Typescript.

In addition, I discovered a really great [npm package `@studydefi/money-legos`](https://www.npmjs.com/package/@studydefi/money-legos) that provides users with the mainnet addresses, ABIs, and Solidity interfaces for popular DeFi protocols. This was a great discovery and will make it much easier for developers to work with DeFi protocols in their own projects.

## Conclusion

Overall, this week was productive and I am making good progress on the project. In the next week, I will continue developing the detailed information view and improve the user interface for the project.

## Further Resources and Related Posts

- [Exploring Ethereum Network with Etherscan and BlockScout](https://dspyt.com/exploring-ethereum)
- [Blockchain Data Indexer with TrueBlocks](https://dspyt.com/blockchain-data-indexer-with-trueblocks)
- [Advanced Realized Volatility and Quarticity](https://dspyt.com/advanced-realized-volatility-and-quarticity)
- [Machine Learning with Sklearn](https://dspyt.com/machine-learning-time-series-temperature-data-modeling)
- [How to illustrate log returns vs simple returns](https://dspyt.com/simple-returns-log-return-and-volatility-simple-introduction)
- [A How to EfficientNet Classification](https://dspyt.com/efficientnet-classification)
