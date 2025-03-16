---
title: "Aurora — EVM on the NEAR Protocol blockchain"
date: "April 22, 2022"
excerpt: "Aurora delivers Ethereum-compatible, high-throughput, scalable and future-safe platform, with low transaction costs."
cover_image: "https://dspyt.com/images/posts/aurora/aurora.webp"
authors: ["pavel-fedotov"]
tags:
  [
    "aurora",
    "near",
    "evm",
    "near evm",
    "near-protocol",
    "L2",
    "web3",
    "ethereum",
    "blockchain",
    "scalable",
    "Rainbow Bridge",
  ]
---

Blockchain technology is one of the most exuberant technologies at the moment. However, it can be very complicated with technical challenges at every stage. The opportunity now is to bridge the innovative world of Web 3.0 with the convenience and familiarity of Web 2.0, in order to make it more widely adopted.

Web 3 is exponentially growing, which is why developers build Layer 2 networks. They offload execution of programmable smart contracts from the Ethereum base layer to improve speed and reduce transaction costs.

## Aurora Overview

The NEAR Protocol created Aurora, an Ethereum Virtual Machine. The technology delivers a turn-key solution for developers to operate their apps on an Ethereum-compatible, high-throughput, scalable and future-safe platform, with low transaction costs for their users.

[Aurora](https://aurora.dev/) is a layer 2 solution on top of the NEAR Protocol, which is a sharded proof-of-stake blockchain. This allows the creation of a highly scalable and fault-tolerant network that can be used for a variety of applications, as well as being compatible with the Ethereum Virtual Machine.

Aurora is the perfect platform for developers who want to create high-performance decentralised applications.

## Aurora DAO

DAO is an entity owned and managed by their collective membership with no central authority and operating through smart contracts that automatically execute whenever a specific set of criteria are met. Token holders can propose and vote on new ideas and changes, and that is the main way that Aurora grows and improves.

[Aurora DAO](https://aurora.dev/dao) functions similarly to a traditional Board of Directors, in that there is a “Council” of seats, the holders of which vote on high-level protocol matters, authorise and direct subordinate organisations to achieve those objectives.

The bootstrap Council consists of Aurora Labs, the entity that has developed and maintains the Aurora protocol along with a diverse set of early investors and ecosystem partners. Holders of AURORA tokens periodically vote on the constituency of the Council.

![Projects Partners in the Aurora Council](https://dspyt.com/images/posts/aurora/au1.webp)

![The Record of Proposals Aurora](https://dspyt.com/images/posts/aurora/au2.webp)

## EVM Scaling

The Aurora team is working on making their platform more efficient so that it can handle an entire Ethereum block in a single NEAR transaction. This is a difficult task, but with the release of Engine version 2.4.0, they have made significant progress. The new update is important for both users and developers as it reduces the amount of gas used by the platform, making it more affordable and easier to use.

Let’s get into the numbers and statistics of Aurora Layer 2 Solution. The average block time is around 1.03 seconds, and the finality is 2 seconds. The typical transaction cost is 1c or less, and using the NEAR consensus mechanism, they can process hundreds of transactions per second easily. This is incredibly fast especially when compared against Ethereum, which handles around 13 transactions per second (TPS), according to Etherscan.

## Smart Contracts and Technical Details

Smart contracts are a new type of programming that require careful diligence and review to ensure they are secure and gas-efficient. Security is a paramount consideration for developers of these contracts. Therefore, it is highly important to inherit and enhance smart contract best practices as well as attract the most proficient developers from Ethereum.
The Aurora Engine is a smart contract written in Rust on the NEAR blockchain. It contains a full EVM interpreter to be able to execute transactions exactly the same as Ethereum, as well as all the auxiliary logic for validating transactions before execution (checking signature, nonce, account balance vs gas price, etc).

To describe in more details, when you send a transaction to an Aurora RPC endpoint our infrastructure wraps your signed Ethereum transaction into a NEAR transaction for the Engine. This means each Aurora transaction becomes a NEAR transaction, and therefore must follow the rules of the NEAR protocol.

## Rainbow Bridge

![Rainbow Bridge Aurora](https://dspyt.com/images/posts/aurora/au3.webp)

The Rainbow Bridge allows users to seamlessly migrate assets to NEAR developer-friendly and low-cost platform, circumventing high gas fees without compromising on speed. This is possible because the NEAR protocol is compatible with Ethereum’s smart contracts. As a result, users can move their assets from Ethereum to NEAR without having to worry about losing any of the functionality or security.

[Rainbow Bridge](https://rainbowbridge.app/about) currently supports a total of 73 tokens. The following popular tokens with common ERC-20 functionality are able to interoperate with NEAR, including but not limited to:

Stablecoins like USDT (Tether), DAI, and TUSD; wrapped assets like WBTC and WETH; DEX tokens like UNI and 1INCH; lending tokens like AAVE and COMP; service company tokens like HT (Huobi) and CRO (Crypto.com). Users can send these ERC-20 assets directly from MetaMask or other Web3 wallets to NEAR wallets and apps, and vice versa.

According to [Dune Analytics Dashboard](https://dune.com/zavodil/rainbow-bridge) as of 25 May 2022, users bridged the total assets accounting for $2,074,653,944.94. DAI, USDT and USDC constituted the most volume.

![Dune Analytics Aurora Dashboard](https://dspyt.com/images/posts/aurora/au4.webp)

## Decentralized finance (DeFi) on Aurora

Cryptocurrencies and tokens are not just transforming finance and money, but also the ways in which creators can form Internet-native organizations to create and share value. Web3 has become a proxy for new economic ideas and value creation.

Ethereum-powered decentralized exchanges are a fast growing market. With the ability to conduct real-time, low-cost trades, they are opening up a new class of users. These exchanges will offer a level of privacy and security that is not possible on centralized exchanges. In addition, they also need to be fast, scalable, secure, highly available, resilient and user-friendly. This is where Aurora comes in. It provides the security and speed of Layer 1 and the scalability of Layer 2.

Popular DeFi dApps on Aurora include Curve and Bastion Protocol. Curve is an exchange liquidity pool on Ethereum for efficient stablecoin trading with low risk. The latter is an algorithmic, DeFi lending protocol on Aurora.

Building on NEAR enabled Bastion to have ultra-low transaction fees, greater capital efficiency, fast transactions and precise liquidations. Bastion is also bringing the next DeFi primitive to NEAR — money markets. Money markets are the biggest DeFi primitive on Ethereum with Aave and Compound. Chain-native lending protocols have seen similar success in the likes of Solend on Solana, and Benqi on Avalanche.

Bastion chose to build on Aurora/NEAR because they believe the ecosystem has the highest sustainable growth potential. As the fastest sharded Proof-of-Stake chain with superb DevX and infrastructure tools — NEAR has all it takes to become a powerhouse in DeFi space.

![Bastion Pool on Aurora](https://dspyt.com/images/posts/aurora/au5.webp)

## Conclusion

Aurora is a layer 2 solution that is built on top of the NEAR Protocol. It is compatible with the Ethereum Virtual Machine and offers a turn-key solution for developers to operate their apps on an Ethereum-compatible, high-throughput, scalable and future-safe platform. The team behind Aurora has a wealth of experience in building scalable systems and the platform is perfect for developers who want to create high-performance decentralised applications.

## Related Posts

- [Blockchain Data Indexer with TrueBlocks](https://dspyt.com/blockchain-data-indexer-with-trueblocks)
- [Advanced Realized Volatility and Quarticity](https://dspyt.com/advanced-realized-volatility-and-quarticity)
- [Machine Learning with Sklearn](https://dspyt.com/machine-learning-time-series-temperature-data-modeling)
- [How to illustrate log returns vs simple returns](https://dspyt.com/simple-returns-log-return-and-volatility-simple-introduction)
- [A How to EfficientNet Classification](https://dspyt.com/efficientnet-classification)
