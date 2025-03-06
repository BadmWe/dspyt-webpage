---
title: "Zero Knowledge proofs on Mina, zkPassport and SoulBound NFTs"
date: "30 March, 2024"
excerpt: "Web3 identity is enhanced through the introduction of non-transferable soulbound tokens, Mina Protocol, SNARK workers and zkPassport."
cover_image: "https://dspyt.com/images/posts/Mina/EthBucharest.webp"
tags:
  [
    "Mina",
    "blockchain",
    "zkps",
    "NFTs",
    "node operators",
    "wallet",
    "defi",
    "Privacy",
    "security",
    "identity",
    "decentralized",
    "Mina Protocol",
    "Mini-Blockchain",
    "Blockchain Technology",
    "Zero Knowledge Proofs",
    "Scalability",
    "zkpassport",
    "Lightweight Blockchain",
    "Decentralized Applications",
    "Privacy-Centric Infrastructure",
    "Blockchain Development",
    "Mina Community",
    "Blockchain Innovation",
    "ETH event",
    "ETH Bucharest 2024",
  ]
authors: ["pavel-fedotov"]
---

Web3 currently lacks foundational components to depict social identities, thereby creating dependencies on centralised structures from Web2. This deficiency is exemplified by the reliance of NFT artists on centralised platforms and Web3 users on custodial wallets managed by centralised entities.

An innovative solution to enhance the social experience within Web3 is the integration of non-transferable soulbound tokens (SBTs). These tokens have the potential to foster more robust trust networks in the real economy, facilitate community wallet recovery, and bolster sybil-resistant governance systems.

Accounts or wallets that hold non-transferable SBTs serve as representations of commitments, credentials, and affiliations. Such tokens can enable the development of applications like undercollateralized lending and decentralised key management solutions.

Soulbound tokens essentially mirror affiliations, memberships, and credentials that are issued or verified by involved parties. These tokens can be self-attested or issued by individuals, businesses, or institutions, promising a diverse range of potential applications and benefits in the Web3 landscape.

Here is where Mina world’s first ZK blockchain comes in!

## The Mina Protocol White Paper

Evan Shapiro and Izaak Meckler brought the Mina Protocol to life in mid-2017. The two cryptography experts wanted to solve the blockchain trilemma. They proposed a solution to one of the key issues with Ethereum: having to trust a third party before running a full node.

The Mina Protocol White Paper provides insights into the technical aspects and design of the Mina blockchain, emphasising its unique feature of being the world's lightest blockchain with a fixed size of 22 KB. This characteristic sets it apart from traditional blockchains, which can be hundreds of gigabytes in size, enhancing the efficiency and scalability of the Mina Protocol.

Zero-Knowledge Proofs enable to balance scalability, decentralisation, and security within the Mina Protocol.

These features contribute to Mina's positioning as a unique and innovative player in the blockchain space, aiming to address key challenges and offer new possibilities for blockchain applications.

The Mina team believes that relying on centralised services like Infura or Alchemy for app development can undermine the trustworthiness of the underlying blockchain. Furthermore, it can result in a suboptimal user interface and developer experience. Instead, the team has chosen to prioritise low storage costs to allow for full nodes to be run by anyone.

## Overview of Mina Payment Process and Gossip Protocol for Reliable Transmission

1. Lifecycle of a Payment:

   - In Mina, payments go through various steps before being considered verified and complete.
   - The process includes creating a payment, producing a block, proving a SNARK transaction, verifying the payment, and achieving a payment confidence level.

2. Gossip Protocol:

   - Mina utilizes a gossip protocol for reliable transmission of messages to all members of the network in a timely manner.
   - This protocol ensures that messages can be reliably transmitted to all other members of the network.

3. Payments:

   - A payment is a type of transaction that involves transferring value from one account to another and includes the associated fee.

4. Failure Scenarios:
   - Payments may fail due to reasons such as the transaction not being accepted by the network or not being included in a block.
   - Reasons for transaction non-acceptance include the transaction not being fundamentally valid and adversarial nodes colluding to deny service.

## Understanding SNARK Workers in the Mina Network: Market Dynamics and Contributions to Blockchain Integrity

1. Role of SNARK Workers:

   - SNARK workers are essential for producing SNARK proofs of transactions in the Mina network, thereby maintaining the conciseness of the blockchain.
   - They are responsible for generating SNARK proofs and play a vital role in ensuring the validity of transactions included in the blockchain.

2. Need for SNARK Workers:

   - Mina's succinct blockchain requires both block producers and transactions to include SNARK proofs for data compression and validation purposes.
   - SNARK workers help in verifying the validity of transactions included in the blockchain, ensuring the trustless operation of Mina.

3. Snarking Transactions:

   - Generating SNARK proofs for each transaction in series is impractical due to computational costs and low throughput.
   - Fusion of SNARK proofs allows for parallel generation, enabling distributed participation in SNARK work and contributing to the network's integrity.

4. The Snarketplace:

   - Block producers purchase SNARK work from SNARK workers to offset the inclusion of transactions in the blockchain, creating demand and establishing a dynamic peer-to-peer marketplace.
   - The equilibrium between block producers and SNARK workers results in a market price for SNARK work, facilitating a steady state for network operations.

5. Pricing Strategy for SNARK Work:

   - The snarketplace is expected to follow the basic principles of supply and demand, dynamically rebalancing the price for SNARK work.
   - SNARK workers strategically price their work based on market demand, while block producers seek to purchase SNARK work at the lowest price from the snarketplace.

6. Incentives and Equilibrium:

   - Incentives for block producers and SNARK workers drive the establishment of equilibrium in the snarketplace, ensuring a fair market price for SNARK work.
   - SNARK workers aim to maximize profits while block producers prioritize cost-effective acquisition of SNARK work, contributing to a balanced marketplace.

7. Market Dynamics:

   - The snarketplace establishes dynamic pricing based on the laws of supply and demand, creating a competitive environment for transaction validation in the Mina network.
   - SNARK work is regarded as a commodity, with market forces influencing pricing strategies and fostering equilibrium between supply and demand.

8. Efficiency through Parallelism:

   - The parallel fusion of SNARK proofs enables efficient and distributed processing of SNARK work, maximizing throughput and network integrity.
   - By leveraging parallelism, SNARK workers collectively contribute to the verification of transactions, further enhancing the trustless operation of the Mina network.

9. Block Producer's Incentive:

   - Block producers pay SNARK workers through fee transfers, aiming to minimize the number of transfers to reduce overhead and offset more SNARK work in a block.
   - Buying a bundle of SNARK work from the same worker is advantageous for block producers.

10. Work Selection Methods:
    - Different work selection methods, such as sequential and random, are currently supported natively, but do not take advantage of dynamic markets.
    - The Mina community can develop solutions to improve work selection methods, leveraging dynamic markets.

## Leveraging zkPassport for Mina and Connected Ecosystems

The implementation of zkPassport is a significant development aimed at creating a private identity primitive for Mina and its connected ecosystems. [The proposal](https://github.com/MinaFoundation/Core-Grants/pull/11/files#diff-b85eb15dacda34b1cb92dc580bb2b1b69df7e2bc3cd14168ddbc266293e492dc), submitted by Evan Shapiro, entails leveraging smartphone NFC, Zero-Knowledge Proofs (ZKPs), and Mina to provide a secure and accessible private identity solution for Mina and other web2 applications.

### Objective and Use Cases

The primary objective of zkPassport is to enable the provision of proofs about passport information without exposing the information itself. Use cases include proving proof of uniqueness for scenarios such as one person, one vote, or one-person, one account, as well as proving facts about identity, such as nationality and age. The proposal acknowledges the challenges of making identity information accessible without compromising security and aims to address this through the zkPassport implementation.

### Motivation and Rationale

The motivation behind zkPassport is to unlock numerous use cases for web3 and web2 applications connected to Mina. It is designed to cater to applications directly on Mina, as well as applications on other chains through the leveraging of Mina's zk state bridge. The proposal also emphasizes the relevance of this functionality in the context of evolving AI systems and the potential risks posed by fake users.

### Scenario and Use Cases

The document presents detailed scenarios and use cases, demonstrating how zkPassport can be utilized to achieve proof-of-uniqueness and proof-of-nationality. The impact analysis highlights the potential of zkPassport to unlock a range of applications, including sybil-resistant airdrops and regulatory-compliant applications across web3.

### Summary of Zero Knowledge Proofs in Mina, zkPassport, and SoulBound NFTs

1. **Web3 Identity and Social Experience Enhancement**

   - Web3's dependence on centralized structures poses challenges for NFT artists and Web3 users.
   - Introduction of non-transferable soulbound tokens (SBTs) as a solution to enable trust networks, community wallet recovery, and sybil-resistant governance systems.
   - SBTs represent commitments, credentials, and affiliations, enabling applications like undercollateralized lending and decentralized key management solutions in the Web3 landscape.

2. **Mina Protocol**

   - Overview of the Mina Protocol White Paper, highlighting the protocol's distinct feature of being the world's lightest blockchain with a fixed size of 22 KB.
   - Emphasis on Zero-Knowledge Proofs to balance scalability, decentralization, and security within the Mina Protocol.

3. **Mina Payment Process and Gossip Protocol**

   - Lifecycle of a payment in Mina, involving creating a payment, producing a block, proving a SNARK transaction, verifying the payment, and achieving a payment confidence level.
   - Utilization of gossip protocol for reliable transmission of messages to all members of the network in Mina.

4. **SNARK Workers in the Mina Network**

   - Role of SNARK workers in maintaining the conciseness of the Mina blockchain through generating SNARK proofs for data compression and validation purposes.
   - Integration of SNARK workers and block producers to establish the snarketplace, aligning with the principles of supply and demand and fostering a balanced marketplace.

5. **zkPassport for Mina and Connected Ecosystems**
   - Implementation of zkPassport to create a private identity solution for Mina and its connected ecosystems, leveraging Zero-Knowledge Proofs and smartphone NFC.
   - Objectives include providing proofs about passport information without exposing the information itself, with relevant use cases in scenarios such as proof of uniqueness and proof of nationality.

By incorporating these elements, Mina, zkPassport, and SoulBound NFTs are collectively contributing to tackling the challenges of centralization, scalability, and privacy in the Web3 ecosystem while fostering innovative solutions for identity and social interaction within blockchain networks.

## More Information

- [Zero Knowledge proofs on Mina, zkPassport and SoulBound NFTs presentation slides at ETH Bucharest 2024](https://docs.google.com/presentation/d/1OmJJgzk4iFbKexqBw87oU7oh4H9lXlFFh3eas0EF9y8/edit?usp=sharing)
- [Mina Protocol: Unlocking the Power of the Mini-Blockchain Ecosystem](https://dspyt.com/Mina-protocol)
- [Connecting Auro Wallet to Your Website](https://dspyt.com/connecting-auro-wallet-to-your-website)
- [ETH Belgrade 2024: ZKPs on Mina, zkPassport and SoulBound NFTs](https://dspyt.com/ETHBelgrade2024)
