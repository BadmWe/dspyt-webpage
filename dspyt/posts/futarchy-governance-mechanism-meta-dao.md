---
title: "Futarchy - a form of governance, mechanism of the Meta-DAO"
date: "February 25, 2024"
excerpt: "What is Futarchy and How It Works. Why futarchy may be better than other forms of governance, participating in MetaDAO."
cover_image: "https://dspyt.com/images/posts/defi/futarchy.webp"
authors: ["dmitrii-fedotov", "dspytdao"]
tags:
  [
    "Meta-DAO",
    "Futarchy",
    "Governance",
    "Solana",
    "Cryptocurrency",
    "Meritocracy",
    "Incentivization",
    "Adaptability",
    "Analysts",
    "Entrepreneurs",
    "Cyber-agents",
    "Regulatory hurdles",
    "Public skepticism",
    "Decentralized governance",
    "Decentralized",
    "Participating in Futarchy",
    "TWAP",
    "conditional vault program",
    "tokens",
  ]
---

The Meta-DAO is a new kind of organization. It uses futarchy, a system where markets make decisions. **As such, it sidesteps existing challenges with governance, such as voter apathy and political capture.** It divides the decision-making process into two stages: the guidance stage and the execution stage. In the guidance stage, the community poses a decision-making question.

> **The Meta-DAO - An organization governed by markets, not politics**.

## What is Futarchy and How It Works

Futarchy is a form of government proposed by economist Robin Hanson, in which elected officials define measures of national well-being, and prediction markets are used to determine which policies will have the most positive effect.

- Futarchy was invented by economist Robin Hanson in 2000

- The basic idea of futarchy is to give decision-making authority to markets.

### We can demonstrate futarchy with an example

Let's consider a hypothetical scenario where a university is contemplating whether to invest in expanding its online course offerings. If the university were to implement a futarchy governance system, it could proceed as follows:

1. Market Creation
   The university would create two markets related to the decision at hand: one for **"Expand Online Courses"** and another for **"Maintain Current Course Offerings Only."**

2. Trading Period
   Investors, which could include faculty, students, administrators, and external stakeholders, are allowed to trade in these markets for a set period, 10 days.

3. Evaluation
   At the end of the trading period, the university examines the time-weighted average price (TWAP) of the university's stock in both markets.

4. Decision Making
   If the TWAP is higher in the "Expand Online Courses" market, the university decides to proceed with the expansion. Conversely, if the TWAP is higher in the **"Maintain Current Course Offerings Only"** market, the university decides not to expand online courses.

5. Reversion of Trades
   All trades made in the market that did not align with the chosen outcome are reverted. For instance, if the decision is to expand online courses, all trades made in the **"Maintain Current Course Offerings Only"** market would be reverted.

![vote](https://dspyt.com/images/posts/defi/vote.webp)

This approach allows the university to harness the wisdom of the crowd, as reflected in the market prices, to make decisions that are in the best interest of its stakeholders.

Because you **revert** the market when you don’t take action, the market can speculate on what the value of the company would be if the company did something without speculating on whether the company will do it.

It is these speculations, rather than the opinions of any decision-maker, that drive a futarchic organization’s actions

Futarchy requires the ability to **‘revert’** trades in a market so that everyone gets back their original tokens. Unfortunately, blockchains don’t allow you to revert transactions after they’ve been finalized, so we need a mechanism to simulate reverting transactions. That mechanism is conditional tokens.

### In our examples, we consider all actions within MetaDAO

MetaDao is composed of 3 open source programs on the Solana blockchain.

- Conditional vault

- Time-Weighted Average Price (TWAP)

- Autocrat which orchestrates futarchy

All programs are open-source and verifiable.

![opensource](https://dspyt.com/images/posts/defi/opensource.webp)

Before minting conditional tokens, someone needs to create a conditional vault. Conditional vaults are each tied to a specific underlying token and settlement authority. In our case, the underlying token would be either META or USDC, and the settlement authority would always be the Meta-DAO.

![futarchy dao](https://dspyt.com/images/posts/defi/metadao.webp)

Once a vault is created, anyone can deposit underlying tokens in exchange for conditional tokens. You receive **two types of conditional tokens:** ones that are redeemable for underlying tokens if the vault is finalized and ones that are redeemable for underlying tokens if the vault is reverted.

For example, if you deposit 100 USDC into a vault, you will receive 100 conditional-on-finalize USDC and 100 conditional-on-revert USDC.

![dollars](https://dspyt.com/images/posts/defi/dollars.webp)

- At any time, the settlement authority can either finalize or revert a vault.
- The finalization and reverting are mutually exclusive, total vault liabilities will never exceed total assets.

![revert](https://dspyt.com/images/posts/defi/revert.webp)

- For each proposal, the Meta-DAO creates two **vaults**: one for USDC and one for META. If a proposal passes, it finalizes both vaults. If a proposal fails, it reverts both vaults.

- So we call the **conditional-on-finalize** tokens **conditional-on-pass** tokens and the **conditional-on-revert** tokens conditional-on-fail tokens.

![third](https://dspyt.com/images/posts/defi/third.webp)

This allows traders to express opinions like, “This token would be worth $110 if the proposal passes, but it’s only worth $100 if the proposal fails.”

## Advantages and Why Futarchy may be better than other forms of Governance

Compared to the other ways of making decisions, markets have several benefits. We can look at both the theory and the empirical evidence to understand these.

- Efficiency: Futarchy leverages market mechanisms to efficiently allocate resources towards policies with the highest predicted success.

- Meritocracy: Decisions are based on data and predictions rather than personal biases or political agendas.

- Incentivization: Participants are incentivized to make accurate predictions and contribute to the organization's success, as they can profit from their insights.

- Adaptability: Futarchy allows for flexibility and adaptation, as decisions can be adjusted based on evolving market predictions.

![futarchy dao](https://dspyt.com/images/posts/defi/size_graphic.webp)

### Markets are good for several theoretical reasons

For one, market participants are strongly incentivized to correct mispricings.

- Suppose a wealthy individual or a group of corporations with vested interests in avoiding the carbon tax attempt to manipulate the market by artificially inflating the price of contracts indicating the policy's failure. They might do this by purchasing a large number of these contracts, hoping to create the perception that there's significant doubt about the effectiveness of the carbon tax.

However, due to the nature of market dynamics in a futarchy system, this manipulation is difficult to sustain. As more participants observe the inflated prices for contracts indicating failure, they recognize a mispricing in the market. This creates an opportunity for other market participants to profit by selling contracts for failure at the artificially high prices and buying contracts for success at lower prices, thus correcting the mispricing.

- **As a result,** the attempted manipulation triggers a counter-response from other participants, effectively neutralizing the manipulation. The market quickly self-corrects as participants exploit the profit opportunities created by the mispricing. In the end, the market reflects a more accurate assessment of the carbon tax's potential effectiveness, regardless of the initial manipulation attempt.

- **The effect of this is that markets are hard to manipulate.** Even deep-pocketed individuals will have trouble moving a market because doing so will open up profitable opportunities for other participants to correct these mispricings.

- **Another advantage is that markets give more power over time to those who are better predictors.** This is because high returns both directly increase a trader’s capital and improve their ability to raise capital from investors.

## Criticisms and Challenges

Economist Tyler Cowen said

> I would bet against the future of futarchy, or its likelihood of succeeding were it in place. Robin says "vote on values, bet on beliefs", but I don't think values and beliefs can be so easily separated.

One of the largest drawbacks of markets is Keynesian beauty contests. In other words, sometimes investors buy what they think others will buy, not what they think the fundamentals support. This is especially evident in crypto markets where many tokens are reflexively priced, and have no fundamentals.

### However, there are two counter-points to consider

- For one, what MetaDAO searching for is not the Platonic ideal of a governance system, but merely one that is better than the others. Empirically and theoretically, markets appear to be better than other prediction mechanisms.

- Secondly, people tend to underestimate the rationality of markets because of the frequency illusion. Normal market conditions are boring and receive little media coverage. Periods of irrationality, such as the GameStop short squeeze, receive lots of publicity. So we are predisposed to see markets as more irrational than they are.

Implementation challenges, inc luding regulatory hurdles and public skepticism, may pose significant barriers to adoption.

## Participating in Futarchy

In MetaDAO, individuals can participate in various roles:

- Analysts: These individuals study and trade in the prediction markets, indirectly influencing where the organization allocates resources. They’re the ones who trade the markets, indirectly deciding where the Meta-DAO allocates its energy and money.

- Entrepreneurs: They propose ambitious projects and gather support for their implementation. The people who take on big, ambitious projects and gather the people to make it happen.

- Cyber-agents: These individuals execute the projects, working on coding, designing, marketing, and managing partnerships.

When an entrepreneur raises a project proposal, they specify a budget. That budget can be allocated however the entrepreneur sees fit. Some entrepreneurs may decide to hire more cyber-agents and pay less per cyber-agent. Others may decide to hire fewer cyber agents and pay more individual compensation.

![meta dao participate](https://dspyt.com/images/posts/defi/finishmetadao.webp)

### Proposals and How to Participate

We can classify proposals by their area and scope. Along the area axis, we have **business proposals** and **operations proposals**. Along the scope axis, we have **projects** and **direct actions**.

![proposals](https://dspyt.com/images/posts/defi/Proposals.webp)

Business projects are how the Meta-DAO converts financial capital into revenue-generating products. Business direct actions operate over those products, tweaking parameters in the pursuit of customer satisfaction and profitability. Operations projects and direct actions support the business, ensuring that the Meta-DAO has the right people and resources to create new products and manage existing ones.

Each of these four proposal types has its own template. These are listed here:

- [Business project](https://hackmd.io/@metaproph3t/B1KA517s6)
- [Business direct action](https://hackmd.io/@metaproph3t/rJ5pCENs6)
- [Operations project](https://hackmd.io/@metaproph3t/S1ajAmEsp)
- [Operations direct action](https://hackmd.io/@metaproph3t/rJBA3rVsT)

Project proposals should generally be raised by entrepreneurs who are accountable to the DAO for their execution. Direct action proposals can be raised by anyone.

- You can use any document app you want to create proposals.
- Join the [Meta-DAO Discord server](https://discord.gg/metadao) to engage in discussions and stay updated.
- Engage in trading within prediction markets to influence decision-making.
- Contribute to projects by offering skills and expertise, whether in coding, design, marketing, or other areas. If it provides value to the Meta-DAO, the Meta-DAO is incentivized to compensate you for it!

## Conclusion

Futarchy represents a bold experiment in governance that seeks to overcome traditional limitations of democratic decision-making. By leveraging prediction markets, futarchy offers a promising framework for more effective and data-driven policy choices. However, its success ultimately depends on addressing critical challenges and ensuring transparency, fairness, and the integrity of the decision-making process.

## Useful links

- [The Meta-DAO Dashboard](https://dune.com/metadaohogs/themetadao)
- [Governance Token](https://solscan.io/token/METADDFL6wWMWEoKTFJwcThTbUmtarRJZjRpzUvkxhr)
- [Meta-DAO Docs](https://docs.themetadao.org/)
- [Twitter Meta-DAO](https://twitter.com/MetaDAOProject)
- [Meta-DAO GitHub](https://github.com/metaDAOproject)
- [Meta Dao Metrics](https://flipsidecrypto.xyz/pine/meta-dao-metrics-yG-0MP)
