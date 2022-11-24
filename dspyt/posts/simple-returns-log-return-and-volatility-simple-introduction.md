---
title: "How to illustrate log returns vs simple returns - DSPYT"
date: "May 4, 2022"
excerpt: "In this blog post we are introducing the concepts of log returns vs simple returns, realized volatility and realized variance."
cover_image: "/images/posts/logreturns/pexels-andrew-neel-9067435-e1629301269244.webp"
time_read: "5 min"
tags: ["Python", "finance", "log-return", "econometrics"]
---

In this blog post, we are going to introduce the concepts of log returns vs simple returns and realized volatility.

To illustrate the concept of log returns we are going to demonstrate the concepts with the help of python libraries: pandas and NumPy.

## Simple returns vs log returns

To begin with, the key benefit of using financial returns instead of prices is normalization which allows us to measure and compare all financial instruments and assets. This is also a requirement for many multidimensional statistical analyses and advanced machine-learning techniques.

The simple financial return on an asset is the amount we receive or lose after holding an asset for a certain time frame.

![simple returns formula](https://latex.codecogs.com/svg.latex?%5C%20R_%7Bt%7D%3D%5Cdfrac%7BP_%7Bt%7D-P_%7Bt-1%7D%7D%7BP_%7Bt-1%7D%7D%3D%20%5Cdfrac%7BP_%7Bt%7D%7D%7BP_%7Bt-1%7D%7D-1)

Meanwhile we calculate log returns as

![log returns formula](https://latex.codecogs.com/svg.latex?r_%7Bt%7D%3D%5Cdfrac%7Blog%28P_%7Bt%7D%29%7D%7Blog%28P_%7Bt-1%7D%29%7D%3D%20log%28P_%7Bt%7D%29%20-%20log%28P_%7Bt-1%7D%29)

where P is price of an asset and t is a time period.

In pandas we calculate simple returns with an in-built pandas function `pct_change` that calculates percentage change and use numpy `log` to calculate log returns in addition to pandas `diff` that differences the series.

```python
data['simple_returns'] = data.close.pct_change()
def log_return(list_stock_prices):
    return np.log(list_stock_prices).diff()
data['log_return'] = log_return(data.close)
```

We call pandas DataFrame `describe` method to provide generate descriptive statistics.

```python
data.describe()
```

![pandas describe descriptive statistics](/images/posts/logreturns/descriptive.webp)

The main advantage of log returns is that we can easily aggregate them across time unlike simple returns. For instance, the log return for a year is the sum of the log returns of the days within the year. Additionally, log returns are symmetric around 0 and log return values can range from minus infinity to plus infinity. Whereas, simple returns' downside is limited at -100%, meanwhile a negative movement of -25% (movement from 100 USD to 75 USD) does not reverse the losses by going +25% (75 USD to 93.75 USD).

## Realized Volatility

Volatility plays an important role in trading and financial model forecasting. Next to directly modeling high–frequency returns, intra–day returns are also used to construct lower–frequency daily volatility measures, known as realized volatility. The application of volatility has tremendously risen due to the availability of high-frequency data and computational resources.

<p><strong>Layman’s definition:&nbsp;</strong>&nbsp;Realized volatility is the magnitude of daily price movements, regardless of direction, of some underlying, over a specific period.</p><p><strong>Technical definition:</strong>&nbsp; Realized volatility is the daily standard deviation of log returns of&nbsp;an underlying asset, index, instrument, security, or ETF, over a defined period, with an assumed mean of&nbsp;zero.</p>

Traders and data scientist use realized volatility to assess the predictive performance and adequacy of existing models and strategies due to our ability to observe the metric (non-latent character). Realized volatility is a particularly powerful indicator of the price risk and its dynamics.

The formula for realized volatility:

![formula for realized volatility](https://latex.codecogs.com/svg.latex?%5Csigma%20%3D%20%5Csqrt%7B%5Csum_%7Bi%3D1%7D%5E%7BT%7Dr_%7Bt%7D%5E2%7D)

In Python we create a function that calculates realized volatility with the help of numpy functions `sqrt` and `sum` and pandas `groupby` and `agg`.

```python
def realized_volatility(series):
    series = np.log(series).diff()
    return np.sqrt(np.sum(series**2))
df.groupby(df.index.date).agg(realized_volatility)
```

![realized volatility](/images/posts/logreturns/rv.webp)

## Realized Variance

Andersen and Bollerslev (1998) have suggested an ex-post intra-daily volatility measure based on the sum of the squared intra-day returns. This concept is now known as realized variance, and this is an ex-post observable measure.

![Realized variance formula](https://latex.codecogs.com/svg.latex?%5Csigma%5E2%20%3D%20%5Csum_%7Bi%3D1%7D%5E%7BT%7Dr_%7Bt%7D%5E2)

```python
def realized_variance(series):
    return np.sum(series**2)
df.groupby(df.index.date).agg(realized_variance)
```

![realized variance](/images/posts/logreturns/rvar.webp)

## References and Related Posts

- [Deutsche Mark–Dollar Volatility: Intraday Activity Patterns, Macroeconomic Announcements, and Longer Run Dependencies](https://onlinelibrary.wiley.com/doi/abs/10.1111/0022-1082.85732)
- [Kaggle log returns vs simple returns notebook](https://www.kaggle.com/pavfedotov/time-series-analysis-nifty50-stationarity-adf)
- [How to Panel data python – An easy introduction](https://dspyt.com/panel-data-econometrics-an-introduction-with-an-example-in-python)
- [Advanced Realized Volatility and Quarticity](https://dspyt.com/advanced-realized-volatility-and-quarticity)
- [Machine Learning with Sklearn](https://dspyt.com/machine-learning-time-series-temperature-data-modeling)
- [A How to EfficientNet Classification](https://dspyt.com/efficientnet-classification)
