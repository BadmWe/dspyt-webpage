---
title: "Guide to maximizing Liquidity Pool RAI fees"
date: "November 20, 2021"
excerpt: "We choose liquidity pools on Uniswap V3 and obtain tokens for the best liquidity pair using Aave V2 and Fuse Pools"
cover_image: "/images/posts/reflexer/maxlp.webp"
tags:
  [
    "liquidity pool",
    "stablecoin",
    "RAI",
    "rai stablecoin",
    "Fuse",
    "defi",
    "Reflexer",
    "Aave",
    "Uniswap",
    "ERC 20",
    "liquidity pair",
    "uniswap yield farming",
  ]
---

To maximize the fees for liquidity providers we separated the article into three sections: choosing liquidity pools on Uniswap V3, obtaining tokens for the best liquidity pair using Aave V2 and Fuse Pools as well as configuring settings to provide the liquidity to the selected pool.

## Choosing Liquidity Pools on Uniswap V3

To maximize the rewards on the liquidity pools with RAI first we need to determine what pools are utilized by the community so we can earn a commission on our staked liquidity.

On the Uniswap V3 page for RAI we can find the highest staked value as well as the liquidity processed for the last 24 hours and 7 days.

From the total of 19 pools we can see that most have 0 volume for both 24 hours and 7 days. Meanwhile 4 pools had liquidity action in the past 7 days as of 19 November 2021. Therefore, it would be reasonable to focus on these pools to maximize the liquidity providers fees.

RAI / DAI and RAI / USDC pools are by far the most utilized pools. However, we investigate in more detail Uniswap pools to maximize the fees.

We create an index to rank the liquidity pools using data from the Uniswap V3 dashboard.

First, we collect a 7 day volume and divide it by the total value lent (TVL). The higher number means that the less capital chases after the higher amount of volume. Hence, there is an opportunity to deploy capital and exploit the market discrepancy.

Next we multiply the value from the previous step by the commission. The higher commission brings more fees. Therefore, the higher result would mean there is lower concentration of capital and bring forth an opportunity to maximize LP fees.

The table with results:

![Reflexer Table](/images/posts/reflexer/1586897961.webp)

We find that the RAI/DAI pair with 0.01% commission has the highest opportunity for liquidity providers at the moment due to the enormous amount of volume compared to the 10 times lower amount of total value lent.

The second best option at the moment is RAI/ETH at 0.3% commission. Leaving other numbers constant, lets calculate by how much would TVL need to increase so that the attractiveness attractiveness of this option decreases relative to RAI/USDC:

$45k/x \* 0.3% = 0.00065

0.135= 0.0065x

x = $207.7k

We calculate that if the total value lent in this pair rises by $35.7k the RAI/USDC becomes equally attractive.

To sum up, the option RAI/DAI at 0.01% commission is an absolute winner compared to the second best option, accounting for the TVL, volume and trading commissions.

## Obtain RAI

We have determined the best pool to earn LP fees and now we will demonstrate great opportunities to borrow both RAI and DAI.

## Fuse Pools

One of the opportunities to borrow both RAI is Fuse Pools which we talked about in another article:

Simple Yield Farming with Fuse Pools, Aave and RAI

Currently there are 5 pools that interact with RAI. Two of them: 18 and 9 Pools have the highest relative risk score and have higher LTV for deposited coins.

In particular, as the safest strategy option we recommend to use Pool 9 to deposit USDC and borrow at around 40% LTV.

In case you have AAVE, CRV, 1INCH, UNI, SUSHI and other valid tokens that you would want to use in RAI/DAI LP you could deposit them to Fuse Pool number 64 and borrow additional RAI at 30% LTV.

## Aave V2

Moreover, another great opportunity to increase exposure to RAI is to deposit tokens at Aave V2 for variable APY and borrow RAI at a variable rate. Bonuses for using Aave include StkAave rewards that could help tremendously to cover the initial borrow rate. In case of RAI the APR for these rewards is, in fact, higher than the borrowing cost.

Finally, Aave also provides relatively very low variable APY for borrowing ETH. We can exploit this opportunity by transferring the borrowed ETH to mint RAI via app.reflexer.finance and obtaining additional FLX rewards on Uniswap.

In fact, we have described methods to maximize FLX rewards in the following article in more details for Uniswap V2:

## Providing Liquidity on Uniswap V3 to maximize fees

In the two previous sections we described the method to determine the most suitable liquidity pool as well as obtaining RAI for entering the liquidity pool.

Since the protocol has the balancing mechanism you would want to follow the directions on the official incentives page from Reflex.finance.

The most optimal range brings higher rewards but it comes with greater risks and can be potentially costly when re-balancing gas costs are taken into account. However, with the larger capital these costs are negligible.

Following our investigation we enter the numbers as on the picture to maximize LP fees. This strategy would significantly undercut the 0.05% pool but improve liquidity available for users.

## Conclusion

In this article we provided an advanced guide to maximization of the fees for liquidity providers. We analyzed Uniswap available liquidity pair and ranked them based on LTV, 7 day volume and commission. Besides, we described opportunities to obtain RAI for the liquidity pair. Finally, we illustrated how to enter into optimal range on Uniswap, according to reflex.finance mechanics.

Additionally, it is interesting to note that IDLE best yield statistic on RAI shows that historically to get the best rewards from RAI would be best to use AAVE with StkAAVE.

## Related Posts

- [Fuse explained - Medium](https://medium.com/rari-capital/fuse-explained-3ef2e0747953)
- [Guide to Rari Capital Fuse - Medium](https://medium.com/stakingbits/guide-to-rari-capital-fuse-permissionless-money-markets-2632a2a72929)
- [Simple Yield Farming with Fuse Pools, AAVE and RAI](https://dspyt.com/simple-yield-farming-with-fuse-pools-aave-and-rai)
- [Maximizing LP fees for RAI pools for advanced users](https://dspyt.com/maximizing-lp-fees-for-rai-pools-for-advanced-users)
- [2 Step Guide to Maximizing FLX rewards on Reflexer Finance](https://dspyt.com/2-step-guide-to-maximizing-flx-rewards)
- [Improving Blockchain Credibility with UMA](https://dspyt.com/improving-blockchain-credibility-with-uma)
- [Aurora — EVM on the NEAR Protocol blockchain](https://dspyt.com/aurora-near-protocol-evm)
