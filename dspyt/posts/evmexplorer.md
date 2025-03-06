---
title: "EVM Explorer - Tracking Smart Contract Transaction Data"
date: "June 17, 2024"
excerpt: "Discover EVM Explorer by Dspyt Team: an open-source tool for exploring and analyzing smart contracts across multiple EVM chains. Explore now!"
cover_image: "https://dspyt.com/images/posts/evmexplorer/evmexplorer.webp"
tags:
  [
    "EVMExplorer",
    "Transactions",
    "track token balances",
    "Delegate",
    "Smart Contracts",
    "Defi",
    "data",
    "dspyt",
    "Mainnet",
    "optimism",
    "OP",
    "ethereum",
    "eth",
    "filecoin",
    "filecoin fvm",
    "Fil",
    "zora",
    "zora blockchain",
    "base",
    "redstone",
    "blockchain data analysis",
    "Token",
    "finance",
    "uniswap",
    "aave",
    "ens domains",
    "compound",
    "open-source blockchain tool",
    "smart contract analysis",
    "Ethereum Mainnet",
    "Optimism blockchain",
    "EVM chains",
    "smart contract data",
    "analyze transaction patterns",
  ]
---

We are excited to announce the release of [EVM Explorer](https://evmexplorer.com/), a powerful, open-source web interface designed to streamline the exploration and analysis of blockchain data. Utilizing the BlockScout API and viem library, EVM Explorer enables users to delve into transaction patterns and user behavior across multiple EVM chains.

## What is EVM Explorer?

[EVM Explorer](https://evmexplorer.com/), a custom open-source web interface to collect data with the help of [BlockScout API](https://docs.blockscout.com/devs/apis) and [viem npm package](https://www.npmjs.com/package/viem) to explore transaction patterns and user behavior.

EVM Explorer is a versatile tool that simplifies the process of exploring and analyzing smart contracts. With its intuitive interface, users can access detailed information and statistics about smart contracts, user addresses, token balances, transactions, and blocks.

![Main Page](https://dspyt.com/images/posts/evmexplorer/mainpageevm.webp)

## Discover and track EVM smart contract data

Search, Discover, and Track contracts by their address on 9 EVM chains: Ethereum Mainnet, Optimism, Base, Mode Network, Zora, Redstone, Polygon, Arbitrum and Filecoin.

![Choose Network](https://dspyt.com/images/posts/evmexplorer/choosenetwork.webp)

Simply paste the contract address, select a network, and click the Submit button to view transactions.

Let's navigate to Vitalik's ethereum address page:

![Vitalik's Address Search EVM Explorer](https://dspyt.com/images/posts/evmexplorer/vitalikInSearch.webp)

After you click the submit button, you will be redirected to a page related to an address.

## Blockchain Address page

![Vitalik.eth Data](https://dspyt.com/images/posts/evmexplorer/vitalik.webp)

[Vitalik's Ethereum address page](https://evmexplorer.com/contracts/mainnet/0xd8da6bf26964af9d7eed9e03e53415d37aa96045) displays a balance of ETH token in US Dollars as well as an address hash and an ENS name.

Users can also view the 50 latest transactions associated with an address, including:

- Transaction Hash
- Transaction Block
- Transaction Timestamp

- Transaction Method and Type: colored to reflect the mix of coin transfer, token transfer, and contract call.
- Transaction sender
- Transaction receiver

- Gas Used
- Gas Price in Gwei

- Transaction Value in USD
- Gas fee cost in USD

- Result of the transaction

In addition, for smart contracts aggregate data should also be available:

- Number of Transactions
- Number of Token Transfers
- Average Gas per Transactions
- Gas Usage
- Number of Validations

For example, [Optimism (OP) governance token page on optimism network](https://evmexplorer.com/contracts/optimism/0x4200000000000000000000000000000000000042):

![Optimism ERC20 Token Data](https://dspyt.com/images/posts/evmexplorer/optokendata.webp)

[Arbitrum (ARB) governance token page on arbitrum network](https://evmexplorer.com/contracts/arbitrum/0x912ce59144191c1204e64559fe8253a0e49e6548):

![Arbitrum ERC20 Token Data](https://dspyt.com/images/posts/evmexplorer/arbitrum.webp)

For a Number of Validations example, please, have a look at [Lido Execution Layer Rewards Vault on Ethereum](https://evmexplorer.com/contracts/mainnet/0x388C818CA8B9251b393131C08a736A67ccB19297):

![Lido smart contract Data](https://dspyt.com/images/posts/evmexplorer/Lido.webp)

## Transaction page

The transaction page contains a block number, transaction type, transaction timestamp, receiver, contract method call name and details, sender, transaction value in USD, gas fee cost in USD and token transfers details.

For instance, have a look at Vitalik's [swap transaction](https://evmexplorer.com/transactions/mainnet/0x8c973ec1f829663aa22b37d6a1c76a8e31c647ae80f17fbec1596c678f393bec) with Meta Aggregation Router V2.

![Vitalik Transaction page](https://dspyt.com/images/posts/evmexplorer/vitalikTransactionSwap.webp)

## Blocks page

On the Blocks page, users can access essential information such as block number, block miner, block timestamp, providing insight into the blockchain's operations. For example, [20,898,767 Ethereum mainnet block](https://evmexplorer.com/blocks/mainnet/20898767) is displayed below.

![Blocks Page](https://dspyt.com/images/posts/evmexplorer/blocksPageMainnet.webp)

Additionally, aggregate data is prominently displayed, including the total **Gas Usage**, **Transactions count**, and **Average Gas per Transaction**, offering a comprehensive overview of the block's activity. Furthermore, the page showcases detailed transaction data with information on the receiver, sender, gas used, and transaction value in USD similar to transaction data available on an **address page**.

## Explorer Page

[Explorer Page](https://evmexplorer.com/explorer) contains links to popular sets of smart contracts:

- [AAVE](https://evmexplorer.com/explore/Aave)
- [Aerdrome Finance](https://evmexplorer.com/explore/Aerodrome%20Finance)
- [Compound Finance](https://evmexplorer.com/explore/Compound)
- [ENS Domains](https://evmexplorer.com/explore/ENS%20Domains)
- [ERC 20 tokens](https://evmexplorer.com/explore/ERC20)
- [Uniswap](https://evmexplorer.com/explore/Uniswap)
- [Overnight Finance](https://evmexplorer.com/explore/Overnight%20Finance)
- [PancakeSwap](https://evmexplorer.com/explore/PancakeSwap)
- [ERC 721 tokens](https://evmexplorer.com/explore/ERC721)
- [ERC 1155 tokens](https://evmexplorer.com/explore/ERC1155)
- [Optimism Governance](https://evmexplorer.com/explore/OP%20Governance)
- [Velodrome Finance](https://evmexplorer.com/explore/Velodrome%20Finance)
- [Token Sets](https://evmexplorer.com/explore/Token%20Sets)

![EVM Explorer Explorer Page](https://dspyt.com/images/posts/evmexplorer/explorer.webp)

For instance, clicking on [ERC20 rectangle](https://evmexplorer.com/explore/ERC20) will display detailed information about ERC20 contracts and networks.

![EVM Explorer Erc20](https://dspyt.com/images/posts/evmexplorer/erc20.webp)

You can also search contracts by name and a chain:

![EVM Explorer Erc20 Search](https://dspyt.com/images/posts/evmexplorer/erc20Search.webp)

## Token data as an image and consise report

Selecting an ERC20, ERC721 or ERC1155 token contract will lead you to an address page where you easily copy data as a concise text report or PNG image with just one click.

An Example of Copied PNG Image, particularly popular on Social Networks:

![Copy Arbitrum Token Data](https://dspyt.com/images/posts/evmexplorer/tokeninfo.webp)

Available data:

- Contract Name
- Token Name
- Token type
- Token Name
- Number of Holders
- Price for one token in USD
- Uniswap best price fetch reported with a pool fee and price
- 24h Volume
- % of circulating market cap
- Contract address
- Block Number Timestamp
- Chain Id

## Conclusion

We value your feedback! If you have any suggestions for improving our platform, please join our [Discord channel](https://discord.gg/TMEZau6SQ2) or reach out on [Twitter](https://twitter.com/dspytdao).

Dive into the world of EVM data with EVM Explorer and make your blockchain exploration more efficient and insightful.

## Useful Links

- [EVM Explorer](https://evmexplorer.com/)
- [EVM Explorer Contributions](https://www.metricsgarden.xyz/projects/0x3cb489dcb2aa68def2d7fe8e8c75959dd1e6e988d2096abcb95ce4323006094e/?tab=contributions)
- [EVM Smart Contract Explorer](https://www.youtube.com/watch?v=Y7fGrxGWwuA)
- [Optimism Curia Governance Dashboard](https://optimism.curiahub.xyz/)
- [Optimism Agora](https://vote.optimism.io/)
- [Optimism Governance Agora smart contract](https://optimistic.etherscan.io/address/0xcdf27f107725988f2261ce2256bdfcde8b382b10#readProxyContract)
