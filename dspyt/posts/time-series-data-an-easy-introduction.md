---
title: "Kaggle time series data – An easy introduction"
date: "April 10, 2022"
excerpt: "A time series is a collection of observations on at least one variable ordered along single dimension, time. time series forecasting is invaluable method."
cover_image: "/images/posts/time-series/Time_series_of_norm_of_difference-map_increment_Δ_during_solving_random_3-SAT_instance.png"
time_read: "5 min"
tags: ["python", "time-series", "econometrics"]
---

A time series is a collection of observations on at least one variable ordered along single dimension, time. A time series data demonstrates properties such as large data size, abundant attributes and continuity. Time series forecasting is particularly useful in an analysis of a trend and forecasting in macroeconomics. In the field of finance time series data assists in forecasting volatility and an average price.

![Bitcoin price Kaggle time series data example](/images/posts/time-series/time-series.png)

## Kaggle Time Series Data Examples

Time series data examples include the broad macroeconomic aggregates such as price levels, money supply, exchange rates, gross domestic product, investments, relative income levels and productivity indicators. Stock prices and cryptocurrency prices are also instances of time series data. For instance, you can find Bitcoin historical price 1-minute data from 2012 to 2021 on [Kaggle](https://www.kaggle.com/mczielinski/bitcoin-historical-data).

## Time Dependence

The key feature of time series data is time dependence. The data points tend to exhibit strong relationship to their recent histories, lags. This feature creates a critical problem in utilizing time series data in a standard econometric model. Researchers need to take additional steps in specifying econometric models for time series data before using them in standard econometric methods.

The emphasis in econometrics of time series is the dependence among observations at multiple points in time. In addition to the highly correlated temporal order among different variables, relationships between their current and past values are critical.

## Time series forecasting

Furthermore, an appropriate forecasting model can be constructed to capture the dynamics of the underlying time series, which can provide a basis for investors’ decision-making. For example, an accurate forecasting of the stock index allows investors to grasp the overall trend of the market to effectively capture trading opportunity and make reasonable asset allocations.

The classical forecasting models of time series are auto-regressive model (AR), moving-average model (MA), auto-regressive moving average model (ARMA) and auto-regressive integrated moving average model (ARIMA). In turn, the ARIMA model has become one of the more widely used methods in the study of forecasting models for time series.

## Stock index time series forecasting in Python

To illustrate operations with time series data in python we use 6 years of 5 minute NIFTY 50 Indian stock index data set from Kaggle. The data spans from 9 January 2015 to 25 March 2021.

First, we import necessary libraries and install new one in Kaggle environment:

<iframe src="https://www.kaggle.com/embed/pavfedotov/time-series-analysis-nifty50-stationarity-adf?cellIds=4&kernelSessionId=73089468" height="300" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Time series analysis Nifty50 (stationarity, ADF)"></iframe>

We also load the data set using pandas library <code>read_csv()</code> method. We process the date column with Datetime library <code>strptime()</code> method to a datetime data type comptible with Pandas DataFrame.

<iframe src="https://www.kaggle.com/embed/pavfedotov/time-series-analysis-nifty50-stationarity-adf?cellIds=6-7&kernelSessionId=73089468" height="500" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Time series analysis Nifty50 (stationarity, ADF)"></iframe>

The pandas method<code>head(2)</code> displays first 2 rows of the data, meanwhile <code>info()</code> dispays information about the tpyes of the columns and DataFrame properties. We also set date column as an index:

<iframe src="https://www.kaggle.com/embed/pavfedotov/time-series-analysis-nifty50-stationarity-adf?cellIds=8-9&kernelSessionId=73089468" height="500" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Time series analysis Nifty50 (stationarity, ADF)"></iframe>

## Visualization

The stock price index data chart looks as following:

<iframe src="https://www.kaggle.com/embed/pavfedotov/time-series-analysis-nifty50-stationarity-adf?cellIds=20&kernelSessionId=73089468" height="300" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Time series analysis Nifty50 (stationarity, ADF)"></iframe>

Moreover, we can plot the data set and conduct a time series analysis using partial auto-correlation and auto-correlation plots that we will cover in details in the future:

But first we save only daily stock close values to conduct daily stock price analysis. To conduct a higher frequency analysis we need tan access to more granular data from markets across the world.

<iframe src="https://www.kaggle.com/embed/pavfedotov/time-series-analysis-nifty50-stationarity-adf?cellIds=27&kernelSessionId=73089468" height="300" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Time series analysis Nifty50 (stationarity, ADF)"></iframe>

## Autocorrelation plots

For plotting auto-correlations we use statsmodels library. Here is an example of autocorrelation and partial autocorrelation plots for stock index price data.

<iframe src="https://www.kaggle.com/embed/pavfedotov/time-series-analysis-nifty50-stationarity-adf?cellIds=29-30&kernelSessionId=73089468" height="500" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Time series analysis Nifty50 (stationarity, ADF)"></iframe>

Clearly there is evidence for time-dependence and serial correlation. Hence, we should convert the prices to a log-price for symmetry around zero and difference the data for stationarity.

<iframe src="https://www.kaggle.com/embed/pavfedotov/time-series-analysis-nifty50-stationarity-adf?cellIds=36-41&kernelSessionId=73089468" height="500" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Time series analysis Nifty50 (stationarity, ADF)"></iframe>

The plot of log-returns exhibits a constant mean, variance and auto-correlation function.

You can access the data and code on [Kaggle](https://www.kaggle.com/pavfedotov/time-series-analysis-nifty50-stationarity-adf).

## Related Posts

- [How to Panel data python – An easy introduction](https://dspyt.com/panel-data-econometrics-an-introduction-with-an-example-in-python)
- [Blockchain Data Indexer with TrueBlocks](https://dspyt.com/blockchain-data-indexer-with-trueblocks)
- [Advanced Realized Volatility and Quarticity](https://dspyt.com/advanced-realized-volatility-and-quarticity)
- [Machine Learning with Simple Sklearn Ensemble](https://dspyt.com/machine-learning-simple-sklearn-ensemble)
- [Parsiq Triggers for Axie Infinity](https://dspyt.com/blockchain-insights-with-parsiq-triggers-for-axie-infinity)
- [How to illustrate log returns vs simple returns](https://dspyt.com/simple-returns-log-return-and-volatility-simple-introduction)
- [A How to EfficientNet Classification](https://dspyt.com/efficientnet-classification)
