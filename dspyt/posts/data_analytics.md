---
title: "Ethereum Security Data Analytics - DSPYT"
date: "27 September, 2022"
excerpt: "We collect and analyze the Ethereum blockchain data with Python and Dune Analytics, particularly focusing on Lazarus Group."
cover_image: "/images/posts/Honest/dataAnalytics.webp"
authors: ["pavel-fedotov"]
tags:
  [
    "data",
    "OFAC",
    "Ethereum",
    "Dune-Analytics",
    "analytics",
    "Python",
    "DRPK",
    "regulation",
    "compliance",
    "blockchain",
    "CRYPTOCURRENCY",
    "FORCESEABLE-FRAUD",
    "SMART-CONTRACTS",
    "MACHINE-LEARNING",
    "CYBERSECURITY",
    "FORENSIC-ANALYTICS",
    "NFT",
    "SCAM-DETECTION",
    "TRANSACTION-TRACKING",
    "OPEN-SOURCE",
    "DATA-VISUALIZATION",
    "ETHERSCAN",
  ]
---

Security and regulatory compliance have emerged as the top objectives as cryptocurrencies move closer to being accepted by the general public.
Forensic data analytics can help in tracking transactions and giving the proof to penalize wrongdoing in a data-centric society when a data-based protocol like Ethereum experiences fraud or other misbehavior. As a result, it's essential to develop data analytics solutions with case studies.

We have provided ideas for data collection and data collection methods in [Data Collection Ideas post](https://dspyt.com/data_collection_ideas)
In this post, we utilize Python and Dune Analytics to collect and examine data from the Ethereum blockchain.

## Lazarus OFAC sanctions data

The Office of Foreign Assets Control (OFAC) of the United States Department of the Treasury sanctioned virtual currency mixer Blender, which is used by the Democratic People's Republic of Korea to facilitate hostile cyber operations and the laundering of stolen virtual currency.

[According to OFAC](https://home.treasury.gov/news/press-releases/jy0768), a blockchain project connected to the online game Axie Infinity was the target of the largest virtual currency heist to date, worth nearly USD 620 million, on March 23, 2022, and Blender was used to process over USD 20.5 million of the illegal proceeds. Lazarus Group, a DPRK state-sponsored cyber hacking group, was responsible. The DPRK has turned to illegal actions, such as cyber-enabled heists from cryptocurrency exchanges and financial institutions, to raise money for its illegal weapons of mass destruction and ballistic missile programs as a result of severe U.S. and UN sanctions.

OFAC has identified four more virtual currency wallet addresses used by the Lazarus Group to launder the remaining stolen earnings from the Axie Infinity crime in March 2022. OFAC has published updated [Lazarus Group](https://home.treasury.gov/policy-issues/financial-sanctions/recent-actions/20220506) list of Bitcoin and Ethereum addresses.
This expands on OFAC's April 14, 2022, identification of the initial getaway wallet address and attribution of the DPRK's Lazarus Group as the culprits of the Axie Infinity crime.

We have further assembled the list of Ethereum addresses in text document on GitHub:
[Addresses List](https://github.com/dspytdao/Eth_Data/blob/main/LazarusGroup.txt).

### Dune Analytics

To analyze the nature of transactions and identify trends, we transaction data with the help of Dune Analytics queries and extract the related smart contract metadata with the help of [python script](https://github.com/dspytdao/Eth_Data/blob/main/script.py).

Dune can help users trace the flow of funds between contracts with a visual and data-centric interface.
If a user receives tokens in one contract and sends it to another contract, Dune will trace the fund and show the attempted hidden movement between contracts. Dune Analytic also provides interactive charts which can help users do in-depth analysis of blockchain data and conduct better analysis.

In particular, we queried to ethereum blockchain to obtain
[weekly deposits transactions Data](https://github.com/dspytdao/Eth_Data/blob/main/LazarusTxs1321434.csv),
[weekly withdrawals transactions data](https://github.com/dspytdao/Eth_Data/blob/main/LazarusWeeklyWithdrawalsTxs1322493.csv),
[granular tabular transactions data](https://github.com/dspytdao/Eth_Data/blob/main/LazarusTabularTxs1322519.csv),
[ERC721 transactions data](https://github.com/dspytdao/Eth_Data/blob/main/LazarusNFTsTxs1322436.csv).

Next, we transform the data into tables and graphs with the help of Dune Analytics:
[North Korean Lazarus Group Dashboard](https://dune.com/pfedprog/lazarus).

#### Lazarus Group Total Eth Value Deposited

![Lazarus Group Total Eth Value Deposited](/images/posts/Honest/TotalEth.webp)

#### Deposit Share by weekly period

![Deposit Share by periodLazarus Transactions](/images/posts/Honest/DepositShareW.webp)

#### NFT ERC721 Deposits

![NFT ERC721 Deposits](/images/posts/Honest/NFTs.webp)

#### Largest Transactions

![Granular Lazarus Tabular Data](/images/posts/Honest/Txs.webp)

### Etherscan Flagged Latest Data Set

Etherscan is the primary blockchain explorer, search, API, and analytics portal for Ethereum, a decentralized smart contract platform.
In order to promote equitable access to blockchain data, Etherscan gives developers with direct access to Etherscan's block explorer data and services via GET/POST requests.
Because Etherscan's APIs are provided as a community service with no warranties, the data may be skewed or contain incorrect labels.

We obtained the following phishing labeled addresses data sets using Dune Analytics Queries:
[Weekly Aggregated Etherscan Flagged Latest Data Set](https://github.com/dspytdao/Eth_Data/blob/main/EtherScanFLagged1322553.csv),
[Tabular Etherscan Flagged Latest Data Set](https://github.com/dspytdao/Eth_Data/blob/main/EtherScanFlaggedTabular1322553.csv).

Next, we visualize the data set with the help of Dune Analytics:
[Etherscan Phishing Accounts Addresses Dune Analytics](https://dune.com/pfedprog/eth-sent-to-flagged-etherscam-addresses).

#### Etherscan Flagged Data Set Total Eth

![Etherscan Flagged Data Set Total](/images/posts/Honest/EtherScanTE.webp)

#### Top Scam Addresses Receivers Latest

![EtherScamDB Top Address Receivers Latest](/images/posts/Honest/DB.webp)

#### Amount of ETH sent to flagged addresses over time

![Amount of ETH sent to flagged addresses over time](/images/posts/Honest/graph.webp)

### Phishing & Scams going through Bitly Data Set

According to Ranjeet Vidwans, in case of shortened links scams, the real domain name of the website is hidden behind random letters and digits when URL shorteners compress a link. These random numbers include no information that would alert the receiver that they were visiting a malicious link or being sent to a spoofing website where their credentials may be stolen. Since the majority of people don't know any better or can't resist, compromised shortened URLs appear in phishing emails and on social media postings, which would normally discourage some people from clicking.

Here is a [medium article](https://medium.com/mycrypto/following-an-ethereum-phishing-scam-down-the-rabbit-hole-9790484c3431) detailing an example of phishing attack using Bitly links. Below we scrapped the Bitly data sets initially provided by [409h Dune Analytics User](https://dune.com/409h):
[Weekly Aggregated Bitly Deposits DataSet](https://github.com/dspytdao/Eth_Data/blob/main/EtherScanFLagged1322553.csv),
[Tabular Bitly Deposits DataSet](https://github.com/dspytdao/Eth_Data/blob/main/bitlyDepositsTabular810.csv),
[Weekly Aggregated Bitly Withdrawals DataSet](https://github.com/dspytdao/Eth_Data/blob/main/bitlyWithdrawalsWeekly815.csv),
[Tabular Bitly Withdrawals DataSet](https://github.com/dspytdao/Eth_Data/blob/main/bitlyWithdrawalsTabular812.csv).

[Bitly Fraud Dune Analytics](https://dune.com/pfedprog/phishingandscams-going-through-bitly).

#### Bitly 2017-2019

![Bitly phishing Data](/images/posts/Honest/Bitly.webp)

On further research we noticed more recent similar scams: [OpenSea phishing scam swindled millions in NFTs](https://www.pcgamer.com/opensea-phishing-scam-swindled-millions-in-nfts/) and [Scam Alert: OpenSea Phishing Emails](https://news.trendmicro.com/2022/03/12/scam-alert-opensea-phishing-emails/) that require more thorough investigation.

## More Collected Data Sets

### Suspicious address data

[OpenseaPhishing437073.csv](https://github.com/dspytdao/Eth_Data/blob/main/OpenseaPhishing437073.csv) - OpenSea Minting Scam

[OpenseaPhishing1320652.csv](https://github.com/dspytdao/Eth_Data/blob/main/OpenseaPhishing1320652.csv) - All ERC721 NFTs transactions to a suspicious address

[Premium Dataset. Hourly Crypto Market Anomaly Score: Ocean Protocol](https://market.oceanprotocol.com/asset/did:op:0d3c8845df538dff98a08e0cc9d572cf4703d9324eb5887e91e9c8d97474e8ae)

[Ethereum NFT dataset on Kaggle](https://www.kaggle.com/datasets/simiotic/ethereum-nfts)

[Ethereum Fraud Detection Dataset on Kaggle](https://www.kaggle.com/datasets/vagifa/ethereum-frauddetection-dataset)

[Etherscan Phishing Accounts Addresses Data](https://etherscan.io/accounts/label/phish-hack?subcatid=undefined&size=100&start=0&col=3&order=desc)

[Eth-Phish/Hack (Phish/Hack in Ethereum)](https://paperswithcode.com/dataset/eth-phish-hack)
Introduced by Zhou et al. in Behavior-aware Account De-anonymization on Ethereum Interaction Graph
The sampled 2-hop subgraphs centered on Phish/Hack accounts on the Ethereum Interaction graph.

## Related Posts

- [Ethereum Security Data Collection Ideas](https://dspyt.com/data_collection_ideas)
- [Panel data with python – An easy introduction](https://dspyt.com/panel-data-econometrics-an-introduction-with-an-example-in-python)
- [Blockchain data indexer with TrueBlocks](https://dspyt.com/blockchain-data-indexer-with-trueblocks)
- [What is a blockchain address?](https://dspyt.com/what-is-blockchain-address)
- [Advanced Realized Volatility and Quarticity](https://dspyt.com/advanced-realized-volatility-and-quarticity)
- [Machine Learning with Simple Sklearn Ensemble](https://dspyt.com/machine-learning-simple-sklearn-ensemble)
- [How to illustrate log returns vs simple returns](https://dspyt.com/simple-returns-log-return-and-volatility-simple-introduction)
- [A How to EfficientNet Classification](https://dspyt.com/efficientnet-classification)
- [Cross-sectional data – An easy introduction](https://dspyt.com/cross-sectional-data-an-easy-introduction)
