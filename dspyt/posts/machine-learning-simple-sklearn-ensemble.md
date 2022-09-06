---
title: "Simple sklearn ensemble machine learning"
date: "April 1, 2021"
excerpt: "A write up on sklearn ensemble pipeline for multiple target columns using libraries such as numpy, pandas and sklearn."
cover_image: "/images/posts/ensemble/1_IHNY-j3mp00H_i6gb5DA-w.png"
time_read: "5 min"
---

This post is a write up on sklearn ensemble pipeline for multiple target columns using traditional and established libraries such as numpy, pandas, scipy and sklearn.
This post further extends [article on sklearn pipeline for time-series data](https://dspyt.com/machine-learning-time-series-temperature-data-modeling).

Some of the ideas for this post came from researching for machine learning competition Sound the Alarm 2 for Australian based platform Unearthed, where Dspyt team took 10th place on a private leader-board. The company is very strict about the data and code that they provided. You can try the platform in Evergreen Challenges.

![Simple sklearn ensemble machine learning Dspyt](/images/posts/ensemble/image-3.png)

## Loading Libraries

First we need to load libraries, but our choice is limited to only well-established python libraries such as pandas, numpy and sklearn.

<iframe src="https://www.kaggle.com/embed/pavfedotov/decision-tree-ensemble?cellIds=3&kernelSessionId=72403096" height="300" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Decision Tree Ensemble"></iframe>

## Loading data and hard code the tags

Next, in this example we have a single set of targets and input dataframes. In addition, we explicitly include the names of inputs and target columns under the variables input_tags and target_tags, respectively

<iframe src="https://www.kaggle.com/embed/pavfedotov/decision-tree-ensemble?cellIds=4&kernelSessionId=72403096" height="300" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Decision Tree Ensemble"></iframe>

## Preprocessing and separating data into train and test

The preprocessing function aggregates unstructured data into time periods and tags.

<iframe src="https://www.kaggle.com/embed/pavfedotov/decision-tree-ensemble?cellIds=8&kernelSessionId=72403096" height="300" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Decision Tree Ensemble"></iframe>

In this article the data has a significant reliance on the temporal dimension, therefore it is not the best practice to split data randomly into test and train. Hence, we put 80% of the first observations into train and 20% of the latest observations into a test data split.

<iframe src="https://www.kaggle.com/embed/pavfedotov/decision-tree-ensemble?cellIds=10&kernelSessionId=72403096" height="300" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Decision Tree Ensemble"></iframe>

## sklearn ensemble model

To predict the labels for three columns we create an ensemble class that fits a separate decision tree model and combines individual predictions.

<iframe src="https://www.kaggle.com/embed/pavfedotov/decision-tree-ensemble?cellIds=9&kernelSessionId=72403096" height="300" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Decision Tree Ensemble"></iframe>

## Predict and score the predictions

In this section we initialize the ensemble model and fit each individual model to estimate predictions.

<iframe src="https://www.kaggle.com/embed/pavfedotov/decision-tree-ensemble?cellIds=11-12&kernelSessionId=72403096" height="500" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Decision Tree Ensemble"></iframe>

Moreover, we also build a scoring function that penalizes inaccurate predictions.

<iframe src="https://www.kaggle.com/embed/pavfedotov/decision-tree-ensemble?cellIds=13-15&kernelSessionId=72403096" height="500" style="margin: 0 auto; width: 100%; max-width: 950px;" frameborder="0" scrolling="auto" title="Decision Tree Ensemble"></iframe>

## Summary

In this example we demonstrated how to combine machine learning functions into a pipeline. We used preprocessing function that cleans and aggregates data. Besides, we built sklearn ensemble model that fits individual models for three targets and predicts all the labels. Finally, we scored the predictions with the help of custom scoring function.

The areas for improvement are adding more features and improving the prediction models. Furthermore, we could use GridSearch and K-Folds cross-validator to estimate the necessary features and hyper parameters.

[Kaggle notebook](https://www.kaggle.com/pavfedotov/decision-tree-ensemble/)
