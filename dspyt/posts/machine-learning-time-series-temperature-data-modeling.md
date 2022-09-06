---
title: "Machine Learning time series python"
date: "April 25, 2022"
excerpt: "Sklearn pipeline with multiple regression models using traditional and established libraries like numpy, pandas, scipy and sklearn."
cover_image: "/images/posts/temperature/pexels-tom-fisk-6060188-scaled-e1629300731444.jpg"
time_read: "5 min"
---

This post is a write up on machine learning time series python using traditional and established libraries like numpy, pandas, scipy and sklearn. In this post we are making a model for time-series data which we introduced in article [Kaggle time series data – An easy introduction](https://dspyt.com/time-series-data-an-easy-introduction).

We base the post om our experience gained in machine learning competition [Pressure predictor](https://unearthed.solutions/u/competitions/pressure-predictor) for Australian based platform Unearthed,dspyt team took 11th place out of 55 competitors on a private leaderboard. The company is very strict about the data and code that they provided. You can try the platform in Evergreen Challenges: [Exploration Data Science](https://unearthed.solutions/u/competitions/evergreen/exploration-data-science) and [HYDROSAVER](https://unearthed.solutions/u/competitions/evergreen/hydrosaver).

![Dspyt team Machine Learning Leaderbord](/images/posts/temperature/score.jpg)

## Loading Libraries

To begin with, due to the nature of aws sagemaker pipeline created by the host of compeititon our choice of libraries is quite limieted.

Hence, we primarily go in depth with our available options: pandas, numpy, scipy and sklearn.

<iframe src="https://www.kaggle.com/embed/pavfedotov/sklearn-pipeline-stacked-regression?cellIds=1&kernelSessionId=102921196" height="300" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Sklearn Pipeline stacked regression"></iframe>

## Loading and separating data into train and test

After we successfully import libraries we can load the data and separate it into test and train. We have multiple target columns

<iframe src="https://www.kaggle.com/embed/pavfedotov/sklearn-pipeline-stacked-regression?cellIds=2&kernelSessionId=102921196" height="300" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Sklearn Pipeline stacked regression"></iframe>

## Preprocessing

Furthermore, we create features and transform the data which we will feed into regression models. For each column that is numeric we create expanding mean, rolling means for various periods ranging from a day to 6 weeks. We also difference the values for stationarity and square differenced values to find a signal.

Besides, we transform a date column to numerical one in pandas by using <code>pd.to_datetime(df.index).astype(int)</code>.

Finally, we eliminate excessively skewed numeric features by using log transformation. We could also try box-cox transformation that is available in scipy library. But for this project we use only log(1+x) transformation.

<iframe src="https://www.kaggle.com/embed/pavfedotov/sklearn-pipeline-stacked-regression?cellIds=3&kernelSessionId=102921196" height="300" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Sklearn Pipeline stacked regression"></iframe>

## Machine Learning time series python Pipeline

Now we can navigate the preprocessed data into sklearn pipeline that imputes the missing values, scales the columns, provides interaction terms between features and estimates regression models.

Finally we predict the values and use mean absolute error for each of the three targets and weight the third with the highest coefficient.

<iframe src="https://www.kaggle.com/embed/pavfedotov/sklearn-pipeline-stacked-regression?cellIds=4&kernelSessionId=102921196" height="300" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Sklearn Pipeline stacked regression"></iframe>

[Kaggle Notebook](Notebook on Kaggle: https://www.kaggle.com/pavfedotov/sklearn-pipeline-stacked-regression/)
