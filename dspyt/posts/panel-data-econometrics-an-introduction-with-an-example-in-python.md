---
title: "How to Panel data python – An easy introduction - DSPYT"
date: "May 5, 2022"
excerpt: "We are introducing the concept of a panel data and illustrate the example of panel data with python on the WHO births data set."
cover_image: "/images/posts/panel/paneldata.webp"
time_read: "5 min"
tags: ["panel-data", "python", "econometrics", "data"]
---

In this article we discuss panel data python as well as panel data regression python.

Panel data (or longitudinal data) comprises [time-series](https://dspyt.com/time-series-data-an-easy-introduction) for each [cross sectional](https://dspyt.com/cross-sectional-data-an-easy-introduction) unit in a data set. In other words, in a panel data we take into account the same [cross sectional](https://dspyt.com/cross-sectional-data-an-easy-introduction) units over multiple time points. Examples include units such as countries, cities, firms, households, individuals. In this context, we can think of pure [time-series](https://dspyt.com/time-series-data-an-easy-introduction) and pure [cross sectional data](https://dspyt.com/cross-sectional-data-an-easy-introduction) as a subset of panel data with only one dimension.

<div style="position: relative; padding-bottom: 56.25%;">
<iframe style="border: 1; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" src="https://www.youtube.com/embed/KKQOoXPgu04?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Panel vs. Pooled data

According to [Eviews documentation](http://www.eviews.com/help/helpintro.html#page/content/sec_panel.html), pooled data refers to data with relatively few cross-sections, where variables are held in cross-section specific individual series, meanwhile panel data corresponds to data with large numbers of cross-sections, with variables held in single series in a stacked form.

Some experts refer to Pooled data as “time series of cross sections”, where observations in each cross section do not necessarily refer to the same unit. Whereas, panel data refers to samples of the same [cross-sectional](https://dspyt.com/cross-sectional-data-an-easy-introduction) units at multiple points in time. A panel-data observation has two dimensions:

X{it}, where i runs from 1 to N and denotes the [cross sectional unit](https://dspyt.com/cross-sectional-data-an-easy-introduction) and t runs from 1 to T and denotes the time of the observation.

## Advantages and Disadvantages of Panel data

There are numerous benefits of panel data over [cross sectional](https://dspyt.com/cross-sectional-data-an-easy-introduction) and time-series data:

- In panel data multiple observations of the same entities allow us to control for unobserved characteristics.
- Panel data facilitates causal inference which would be difficult with one cross-section or time-series data set.
- Panel data allows us to study significance of lags in behaviour and results of decision-making across time and entities.

Nevertheless, for a data scientist it might be difficult to obtain panel data since it requires a replication of the same entities over multiple periods.

## Types of Panel data

We can consider panel data as balanced or unbalanced. If each [cross sectional](https://dspyt.com/cross-sectional-data-an-easy-introduction) unit is observed in all time periods panel data is balanced. While an unbalanced data set is one where units are not observed in all time periods and contain missing values.

Econometricians also separate panel data into a wide or a long one. In a wide panel data a row or a column represents one observational unit for all points in time, while in a long panel data a row or a column holds one observation per period.

## An example of a Panel data set

An example of a wide unbalanced panel data set is [World Health Organization crude birth rates data set available on Kaggle](https://www.kaggle.com/pavfedotov/birth-rate). For 10 of 239 countries and regions crude birth observations span 60 years from 1960 to 2019 while for others only a few periods. The large amount of missing values is likely due to the high administrative cost of collecting the necessary information.

![WHO crude birth rates per 1000](/images/posts/panel/paneldata2.webp)

In the table above, we display crude birth rates for first 10 countries and regions in alphabetical order. We observe that United Arab Emirates, Antigua and Barbuda and Australia have no missing data points for from 1960 to 1980.

[Pandas](https://pandas.pydata.org/) is an open source Python package that data scientists use for data analysis and machine learning tasks. It is built on top of package named Numpy. Numpy is one of the most commonly used packages for scientific computing in Python. It provides a multi-dimensional array object, as well as variations such as masks and matrices, which can be used for math operations.

Pandas is also supported by Dask, flexible open-source Python library for parallel computing.

We use the WHO crude births data set to visualize features of the data set. You can use pandas library to load the file into DataFrame and generate descriptive statistics for each country/region with the help of describe() method.

Descriptive statistics includes the count of values, mean and standard deviation, minimum and maximum values as well as 25th percentile vale, 50th percentile value (also median) and 75th percentile.

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">import</span> <span style="color: #0e84b5; font-weight: bold">pandas</span> <span style="color: #007020; font-weight: bold">as</span> <span style="color: #0e84b5; font-weight: bold">pd</span>
cols2skip <span style="color: #666666">=</span> [<span style="color: #40a070">1</span>,<span style="color: #40a070">2</span>,<span style="color: #40a070">3</span>]
df <span style="color: #666666">=</span> pd<span style="color: #666666">.</span>read_csv(<span style="color: #4070a0">&#39;file.csv&#39;</span>, skiprows<span style="color: #666666">=</span><span style="color: #40a070">3</span>, <span style="color: #666666">/</span>
 usecols<span style="color: #666666">=</span>[i <span style="color: #007020; font-weight: bold">for</span> i <span style="color: #007020; font-weight: bold">in</span> <span style="color: #007020">range</span>(<span style="color: #40a070">64</span>) <span style="color: #007020; font-weight: bold">if</span> i <span style="color: #007020; font-weight: bold">not</span> <span style="color: #007020; font-weight: bold">in</span> cols2skip], <span style="color: #666666">/</span>
 index_col<span style="color: #666666">=</span><span style="color: #4070a0">&#39;Country Name&#39;</span>)<span style="color: #666666">.</span>T
df<span style="color: #666666">.</span>describe()
</pre></div>

![Panel Data Dspyt](/images/posts/panel/paneldata3.webp)

## Panel data python with Pandas

As we can see from the picture, some of the columns contain full NaNs, hence it is reasonable to drop such data:

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">df <span style="color: #666666">=</span> df<span style="color: #666666">.</span>dropna(axis<span style="color: #666666">=</span><span style="color: #40a070">1</span>, how<span style="color: #666666">=</span><span style="color: #4070a0">&#39;all&#39;</span>)
</pre></div>

We further explore the patterns in the crude birth rates and display the data for the first 10 countries. For interactive visualizations in Python we use Matplotlib library.

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">import</span> <span style="color: #0e84b5; font-weight: bold">matplotlib.pyplot</span> <span style="color: #007020; font-weight: bold">as</span> <span style="color: #0e84b5; font-weight: bold">plt</span>
df<span style="color: #666666">.</span>iloc[:,:<span style="color: #40a070">10</span>]<span style="color: #666666">.</span>plot(subplots<span style="color: #666666">=</span><span style="color: #007020; font-weight: bold">True</span>, figsize<span style="color: #666666">=</span>(<span style="color: #40a070">20</span>,<span style="color: #40a070">60</span>))
plt<span style="color: #666666">.</span>show()
</pre></div>

![Panel data python with Pandas](/images/posts/panel/paneldata4.webp)

## Panel data python: data transformation

To conduct statistical analysis and model the birth rates we have to convert data into an appropriate format for panel data analysis. In the following code we use pandas.melt to massage a DataFrame into a format where one or more columns are identifier variables, while all other columns are measured variables. We also drop missing values, however, some consider interpolation or other techniques of filling missing values. The entity identifier is the index from the previous data frame and the year that we also convert into a separate categorical column for dummy variables creation.

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">year <span style="color: #666666">=</span> df<span style="color: #666666">.</span>index
df[<span style="color: #4070a0">&#39;year&#39;</span>] <span style="color: #666666">=</span> year<span style="color: #666666">.</span>astype(<span style="color: #007020">int</span>)
df <span style="color: #666666">=</span> df<span style="color: #666666">.</span>melt(id_vars<span style="color: #666666">=</span>[<span style="color: #4070a0">&quot;year&quot;</span>],
        var_name<span style="color: #666666">=</span><span style="color: #4070a0">&quot;Country&quot;</span>,
        value_name<span style="color: #666666">=</span><span style="color: #4070a0">&quot;Birth Rate&quot;</span>)<span style="color: #666666">/</span>
        <span style="color: #666666">.</span>dropna()<span style="color: #666666">.</span>reset_index(drop<span style="color: #666666">=</span><span style="color: #007020; font-weight: bold">True</span>)
year <span style="color: #666666">=</span> df<span style="color: #666666">.</span>year
df <span style="color: #666666">=</span> df<span style="color: #666666">.</span>set_index([df<span style="color: #666666">.</span>index, <span style="color: #4070a0">&#39;year&#39;</span>])
df[<span style="color: #4070a0">&#39;year&#39;</span>] <span style="color: #666666">=</span> pd<span style="color: #666666">.</span>Categorical(year)
df<span style="color: #666666">.</span>head()
</pre></div>

![Panel Data Dspyt](/images/posts/panel/paneldata5.webp)

## Panel data analysis

Panel data analysis is a statistical method widespread in the fields of economics, finance and epidemiology to analyze two-dimensional panel data. In a production environment regression estimation and data modeling traditionally follows the collection of a data set. The three most ubiquitous panel data models are a pooled model, a fixed effects model and a random effects model.

## Panel data python: Pooled OLS

For an estimation of pooled OLS we use linearmodels library and for a creation of a constant for a linear equation we use statsmodels library.

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">exog_vars <span style="color: #666666">=</span> [<span style="color: #4070a0">&quot;Country&quot;</span>, <span style="color: #4070a0">&#39;year&#39;</span>]
exog <span style="color: #666666">=</span> sm<span style="color: #666666">.</span>add_constant(df[exog_vars])
mod <span style="color: #666666">=</span> PooledOLS(df[<span style="color: #4070a0">&#39;Birth Rate&#39;</span>], exog)
pooled_res <span style="color: #666666">=</span> mod<span style="color: #666666">.</span>fit()
<span style="color: #007020">print</span>(pooled_res)
</pre></div>

![Panel Data Python Dspyt](/images/posts/panel/paneldata6.webp)

## References

- Bashtage.github.io. n.d. [Examples — linearmodels v4.24 documentation](https://bashtage.github.io/linearmodels/panel/examples/examples.html).
- Cross Validated. n.d. [What is the difference between pooled cross sectional data and panel data?](https://stats.stackexchange.com/questions/45236/what-is-the-difference-between-pooled-cross-sectional-data-and-panel-data).
- Eviews.com. n.d. [EViews Help](http://www.eviews.com/help/helpintro.html#page/content/sec_panel.html).
- Wooldridge, J., 2019. Introductory econometrics. 7th ed.
- [Kaggle notebook](https://www.kaggle.com/pavfedotov/who-birth-rates-panel-data-analysis)

## Related Posts

- [Blockchain Data Indexer with TrueBlocks](https://dspyt.com/blockchain-data-indexer-with-trueblocks)
- [Advanced Realized Volatility and Quarticity](https://dspyt.com/advanced-realized-volatility-and-quarticity)
- [Machine Learning with Sklearn](https://dspyt.com/machine-learning-time-series-temperature-data-modeling)
- [How to illustrate log returns vs simple returns](https://dspyt.com/simple-returns-log-return-and-volatility-simple-introduction)
- [A How to EfficientNet Classification](https://dspyt.com/efficientnet-classification)
- [Data Analytics for Honest Protocol](https://dspyt.com/honest_protocol_data_analytics)
- [Data Collection Ideas for Honest Protocol](https://dspyt.com/honest_protocol_data_collection_ideas)
