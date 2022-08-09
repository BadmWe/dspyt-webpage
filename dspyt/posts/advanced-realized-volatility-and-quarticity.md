---
title: "How to implement Realized Volatility python"
date: "April 27, 2022"
excerpt: "Volatility estimators are especially valuable in modelling financial returns and capturing time-variability of financial series."
cover_image: "/images/pexels-pixabay-210607.jpg"
time_read: "5 min"
---

Volatility estimators are especially valuable in modelling financial returns and capturing time-variability of financial series.

In this article, we discuss advanced metrics of volatility and measures of integrated quarticity. Besides, we implement the estimators in Pandas, NumPy and SciPy python libraries.

## Quarticity and Realized Volatility python

The libraries that we are using in the implementation of the math formulas are

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">from</span> <span style="color: #0e84b5; font-weight: bold">scipy.special</span> <span style="color: #007020; font-weight: bold">import</span> gamma
<span style="color: #007020; font-weight: bold">import</span> <span style="color: #0e84b5; font-weight: bold">numpy</span> <span style="color: #007020; font-weight: bold">as</span> <span style="color: #0e84b5; font-weight: bold">np</span>
<span style="color: #007020; font-weight: bold">import</span> <span style="color: #0e84b5; font-weight: bold">pandas</span> <span style="color: #007020; font-weight: bold">as</span> <span style="color: #0e84b5; font-weight: bold">pd</span>
</pre></div>

Furthermore, we estimate additional volatility estimators that we build upon realized quarticity, realized quad-power quarticity and realized tri-power quarticity.

The realized fourth-power variation or realized quarticity is a consistent estimator of the integrated quarticity

![](/images/posts/quarticity/image-4.png)

A more robust estimator, particularly in the presence of jumps, is the realized quad-power quarticity

![](/images/posts/quarticity/image-5.png)

Similarly robust estimator is also the realized tri-power quarticity

![](/images/posts/quarticity/image-17.png)

In python an implementation looks as following

<iframe src="https://www.kaggle.com/embed/pavfedotov/time-series-analysis-nifty50-stationarity-adf?cellIds=12&kernelSessionId=73089468" height="300" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Time series analysis Nifty50 (stationarity, ADF)"></iframe>

<iframe src="https://www.kaggle.com/embed/pavfedotov/time-series-analysis-nifty50-stationarity-adf?cellIds=13&kernelSessionId=73089468" height="300" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Time series analysis Nifty50 (stationarity, ADF)"></iframe>

<iframe src="https://www.kaggle.com/embed/pavfedotov/time-series-analysis-nifty50-stationarity-adf?cellIds=15&kernelSessionId=73089468" height="300" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Time series analysis Nifty50 (stationarity, ADF)"></iframe>

Moreover, these estimates assist in estimation of three additional realized volatility estimators:

![](/images/posts/quarticity/image-18.png)

<iframe src="https://www.kaggle.com/embed/pavfedotov/time-series-analysis-nifty50-stationarity-adf?cellIds=22&kernelSessionId=73089468" height="300" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Time series analysis Nifty50 (stationarity, ADF)"></iframe>

<iframe src="https://www.kaggle.com/embed/pavfedotov/time-series-analysis-nifty50-stationarity-adf?cellIds=23&kernelSessionId=73089468" height="300" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Time series analysis Nifty50 (stationarity, ADF)"></iframe>

<iframe src="https://www.kaggle.com/embed/pavfedotov/time-series-analysis-nifty50-stationarity-adf?cellIds=25&kernelSessionId=73089468" height="300" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Time series analysis Nifty50 (stationarity, ADF)"></iframe>

## Further Ideas to explore

Corsi et al. (2008) research paper suggests that we can optimize our strategy by taking into account residuals from GARCH model. In particular, they demonstrate that the residuals of the commonly used time–series models for realized volatility exhibit non–Gaussian properties and volatility clustering. To accommodate these properties, authors extend models for realized volatility by replacing the Gaussian with the more flexible normal inverse Gaussian (NIG) distribution to allow for fat–tails and skewness.

From this paper we also reference the idea of less well-known time-series model, auto-regressive fractionally integrated moving average (ARFIMA), which they claimed in 2005 was a promising strategy for modeling and predicting volatility.

Additionally, we might include current and lagged variables as proxies for the information arrival process which potentially can add insight on future volatility.

Finally, we can explicitly separate quadratic variation into continuous and jump components in order to increase the robustness.

## References

Corsi, Fulvio & Mittnik, Stefan & Pigorsch, Christian & Pigorsch, Uta. (2008). [The Volatility of Realized Volatility. Econometric Reviews](https://www.researchgate.net/publication/24079644_The_Volatility_of_Realized_Volatility). 27. 46-78.
