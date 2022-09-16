---
title: "Cross sectional data example: easy introduction"
date: "April 20, 2022"
excerpt: "In this article we are introducing the concept of cross sectional data. A cross sectional data example consists of a sample of units at a given point in time."
cover_image: "/images/posts/cross/image.webp"
time_read: "5 min"
---

Econometric data sets come in numerous shapes, forms and types such as cross-sectional, [time-series](https://dspyt.com/time-series-data-an-easy-introduction) and [panel data](https://dspyt.com/panel-data-econometrics-an-introduction-with-an-example-in-python). The data type affects the analysis and estimation methods that we as data scientists can use. In this article we are introducing the concept of cross sectional data and demonstrate cross sectional data examples.

A cross sectional data example consists of a sample of units such as individuals, households, firms, cities, states, countries at a given point in time. Sometimes, the data on all units does not correspond to the same time period. For example, researchers may conduct a survey during different weeks within a year on the number and characteristics of housing units as well as the households that occupy those units.

In a pure cross sectional analysis, we ignore any minor timing differences in collecting the data. If a researcher conducted a survey during different weeks of the same year, we would still consider this as a cross sectional data example.

## Cross sectional data example: Titanic Kaggle Dataset

We demonstrate a cross sectional data example for econometric analysis with the help of Python. The table below contains a [cross sectional data example on Titanic passengers on April 15th, 1912](https://www.kaggle.com/c/titanic).

![Titanic cross sectional data example](/images/posts/cross/image-1.webp)

The variables include PassengerID, Survived (an indicator of survival), Pclass (ticket class), Name, Sex, Age in years, SibSp (the number of siblings/spouses aboard the Titanic), Parch (the number of parents / children aboard the Titanic), Ticket number, Fare, Cabin number and Embarked (Port of Embarkation). Survival and Sex variables are binary (zero-one) and indicate features of the individual.

The variable PassengerID in the cross sectional data example is the observation number for each individual in the sample. Unlike the other variables, it is not a characteristic of the individual. The fact that the ordering of the data does not matter for an analysis is a key feature of cross sectional data examples.

Different variables sometimes correspond to different time periods in cross sectional data examples. For example, to assess the housing market in Melbourne and determine the key price determinants we can study the relationship between the price of houses over a certain period. Such cross sectional data example is also [available on Kaggle](https://www.kaggle.com/dansbecker/melbourne-housing-snapshot).

![Melbourne Housing Snapshot cross sectional data example](/images/posts/cross/image-2-1024x327.webp)

The variable Price is a price in dollars which is the target of our study. The fact that prices correspond to different dates, does not lead to any special problems in treating this information as a cross sectional data set. The creators of the data set ordered the observations alphabetically by suburb, but such ordering does not affect further analysis.

## Random Sampling

An important feature of cross sectional data is that we can often assume that data scientists obtained it by random sampling from the underlying population. For example, if we obtain information on emergency preparedness such as presence of a generator, nonperishable emergency food, an evacuation vehicle, and other characteristics by randomly drawing 350 households from the city, then we have a random sample from the population of all households in a given city.

However, random sampling sometimes may not be not appropriate assumption for a cross sectional data analysis. For example, suppose we are studying factors that influence the accumulation of wealth. We survey a random sample of people, but some might have refused to report their wealth. For instance, if wealthier people are less likely to disclose their wealth, then our sample on wealth is not a random sample from the population of all people.

Another violation of random sampling occurs when we sample from units that are large relative to the population. The potential problem in such cases is that the population is relatively small to assume that the observations are independent. For example, if we want to explain economic growth across countries it is unlikely that the economic growth in countries near one another is independent.

## Related Posts

- [How to Panel data python – An easy introduction](https://dspyt.com/panel-data-econometrics-an-introduction-with-an-example-in-python)
- [Blockchain Data Indexer with TrueBlocks](https://dspyt.com/blockchain-data-indexer-with-trueblocks)
- [Advanced Realized Volatility and Quarticity](https://dspyt.com/advanced-realized-volatility-and-quarticity)
- [Machine Learning with Sklearn](https://dspyt.com/machine-learning-time-series-temperature-data-modeling)
- [How to illustrate log returns vs simple returns](https://dspyt.com/simple-returns-log-return-and-volatility-simple-introduction)
- [A How to EfficientNet Classification](https://dspyt.com/efficientnet-classification)
