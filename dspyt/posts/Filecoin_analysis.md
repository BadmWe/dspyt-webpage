---
title: "Filecoin Storage Network Energy Consumption Data Challenge"
date: "10 December, 2022"
excerpt: "We investigate Filecoin's storage network, renewable energy use, and USD / Filecoin correlation, plus a prediction algorithm for future Filecoin demand."
cover_image: "/images/posts/Filecoin/Challenge presentation.webp"
authors: ["pavel-fedotov"]
tags:
  [
    "data science",
    "Python",
    "Filecoin",
    "Filecoin fvm",
    "filecoin virtual machine",
    "Fil",
    "data",
    "sklearn",
    "Protocol Labs",
    "blockchain",
    "Ocean Market",
    "Ocean Marketplace",
  ]
---

Filecoin Green is an initiative from Protocol Labs to create a sustainable digital future. This report will explore the challenges associated with the global data center industry, and Filecoin Green's potential to use 100% renewable energy, measure and reduce environmental impacts, and provide the world's best tools to do so. We will also examine the evolution of the Filecoin storage network, the share of renewable energy used by Filecoin, and the correlation between Filecoin and the US Dollar. Finally, an algorithm to predict the future demand for Filecoin will be presented.

[GitHub repository with algorithm code](https://github.com/Pfed-prog/Filecoin-Challenge)

## Introduction

The global data center industry has been rapidly expanding to meet the growing demand for digital transactions. This exponential growth has put a strain on energy supplies, with the data center industry accounting for 4% of global electricity consumption and 1% of global greenhouse gas emissions. Filecoin Green is an initiative from Protocol Labs that is aiming to address this issue. It is a decentralized storage network that will enable storage providers to use 100% renewable energy and to measure and reduce environmental impacts. Filecoin Green will provide the world's best tools to measure and reduce environmental impacts, creating a future of Web3 powered by verifiably clean energy. This report will explore the challenges associated with the global data center industry and Filecoin Green's potential to create a sustainable digital future.

## Energy performance and the evolution of Filecoin storage

Filecoin is a decentralized storage network that is aiming to use 100% renewable energy.
As of 2022, Filecoin is responsible for over 24 exabytes of storage and has seen a steady increase in storage capacity since its launch in 2020. This growth is indicative of the increasing demand for cloud storage and Filecoin’s ability to meet this demand.

![Filecoin is responsible for over 24 exabytes of storage](/images/posts/Filecoin/1.webp)

The network has performed incredibly well in 2021, reaching a peak for Data storage capacity added per day on September 10th 2021 of 66155072 GiB.

![Data storage capacity added per day](/images/posts/Filecoin/2.webp)

Filecoin has also seen an increase in energy efficiency since its launch. Filecoin's storage network estimated to use only 6.298506 MW/EiB on October 16th 2022, compared to August 24th 2020 10618.24561 MW/EiB. This is indicative of the efficiency gains achieved by Filecoin's decentralized storage network.
The network has also seen an increase in the number of nodes and miners, allowing it to become more resilient and fault-tolerant. This has led to fewer storage failures and reduced downtime, providing a superior user experience.

![Filecoin Energy Intensity Estimate](/images/posts/Filecoin/3.webp)

![Filecoin Energy Intensity Estimate](/images/posts/Filecoin/4.webp)

## The evolution of the share of renewable energy used by Filecoin

Filecoin has been continuously working towards using 100% renewable energy since its launch in 2020. In fact, Filecoin has made over 1452033144 kWh in renewable energy certificate (REC) purchases over time.

![renewable energy certificate (REC) purchases over time](/images/posts/Filecoin/5.webp)

The share of renewable energy has sharply risen over Spring in 2021 and has been on a slight decline trend in 2022. Meanwhile the mean estimate of the renewable share of the total energy is at 1.197482%.

![share of renewable energy used by Filecoin](/images/posts/Filecoin/6.webp)

### Filecoin Summary Statistics

![2020 Filecoin Summary Statistics](/images/posts/Filecoin/7.webp)

![2021 Filecoin Summary Statistics](/images/posts/Filecoin/8.webp)

![2022 Filecoin Summary Statistics](/images/posts/Filecoin/9.webp)

## Filecoin Correlation with US Dollar

We found a moderately positive correlation between daily price estimates such as Open, High, Low, Close and Adjusted Close and the energy used to seal the Filecoin data. We also found slightly weaker positive correlation between volume and the energy used to seal the Filecoin data. Hence, there is a positive relationship between higher price, volume and the energy used to seal the Filecoin data.

![the energy used to seal the Filecoin data correlation with price](/images/posts/Filecoin/10.webp)

We found a moderately positive correlation between daily price estimates such as Open, High, Low, Close and Adjusted Close and Data storage capacity added per day. We also found slightly weaker positive correlation between volume and Data storage capacity added per day. Hence, there is a positive relationship between higher price, volume and Data storage capacity added per day similar to the energy used to seal the Filecoin data.

![Data storage capacity added per day correlation with price](/images/posts/Filecoin/11.webp)

We found a little correlation between daily price estimates such as Open, High, Low, Close and Adjusted Close and the energy consumption rate of the Filecoin network. We also found a very weak positive correlation between volume and the energy consumption rate. Hence, there is a little relationship between higher price, volume and the energy consumption rate.

![the energy consumption rate of the Filecoin network correlation with price](/images/posts/Filecoin/12.webp)

### Correlation: Conclusion

The three correlations suggest that there is a positive relationship between higher price, volume, and the energy used to seal the Filecoin data, as well as the data storage capacity added per day. This suggests that as the price and volume of Filecoin increases, it is likely that the energy used to seal the Filecoin data and the data storage capacity added per day will also increase. Additionally, the weak correlation between price, volume and the energy consumption rate suggests that the energy consumption rate may not be as closely linked to the price and volume of Filecoin.

## Algorithm for prediction demand for Filecoin

The algorithm should consider the following factors:

1. Historical energy consumption data
2. Historical $FIL/USD price data
3. Current estimated energy usage per Filecoin Storage Provider
4. Current estimated demand for Filecoin Storage Providers

The algorithm should take into account all of the above factors to accurately predict the storage capacity added per day for the month of December 2022. The algorithm should also be able to adjust its predictions if any of the factors change in the future.

First we connect, extract and merge the latest data with Filecoin Green Energy Consumption API:

![Filecoin Green Energy Consumption API Data Extraction](/images/posts/Filecoin/13.webp)

![Filecoin Green Energy Consumption API Data Transformation](/images/posts/Filecoin/14.webp)

Next we obtain recent data from Binance API:

![Binance FIL/USDT data daily](/images/posts/Filecoin/15.webp)

Further, we aggregate the data columns by month and year with median, mean and sum function in NumPy. We shift the columns one period, in order to predict one step ahead period which is December 2022.

The aggregated dataset is available on [Ocean Marketplace](https://market.oceanprotocol.com/asset/did:op:557997940dedae59b0b3c072fe08d1405ba8a77bdf11600c21e20f72131e0aa3)

We train the model to estimate the median of the Data Storage capacity added per day. The sklearn pipeline looks as following:

![Sklearn Machine Learning Pipeline](/images/posts/Filecoin/16.webp)

We estimated the median of the Data Storage capacity added per day:

![estimated the median of the Data Storage capacity added per day](/images/posts/Filecoin/17.webp)

## Bonus

We include Energy demand in data centers worldwide from 2015 to 2021, by type dataset which assists in determining the trends in data center storage industry.
The traditional data center industry has seen a reduction in energy demand since 2015, with estimates suggesting that this figure will reach nearly 33 terawatt-hours by 2021. However, the demand for energy by hyperscale data centers has doubled in the same period of time.

The dataset is available on [Ocean Marketplace](https://market.oceanprotocol.com/asset/did:op:e25a4d0341637e9bb6269aea05bb7bb03c14b3c73836faedc1b5328dd4eb77f1)

![Energy demand in data centers worldwide from 2015 to 2021](/images/posts/Filecoin/18.webp)

## Conclusion

Traditional data center operators have been traditionally focused on maximizing output and performance, often overlooking the power implications. This has led to an increase in energy consumption as additional data centers were built to meet the increased demand for computing power. However, the availability of cloud computing resources, which require no floor space, has enabled organizations to shut down legacy data centers and move operations to the cloud. Non-hyperscale cloud data centers have kept their energy consumption steady, while large, hyperscale cloud data centers have steadily increased their energy usage and effectively managed it.

Filecoin storage has the potential to be significantly more energy-efficient than conventional data centers. The decentralized storage network is aiming to use 100% renewable energy, and has seen an increase in energy efficiency since its launch. It has also seen an increase in the number of nodes and miners, allowing it to become more resilient and fault-tolerant. In comparison, traditional data centers have seen a decrease in energy demand since 2015, but large, hyperscale cloud data centers have steadily increased their energy usage. Filecoin storage has the potential to be more energy-efficient, and to reduce its carbon footprint, while still meeting the growing demand for digital transactions.

[GitHub repository with algorithm code](https://github.com/Pfed-prog/Filecoin-Challenge)

## Related Posts

- [What is a blockchain address?](https://dspyt.com/what-is-blockchain-address)
- [Ethereum Security Data Collection Ideas](https://dspyt.com/data_collection_ideas)
- [Panel data with python – An easy introduction](https://dspyt.com/panel-data-econometrics-an-introduction-with-an-example-in-python)
- [Blockchain data indexer with TrueBlocks](https://dspyt.com/blockchain-data-indexer-with-trueblocks)
- [Advanced Realized Volatility and Quarticity](https://dspyt.com/advanced-realized-volatility-and-quarticity)
- [Machine Learning with Simple Sklearn Ensemble](https://dspyt.com/machine-learning-simple-sklearn-ensemble)
- [How to illustrate log returns vs simple returns](https://dspyt.com/simple-returns-log-return-and-volatility-simple-introduction)
- [A How to EfficientNet Classification](https://dspyt.com/efficientnet-classification)
- [Cross-sectional data – An easy introduction](https://dspyt.com/cross-sectional-data-an-easy-introduction)
