---
title: "Great blockchain insights with PARSIQ triggers for AXS"
date: "November 21, 2021"
excerpt: "In this project we utilize PARSIQ Smart Triggers and Google Spreadsheets integration to track and visualize AXS token transfers on Ethereum and Bsc."
authors: ["pavel-fedotov"]
cover_image: "https://dspyt.com/images/posts/parsiq/axieinfinityfeature-e1658960475261.webp"
tags:
  [
    "parsiq",
    "smart triggers",
    "parsiq smart triggers",
    "Google",
    "Google Spreadsheets",
    "blockchain data",
    "data",
    "axs",
    "data science",
    "axie infinity",
    "Ethereum",
    "Ronin Bridge",
    "binance smart chain",
    "Binance",
    "tokens",
    "gaming",
    "blockchain data analysis",
    "data analysis",
  ]
---

In this project we utilize [PARSIQ Smart Triggers](https://www.parsiq.net/en/) and Google Spreadsheets integration to track and visualize AXS token transfers on Ethereum and Binance Smart Chain that involves most liquid exchanges.

AXS is an Ethereum token that powers Axie Infinity, a blockchain-based game where players can battle, collect, and build a digital kingdom for their pets. AXS holders can claim rewards for staking their tokens, playing the game, and participating in governance. The token is available on multiple chains including Ethereum and Binance Smart Chain.

On April 28 2021 the game has made a significant update introducing Ronin Bridge, Axie Infinity Ethereum side chain. The contract has since become the crucial link in the Axie Infinity ecosystem and largely contributes to the price action of AXS. With the update the bridge has become the only available option for Axie marketplace, breeding, and morphing contracts.

The idea for the project comes from the fact that on the Binance Exchange the highest earning product in Locked staking is AXS with an estimated APY of 131.25% far outperforming any similar product on the exchange.

![AXS APY Binance](https://dspyt.com/images/posts/parsiq/140820286-7b9a6fd7-2635-4095-9783-1931f02ea1ac.webp)

In order to justify such returns the company would usually rely on large inflows and minor outflows from the cryptocurrency. Therefore, monitoring the most liquid day-to-day endpoints provides an indicator of the success of the staking solution.

## Trigger for Token transfer from or to Binance Account of SPL or AXS token on Ethereum

Apart from collecting the data from the transaction we collect data using Chainlink and CryptoRank.

```javascript
stream _
from TokenTransfers

where (@from == AXScontract || @to == AXScontract || @from == Binance14 || @to == Binance14) && (@erc20.symbol == "AXS" || @erc20.symbol == "SLP")

process
let symbol = @erc20.symbol
let cryptorankFiatRate = getRate(symbol)
let fiat_value = @value * cryptorankFiatRate.value
let fiat_decimals = @erc20.decimals + cryptorankFiatRate.decimals
let eth_usd_pair = getChainlinkPriceFeedPair("ETH/USD")
let score_from = getScore(@from)
let score_to = getScore(@to)
emit {@action_type, @block_hash, @code_address, @from, @gas_used, @origin, @to, @value, fiat_value, fiat_decimals, eth_usd_pair, @tx_hash, symbol, @block_timestamp, @gas_price, score_from, score_to }
end
```

## Trigger for Token transfer from or to Binance Accounts of AXS token on Bsc

```javascript
stream _
from BscBEP20Transfers

where (@token.contract == ContractBSC) && (@from in BSCdata || @to in BSCdata)

process
emit { @from, @to, @value, @token, @transaction, @block }
end
```

## User Data

Parsiq Primitives:

![Parsiq Primitives](https://dspyt.com/images/posts/parsiq/140822828-30294eb4-e2d0-40ed-a3a7-e46cc74794bf.webp)

Parsiq Table:

![Parsiq Table](https://dspyt.com/images/posts/parsiq/140823112-159f545c-bcb1-4177-9f4d-97e7c1eb9a36.webp)

![Parsiq Table 2](https://dspyt.com/images/posts/parsiq/140822678-717d0201-4b88-4ba4-9dd6-378ff47500cf.webp)

## Ethereum Axie Infinity Analysis

There are 231 AXS token transactions in our ethereum dataset. Only 46 are from Ronin and Binance accounts.

![AXS transactions accounts](https://dspyt.com/images/posts/parsiq/140833808-441336cc-4383-43b4-a40c-067279d44e0a.webp)

Meanwhile, the rest 80% are coming to Ronin and Binance accounts.

![Ronin and Binance accounts](https://dspyt.com/images/posts/parsiq/140834230-60f4fdaa-1ebd-4ddd-ba82-ded30833aebc.webp)

There are also more transactions to the native staking solution rather than Binance by a factor of 2. Nevertheless, when we analyze the volume of outflows vs. inflows the sum of outflows dominate.

![the volume of outflows vs. inflows](https://dspyt.com/images/posts/parsiq/140838512-fdd1d2bb-97ab-45e3-98ba-31a70fd61d57.webp)

This would indicate more incoming users and one or few significant withdrawals from Binance. We look at the more granular data and notice that one account is responsible for such bleak snapshot of AXS flows.

![snapshot of AXS flows](https://dspyt.com/images/posts/parsiq/140838840-b8bff3aa-e094-453f-805e-8171dff13f87.webp)

Furthermore, we plot full ethereum dataset value of transactions against time. When plotted the inflows have a lot of spikes and more numerous for Binance.

![snapshot of AXS flows](https://dspyt.com/images/posts/parsiq/140849815-79710dd7-80db-4ae8-8070-70d36c1cf141.webp)

While the outflows are more steady.

![outflows data](https://dspyt.com/images/posts/parsiq/140850027-cab9d8b4-02cb-4f46-af99-ffdc9ac723f8.webp)

This picture is very similar for only AXS. With two spikes in Binance outflows against 0 in Ronin Bridge.

![Ronin Bridge](https://dspyt.com/images/posts/parsiq/140851348-01692e99-9051-4da4-aa0a-de281140f1d5.webp)

We would need to further incorporate more data in our analysis to determine the scope of weekly and monthly flows in AXS token.

## BSC AXS Analysis

In our BSC dataset we have 157 observations. The count of transactions is in favour of outflows from Binance Hot Wallets.

![Binance Dataset](https://dspyt.com/images/posts/parsiq/140844882-8a1650fc-ebbf-4913-9605-426e091543fb.webp)

Whereas the sum of transferred AXS value out of Binance is nearly identical to the inflows.

![AXS inflows Binance](https://dspyt.com/images/posts/parsiq/140845336-028a5cb7-c38a-483e-9b4b-5ace63128f93.webp)

## Comparison of AXS on BSC and Ethereum

The volume of transactions is much greater on Ethereum of AXS than on Binance Smart Chain.

![The volume of transactions](https://dspyt.com/images/posts/parsiq/140845836-17679545-5f28-4065-bd0f-1597593be00f.webp)

## Score of the addresses (in-built PARSIQ function)

In our AXS dataset on Ethereum we also obtained scores for addresses by using `getScore` in our trigger. What is interesting is that the system scores higher the Binance account (85) rather than Ronin Bridge (76). Besides, the average address that transacts to Ronin has score of 79. For Binance this figure is 80. For outflows the number is 79 for Ronin and 77 for Binance.

## Further Resources and Related Posts

- [GitHub repository for AXS PARSIQ triggers](https://github.com/Pfed-prog/PARSIQ-AXS)
- [CryptoPunks with PARSIQ](https://github.com/Pfed-prog/PARSIQ-CryptoPunks)
- [How to generate parsiq wallet triggers for CryptoPunks](https://dspyt.com/generating-fast-and-easy-parsiq-triggers-for-cryptopunks)
- [Axie Infinity Great Migration FAQ](https://www.notion.so/axie/Great-Migration-FAQ-fc64fd460c8046b2a45d8798d06c0feb)
- [Python Notebook on Kaggle](https://www.kaggle.com/pavfedotov/parsiq-axs)
- [Blockchain Data Indexer with TrueBlocks](https://dspyt.com/blockchain-data-indexer-with-trueblocks)
- [Advanced Realized Volatility and Quarticity](https://dspyt.com/advanced-realized-volatility-and-quarticity)
- [Machine Learning with Sklearn](https://dspyt.com/machine-learning-time-series-temperature-data-modeling)
- [How to illustrate log returns vs simple returns](https://dspyt.com/simple-returns-log-return-and-volatility-simple-introduction)
- [A How to EfficientNet Classification](https://dspyt.com/efficientnet-classification)
