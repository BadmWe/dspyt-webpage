---
title: "Simple Blockchain data indexing with TrueBlocks"
date: "April 27, 2022"
excerpt: "In this article we discuss Blockchain data indexing. Blockchain is a type of a shared database that differs from a typical database."
cover_image: "/images/posts/trueblocks/pexels-vitaly-vlasov-1342460-e1658960499878.webp"
authors: ["pavel-fedotov"]
tags:
  [
    "TrueBlocks",
    "Indexer",
    "data",
    "IPFS",
    "data storage",
    "GitCoin",
    "Ethereum",
    "database",
    "timestamp",
    "blockchain",
    "blockchain indexer",
    "blockchain indexing",
  ]
---

In this article we are going to discuss Blockchain data indexing. Blockchain is a type of a shared database that differs from a typical database in the way it stores information. A blockchain is a growing list of records, also called blocks, that are linked together using the latest cryptography technology. In general, each block contains a cryptographic hash of the previous block, a timestamp, and transaction data.

<div className="flex justify-center">
    <iframe width="600" height="350" src="https://www.youtube.com/embed/c9Yx3Niv-Gs?autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"></iframe>
</div>

For example, the transaction data in a Bitcoin Block contains information about the Sender, Receiver and the number of bitcoins to be transferred.

A blockchain database utilizes blockchain technology to create an immutable ledger of transactions. The first block in the chain is called the Genesis block. As each new block or transaction is recorded, it is added to the previous one to form a chain of data records or a blockchain. As a result, a blockchain contains every transaction recorded since the ledger was started. Blockchain data in a crypto space tends to be represented as a Merkle tree.

![Simple Blockchain data indexing with TrueBlocks](/images/posts/trueblocks/R2H51P1-768x489.webp)

## Data Storage

Blockchain is decentralized and a distributed database. This means that data is scattered around the participating computers which are called nodes.

When you are accessing the data, you are in fact sending messages to nodes on the network. The blockchain protocol guarantees that you can reconstruct the data from pieces of received information correctly and trustfully.

For large blockchains such as Ethereum and Bitcoin, the entire blockchain data is in order of hundreds of gigabytes, so if you configure your software to store it locally the software will typically download a number of large files from other computers and store it on your disk. However, getting a large amount of filtered and aggregated data directly from a node would take weeks.

## TrueBlocks and the Blockchain Data indexing

TrueBlocks builds and publishes an index that lets you explore the Ethereum blockchain from your local machine. The data comes directly from an Ethereum node and can be accessed from your local desktop without third-party APIs.

For deeper analysis such as conducting an anti-fraud analysis we would want to explore entire histories of addresses, calls and traces which requires an index. With TrueBlocks local index we can effectively serve an application filtered and aggregated data efficiently.

## Blockchain data indexing: The TrueBlocks System

TrueBlocks indexes Ethereum transactions which it periodically indexes and consolidates into chunks. The index chunks are immutable and are written into content-addressable data stores such as IPFS. TrueBlocks also produces a bloom filter at the same time which is also immutable and smaller than the chunk. The cost of producing the chunks, creating the bloom filters, and publishing both to IPFS is near zero.

Furthermore, TrueBlocks publishes daily the index of appearances on IPFS to a smart contract that can be used to recreate the entire index which they also call “The Unchained Index”.

The frontend software of TrueBlocks reads the IPFS location from the smart contract and downloads the bloom filters. When searching for a list of transactions on a given address, they use the blooms to decide which parts of the full index to download from IPFS.

The costs of publishing to the smart contract is dependent on the cost of gas, but the smart contract was created to minimize costs.

It is very important to note that if an end user has access to an Ethereum RPC endpoint and access to IPFS, they may acquire the index without reservation.

Unlike web 2.0 data delivery, TrueBlocks system becomes more efficient as more people utilize it. This behavior is a natural by-product of a content-addressable store. The system naturally distributes the index to users based on their personal usage.

## Comparative Blockchain data Indexing Solutions

theGraph is an indexing solution for blockchains such as Ethereum. theGraph is capable of indexing any data, but its primary use case is to index events generated by smart contracts.

It queries at web 2.0 speeds primarily because it is a web 2.0 based API. Tokens incentivize the indexers to provide a service to distributed applications. There is an extensive and overly-complicated arbitration mechanism to ensure the accuracy of the result and conflict resolution. To date, much of theGraph’s traffic runs through a traditional web-2.0 web server called “The Hosted Service” which is provided by theGraph free of charge

In comparison, TrueBlocks is an indexing solution for Ethereum. TrueBlocks focuses on “every appearance of every address anywhere on the chain.” TrueBlocks is very inexpensive to run and the software is lightweight enough to run locally. Finally, the results of TrueBlocks’ indexing process are provably-true and distributed web 3.0 native way that eliminates the possibility of capture.

A simple example of the higher quality indexing provided by TrueBlocks is that theGraph does not index “errored” transactions. This is due to the simple fact that events are not generated for transactions that end in error. TrueBlocks indexes every appearance of every address – both in-error and not in-error.

To illustrate this functionality TrueBlocks has conducted a study and found significantly more appearances of token transactions on its own system than on EtherScan. In almost every case, it was because of the “missing” appearances that transactional histories produced from EtherScan data did not reconcile.

## Conclusion

TrueBlocks produces index data and publishes it at near-zero cost, effectively sharing that data without creating a competition among users. Additionally, as the more people will use the data, the cheaper and more readily available it will become.

Consider donating to TrueBlocks through [GitCoin Grants](https://grants.gitcoin.co/).

## Related Posts

- [What is a blockchain address?](https://dspyt.com/what-is-blockchain-address)
- [Advanced Realized Volatility and Quarticity](https://dspyt.com/advanced-realized-volatility-and-quarticity)
- [Machine Learning with Simple Sklearn Ensemble](https://dspyt.com/machine-learning-simple-sklearn-ensemble)
- [How to illustrate log returns vs simple returns](https://dspyt.com/simple-returns-log-return-and-volatility-simple-introduction)
- [A How to EfficientNet Classification](https://dspyt.com/efficientnet-classification)
- [Cross-sectional data – An easy introduction](https://dspyt.com/cross-sectional-data-an-easy-introduction)
- [How to illustrate log returns vs simple returns](https://dspyt.com/simple-returns-log-return-and-volatility-simple-introduction)
