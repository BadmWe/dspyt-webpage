---
title: "Machine Learning time series python - Data Science with Python"
date: "March 4, 2021"
excerpt: "Sklearn python pipeline with multiple regression models using traditional and established libraries like numpy, pandas, scipy and sklearn."
cover_image: "/images/posts/temperature/pexels-tom-fisk-6060188-scaled-e1629300731444.webp"
tags:
  [
    "Python",
    "sklearn",
    "Pandas",
    "NumPy",
    "AI",
    "data science",
    "data",
    "time series",
    "machine learning",
    "DecisionTreeRegressor",
  ]
---

This post is a write up on machine learning time series python pipeline using traditional and established libraries like numpy, pandas, scipy and sklearn. In this post we are making a model for time-series data which we introduced in article [Kaggle time series data – An easy introduction](https://dspyt.com/time-series-data-an-easy-introduction).

We base the post on our experience gained in machine learning competition [Pressure predictor](https://unearthed.solutions/u/competitions/pressure-predictor) for Australian based platform Unearthed, where dspyt team took 11th place out of 55 competitors on a private leaderboard. The company is very strict about the data and code that they provided. You can try the platform in Evergreen Challenges: [Exploration Data Science](https://unearthed.solutions/u/competitions/evergreen/exploration-data-science) and [HYDROSAVER](https://unearthed.solutions/u/competitions/evergreen/hydrosaver).

![Dspyt team Machine Learning Leaderboard](/images/posts/temperature/score.jpg)

## Loading Libraries for Python pipeline

To begin with, due to the nature of the challenge aws sagemaker python pipeline, our choice of libraries is limited.

Hence, we primarily go in depth with our available python libraries: pandas, numpy, scipy and sklearn.

```python
import numpy as np
import pandas as pd

from sklearn.pipeline import Pipeline, make_pipeline
from sklearn.preprocessing import StandardScaler, OneHotEncoder, LabelEncoder, MinMaxScaler, RobustScaler, PowerTransformer, PolynomialFeatures
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor, StackingRegressor
from sklearn.model_selection import train_test_split
from sklearn.linear_model import RidgeCV
from sklearn.metrics import mean_absolute_error
from sklearn.multioutput import MultiOutputRegressor
from sklearn.impute import SimpleImputer

from scipy.stats import skew
```

## Loading and separating data into train and test

After we successfully import libraries for python pipeline we can load the data and separate it into test and train. We have multiple target columns.

```python
df = pd.read_csv('/kaggle/input/pressure/public.csv', parse_dates=True,index_col=0)

target_columns = ["target_pressure_absolute_1dy","target_pressure_absolute_2wk","target_pressure_absolute_6wk",]
y = df[target_columns]
X = df.drop(columns=target_columns)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2,random_state=13)
```

## Preprocessing in the Python pipeline

Furthermore, we create features and transform the data which we will feed into regression models. For each column that is numeric we create expanding mean, rolling means for various periods ranging from a day to 6 weeks. We also difference the values for stationarity and square differenced values to find a signal.

Besides, we transform a date column to numerical one in pandas by using `pd.to_datetime(df.index).astype(int)`.

Finally, we eliminate excessively skewed numeric features by using log transformation. We could also try box-cox transformation that is available in scipy library. But for this python pipeline we use only $$log(1+x)$$ transformation.

```python
def preprocess(df):
    df['max_a_t'] = df.maximum_atmospheric_temperature.expanding().mean()
    df['max_a_t_diff'] = df.maximum_atmospheric_temperature - df.maximum_atmospheric_temperature.shift(1)
    df['max_a_t_diff_day'] = df.maximum_atmospheric_temperature - df.maximum_atmospheric_temperature.shift(24)
    df['max_a_t_d'] = df.maximum_atmospheric_temperature.rolling(24, min_periods=1).mean()
    df['max_a_t_w'] = df.maximum_atmospheric_temperature.rolling(168, min_periods=1).mean()
    df['max_a_t_2w'] = df.maximum_atmospheric_temperature.rolling(336, min_periods=1).mean()
    df['max_a_t_ewm'] = df.maximum_atmospheric_temperature.ewm(alpha=0.1, adjust=False).mean()

    df['min_a_t'] = df.minimum_atmospheric_temperature.expanding().mean()
    df['min_a_t_diff']     = df.minimum_atmospheric_temperature - df.minimum_atmospheric_temperature.shift(1)
    df['min_a_t_diff_day'] = df.minimum_atmospheric_temperature - df.minimum_atmospheric_temperature.shift(24)
    df['min_a_t_d'] = df.minimum_atmospheric_temperature.rolling(24, min_periods=1).mean()
    df['min_a_t_w'] = df.minimum_atmospheric_temperature.rolling(168, min_periods=1).mean()
    df['min_a_t_2w'] = df.minimum_atmospheric_temperature.rolling(336, min_periods=1).mean()
    df['min_a_t_ewm'] = df.minimum_atmospheric_temperature.ewm(alpha=0.1, adjust=False).mean()


    df['max_min']           = df.maximum_atmospheric_temperature - df.minimum_atmospheric_temperature
    df['max_min_expanding'] = df.max_min.expanding().mean()
    df['max_min_diff']      = df.max_min - df.max_min.shift(1)
    df['max_min_diff_day']  = df.max_min - df.max_min.shift(24)
    df['max_min_d']         = df.max_min.rolling(24, min_periods=1).mean()



    df['atmospheric_humidity']          = df.atmospheric_humidity.expanding().mean()
    df['atmospheric_humidity_diff']     = df.atmospheric_humidity - df.atmospheric_humidity.shift(1)
    df['atmospheric_humidity_diff_day'] = df.atmospheric_humidity - df.atmospheric_humidity.shift(24)
    df['atmospheric_humidity_d'] = df.atmospheric_humidity.rolling(24, min_periods=1).mean()
    df['atmospheric_humidity_w'] = df.atmospheric_humidity.rolling(168, min_periods=1).mean()
    df['atmospheric_humidity_2w'] = df.atmospheric_humidity.rolling(336, min_periods=1).mean()
    df['atmospheric_humidity_ewm'] = df.atmospheric_humidity.ewm(alpha=0.1, adjust=False).mean()


    df['atmospheric_temperature']          = df.atmospheric_temperature.expanding().mean()
    df['atmospheric_temperature_diff']     = df.atmospheric_temperature - df.atmospheric_temperature.shift(1)
    df['atmospheric_temperature_diff_day'] = df.atmospheric_temperature - df.atmospheric_temperature.shift(24)
    df['atmospheric_temperature_d']        = df.atmospheric_temperature.rolling(24, min_periods=1).mean()
    df['atmospheric_temperature_w']        = df.atmospheric_temperature.rolling(168, min_periods=1).mean()
    df['atmospheric_temperature_2w']       = df.atmospheric_temperature.rolling(336, min_periods=1).mean()
    df['atmospheric_temperature_ewm']      = df.atmospheric_temperature.ewm(alpha=0.1, adjust=False).mean()

    df['den']          = df.density.expanding().mean()
    df['den_diff']     = df.density - df.density.shift(1)
    df['den_diff_day'] = df.density - df.density.shift(24)
    df['den_d']        = df.density.rolling(24, min_periods=1).mean()
    df['den_w']        = df.density.rolling(168, min_periods=1).mean()
    df['den_2w']       = df.density.rolling(336, min_periods=1).mean()
    df['den_ewm']      = df.density.ewm(alpha=0.1, adjust=False).mean()

    df['dew']           = df.dewpoint.expanding().mean()
    df['dew_diff']      = df.dewpoint - df.dewpoint.shift(1)
    df['dew_diff_pow2'] = df.dewpoint - df.dewpoint.shift(24)
    df['dew_d']         = df.dewpoint.rolling(24, min_periods=1).mean()
    df['dew_w']         = df.dewpoint.rolling(168, min_periods=1).mean()
    df['dew_2w']        = df.dewpoint.rolling(336, min_periods=1).mean()
    df['dew_ewm']       = df.dewpoint.ewm(alpha=0.1, adjust=False).mean()

    df['dew_a']          = df.dewpoint_atmospheric.expanding().mean()
    df['dew_a_diff']     = df.dewpoint_atmospheric - df.dewpoint_atmospheric.shift(1)
    df['dew_a_diff_day'] = df.dewpoint_atmospheric - df.dewpoint_atmospheric.shift(24)
    df['dew_a_d']        = df.dewpoint_atmospheric.rolling(24, min_periods=1).mean()
    df['dew_a_w']        = df.dewpoint_atmospheric.rolling(168, min_periods=1).mean()
    df['dew_a_2w']       = df.dewpoint_atmospheric.rolling(336, min_periods=1).mean()
    df['dew_a_ewm']      = df.dewpoint_atmospheric.ewm(alpha=0.1, adjust=False).mean()

    df['g_t']          = df.gas_temperature.expanding().mean()
    df['g_t_diff']     = df.gas_temperature - df.gas_temperature.shift(1)
    df['g_t_diff_day'] = df.gas_temperature - df.gas_temperature.shift(24)
    df['g_t_d']        = df.gas_temperature.rolling(24, min_periods=1).mean()
    df['g_t_w']        = df.gas_temperature.rolling(168, min_periods=1).mean()
    df['g_t_2w']       = df.gas_temperature.rolling(336, min_periods=1).mean()
    df['g_t_6w']       = df.gas_temperature.rolling(1008, min_periods=1).mean()
    df['g_t_ewm']      = df.gas_temperature.ewm(alpha=0.1, adjust=False).mean()

    df['moi']          = df.moisture.expanding().mean()
    df['moi_diff']     = df.moisture - df.moisture.shift(1)
    df['moi_diff_day'] = df.moisture - df.moisture.shift(24)
    df['moi_d']        = df.moisture.rolling(24, min_periods=1).mean()
    df['moi_w']        = df.moisture.rolling(168, min_periods=1).mean()
    df['moi_2w']       = df.moisture.rolling(336, min_periods=1).mean()
    df['moi_ewm']      = df.moisture.ewm(alpha=0.1, adjust=False).mean()

    df['pre_a']           = df.pressure_absolute.expanding().mean()
    df['pre_a_diff']      = df.pressure_absolute - df.pressure_absolute.shift(1)
    df['pre_a_diff_day']  = df.pressure_absolute - df.pressure_absolute.shift(24)
    df['pre_a_ma_day']    = df.pressure_absolute.rolling(24, min_periods=1).mean()
    df['pre_a_ma_w']      = df.pressure_absolute.rolling(168, min_periods=1).mean()
    df['pre_a_ma_2w']     = df.pressure_absolute.rolling(336, min_periods=1).mean()
    df['pre_a_ma_6w']     = df.pressure_absolute.rolling(1008,min_periods=1).mean()
    df['pre_a_ewm']       = df.pressure_absolute.ewm(alpha=0.1, adjust=False).mean()

    df['pre_n']           = df.pressure_normalised.expanding().mean()
    df['pre_n_diff']      = df.pressure_normalised - df.pressure_normalised.shift(1)
    df['pre_n_diff_day']  = df.pressure_normalised - df.pressure_normalised.shift(24)
    df['pre_n_ma_d']      = df.pressure_normalised.rolling(12, min_periods=1).mean()
    df['pre_n_ma_2d']     = df.pressure_normalised.rolling(48, min_periods=1).mean()
    df['pre_n_ma_w']      = df.pressure_normalised.rolling(168, min_periods=1).mean()
    df['pre_n_ma_6w']     = df.pressure_normalised.rolling(1008, min_periods=1).mean()
    df['pre_n_ma_ewm']    = df.pressure_normalised.ewm(alpha=0.1, adjust=False).mean()
    df['ztime'] = pd.to_datetime(df.index).astype('int64')

    numeric_feats = df.dtypes[df.dtypes != 'object'].index
    skewed_feats = df[numeric_feats].apply(lambda x: skew(x)).sort_values(ascending=False)
    high_skew = skewed_feats[abs(skewed_feats) > 0.5]
    for feature in high_skew.index:
        df[feature] = np.log1p(np.abs(df[feature]))

    return df
```

## Machine Learning time series Python pipeline

Now we can wrangle the preprocessed data into sklearn python pipeline that imputes the missing values, scales the columns, provides interaction terms between features and estimates regression models.

Finally, we predict the values and use mean absolute error for each of the three targets and weight the third with the highest coefficient.

```python
imp = SimpleImputer(missing_values=np.nan, strategy='mean')

estimators = [('', RandomForestRegressor(n_estimators=400)),
              ('Boosting', GradientBoostingRegressor(n_estimators=3000)),
              ('ridge', RidgeCV())
             ]
stack_reg = MultiOutputRegressor(StackingRegressor(estimators = estimators, final_estimator = RandomForestRegressor(n_estimators = 300), n_jobs=-1))
stack_reg.estimator.final_estimator_ = stack_reg.estimator.final_estimator

clf = Pipeline(steps=[
                    ('imp', imp),
                    ('poly', PolynomialFeatures(interaction_only=True)),
                    ('', StandardScaler()),
                    ('a', stack_reg),
                    ])
model = clf.fit(X_train, y_train)

y_pred = pd.DataFrame(model.predict(X_test))
start = y.index.min()
end = start + pd.DateOffset(days=30)
start_idx = y.loc[start:end].shape[0]
mae = mean_absolute_error(y_test.iloc[start_idx:], y_pred[start_idx:], multioutput="raw_values")
weights = [0.1, 0.3, 0.6]
np.dot(mae, weights)
```

## References and Related posts

- [Kaggle Notebook](https://www.kaggle.com/pavfedotov/sklearn-pipeline-stacked-regression/)
- [Advanced Realized Volatility and Quarticity](https://dspyt.com/advanced-realized-volatility-and-quarticity)
- [Machine Learning with Simple Sklearn Ensemble](https://dspyt.com/machine-learning-simple-sklearn-ensemble)
- [How to illustrate log returns vs simple returns](https://dspyt.com/simple-returns-log-return-and-volatility-simple-introduction)
- [A How to EfficientNet Classification](https://dspyt.com/efficientnet-classification)
- [Cross-sectional data – An easy introduction](https://dspyt.com/cross-sectional-data-an-easy-introduction)
- [Blockchain Data Indexer with TrueBlocks](https://dspyt.com/blockchain-data-indexer-with-trueblocks)
