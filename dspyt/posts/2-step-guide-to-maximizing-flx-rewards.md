---
title: "2 Step Guide to Maximizing FLX rewards on Reflexer Finance"
date: "March 6, 2021"
excerpt: "RAI is a stablecoin reminiscent of the early version of Single Collateral DAI."
cover_image: "/images/posts/reflexer/reflexer.webp"
time_read: "5 min"
---

RAI is a stablecoin reminiscent of the early version of Single Collateral Dai. It is solely backed by ETH with a trajectory to an autonomous existence. RAI uses a funding rate to automatically balance market forces and keep itself stable.

[The statistics for the protocol](https://oldstats.reflexer.finance/)

![Reflexer statistics](/images/posts/reflexer/reflexerstats.png)

The key element of the system is the funding rate which is either positive or negative. A positive rate is akin to a stability fee, meaning that RAI borrowers pay a fee as their RAI debt increases in value. Whereas, a negative rate compels market participants to sell RAI as it is traded at a premium.

## Maximizing FLX rewards

Apart from implementing a stablecoin, Reflexer Finance has developed FLX rewards and staking systems.

The Stacking system protects the RAI protocol from insolvency. [FLX/ETH Uniswap v2](https://v2.info.uniswap.org/pair/0xd6f3768e62ef92a9798e5a8cedd2b78907cecef9) LP tokens smart contract constantly checks whether RAI is well capitalized. In case the protocol has bad debt the staking pool starts to auction FLX/ETH Liquidity Pool tokens in exchange for RAI. In turn it brings the protocol above water. Meanwhile stakers In exchange for protecting the protocol accrue more FLX.

In this article we are going to explain how liquidity providers can maximize their FLX rewards for a pair with RAI.

## Step 1: Mint RAI

To qualify for the rewards a user first and foremost should mint RAI on either [app.reflexer.finance](https://app.reflexer.finance) or [DeFi Saver](https://app.defisaver.com/reflexer/manage).
On app.reflexer.finance the minimum amount of RAI per safe is 1704 which as of 18 November 2021 is $3.02. Hence, 1704 multiplied by $3 is around $5112, not accounting for transaction fees and creation of the account which costs $400.

![Reflexer Create Safe](/images/posts/reflexer/reflexercreate.png)

![Reflexer Safe creation cost](/images/posts/reflexer/reflxer2.png)

DeFi Saver has similar conditions but provides more intuitive dashboard:

![DeFi Saver creation](/images/posts/reflexer/reflxer3.png)

To mint RAI you would require ETH collateral that would cover at minimum 135% of the borrowing amount. However, the minimum 135% is extremely risky since it would require only a small downward price movement to liquidate your position. The dashboard recommends covering your position by over than 185%.

![Risk Level](/images/posts/reflexer/reflexer.png)

For instance, if you borrow 5000 RAI at 186% collateral ratio you would require 6.5 ETH. The math is as following:
The borrowing amount is equal to 5000 RAI or $15100. Hence, the required collateral is $15100 \* 186%= $28076 in ETH. At $4319.66 per ETH the required collateral is 6.5 ETH.

![Collateral ETH for RAI](/images/posts/reflexer/reflexer5.png)

## Step 2: provide liquidity

In order to receive FLX bonuses the user must in addition to minting RAI provide liquidity on Uniswap. The available strategies with RAI pair are:

- [Uniswap V2 RAI/ETH](https://docs.reflexer.finance/incentives/rai-mint-+-lp-incentives-program)
- [Uniswap V3 RAI/DAI](https://docs.reflexer.finance/incentives/rai-uniswap-v3-mint-+-lp-incentives-program)

The highest available Annual Percentage Rate (APR) listed on Reflexer is RAI/ETH Uniswap v2 strategy. It is estimated to bring 34.32% APR with a safe 250% collateral ratio. Compared to Uniswap V3 RAI/DAI strategy that brings only 23.13%.

It is also notable that the 186% collateral ratio is estimated to bring higher APR than 34% at around 45% since the ratio is riskier and has less leeway for the price movement. At such APR the strategy is even higher than advertised 38% provided by FLX/[ETH Uniswap v2 stakers solution](https://docs.reflexer.finance/incentives/flx-staking).

![Current RAI Incentives](/images/posts/reflexer/reflexer8.png)

To maximize FLX rewards you need to stake all the borrowed RAI tokens on [Uniswap v2 pool](https://app.uniswap.org/#/add/v2/ETH/0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919) and use the same address to mint and stake.

![Uniswap v2 RAI ETH Pool](/images/posts/reflexer/reflexer10.png)

## Conclusion

We have provided a simple guide to move around the Reflexer finance system in 2 steps to maximize FLX using RAI/ETH Liquidity Pool on Uniswap v2 and RAI minting.
