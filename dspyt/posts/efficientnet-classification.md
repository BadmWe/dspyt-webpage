---
title: "A How to EfficientNet Classification"
date: "April 29, 2022"
excerpt: "We discuss Convolutional Neural Networks, data augmentation, efficientnet classification and how to achieve 100% accuracy."
cover_image: "/images/posts/efficientnet/pexels-medhat-ayad-383568.jpg"
time_read: "5 min"
---

Humans unlike computers make sense of what we see based on our experiences, memories and biological structure. Human brain extracts and analyses humongous volumes of data using visual cues. To understand the true effect of sight, 40% of our nerve fibers are linked to the retina, and 90% of information transmitted to the brain is visual. In fact, research at 3M Corporation concluded that we process visuals 60,000 times faster than text.

![EfficientNet Keras](/images/posts/efficientnet/pexels-pixabay-35550-2.jpg)

## Computer Vision Tasks with efficientnet classification

To begin with, image classification is a fundamental task that assesses an entire image. The goal is to classify the image by assigning it to a specific label. Typically, image classification refers to images in which only one object appears and a computer analyses. Besides, object detection involves both classification and localization tasks, and analyses more realistic cases in which multiple objects may exist in an image. In general, there are two methods of classification: supervised and unsupervised.

Furthermore, the more advanced task of separating pixels in an image to a particular object or class requires computer vision techniques and methods. Data scientists and computer vision specialists refer to such task as a semantic segmentation or a dense prediction. Semantic segmentation is particularly a popular term in autonomous vehicles such as cars, drones and planes, in addition to medical image diagnosis. An example of Deep Learning based Semantic Segmentation | Keras on Kaggle.

![Computer Vision Tasks with efficientnet classification](/images/posts/efficientnet/image.png)

In this post we will discuss Convolutional Neural Networks, data augmentation, EfficientNet and how to achieve nearly 100% accuracy on a classification of several classes of images potentially across multiple datasets.

## Convolutional Neural Networks

Convolutional Neural Networks (CNNs) is the most popular neural network for image classification. Comparing to a fully connected neural network, fewer parameters in CNN greatly improves the training time as well as reduces the amount of sufficient data. Instead of a fully connected network of weights from each pixel, a CNN can process a small patch of the image for a prediction.

Consider an image, a CNN can efficiently scan it chunk by chunk — for instance, a 5 × 5 window. The 5 × 5 window slides along the image (usually left to right, and top to bottom). How quickly it slides is called its stride length. For example, a stride length of 2 means the 5 × 5 sliding window moves by 2 pixels at a time until it covers the entire image.

A convolution is a weighted sum of the pixel values of the image, as the window slides across the whole image. Turns out, this convolution process throughout an image with a weight matrix produces another image.

The sliding-window operations occur in the convolution layer of the neural network. In general, a CNN has multiple convolution layers. Each convolutional layer typically generates many alternate convolutions, so the weight matrix is a tensor of 5 × 5 × n, where n is the number of convolutions.

As an example, let’s say an image goes through a convolution layer on a weight matrix of 5 × 5 × 64. It generates 64 convolutions by sliding a 5 × 5 window. Therefore, this model has 5 × 5 × 64 = 1,600 parameters, which is remarkably fewer parameters than a fully connected network: 256 × 256 = 65,536.

More often than not image classification datasets are significant in size. Nevertheless, we use data augmentation in order to further generalize the model. <a href="https://www.tensorflow.org/tutorials/images/data_augmentation">Data augmentation</a> takes the approach of generating additional training data from your existing examples by augmenting them using random transformations that yield similar-looking images. This exposes the model to more aspects of the data and prevents over-fitting.

According to documentation of [Tensorflow](https://www.tensorflow.org/tutorials/images/classification#data_augmentation), we can combine the data augmentation, rescalling and the CNN model in this manner:

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">model <span style="color: #666666">=</span> Sequential([
  data_augmentation,
  layers<span style="color: #666666">.</span>experimental<span style="color: #666666">.</span>preprocessing<span style="color: #666666">.</span>Rescaling(<span style="color: #40a070">1.</span><span style="color: #666666">/</span><span style="color: #40a070">255</span>),
  layers<span style="color: #666666">.</span>Conv2D(<span style="color: #40a070">16</span>, <span style="color: #40a070">3</span>, padding<span style="color: #666666">=</span><span style="color: #4070a0">&#39;same&#39;</span>, activation<span style="color: #666666">=</span><span style="color: #4070a0">&#39;relu&#39;</span>),
  layers<span style="color: #666666">.</span>MaxPooling2D(),
  layers<span style="color: #666666">.</span>Conv2D(<span style="color: #40a070">32</span>, <span style="color: #40a070">3</span>, padding<span style="color: #666666">=</span><span style="color: #4070a0">&#39;same&#39;</span>, activation<span style="color: #666666">=</span><span style="color: #4070a0">&#39;relu&#39;</span>),
  layers<span style="color: #666666">.</span>MaxPooling2D(),
  layers<span style="color: #666666">.</span>Conv2D(<span style="color: #40a070">64</span>, <span style="color: #40a070">3</span>, padding<span style="color: #666666">=</span><span style="color: #4070a0">&#39;same&#39;</span>, activation<span style="color: #666666">=</span><span style="color: #4070a0">&#39;relu&#39;</span>),
  layers<span style="color: #666666">.</span>MaxPooling2D(),
  layers<span style="color: #666666">.</span>Dropout(<span style="color: #40a070">0.2</span>),
  layers<span style="color: #666666">.</span>Flatten(),
  layers<span style="color: #666666">.</span>Dense(<span style="color: #40a070">128</span>, activation<span style="color: #666666">=</span><span style="color: #4070a0">&#39;relu&#39;</span>),
  layers<span style="color: #666666">.</span>Dense(num_classes)
])
</pre></div>

## Data Augmentation Pipeline for efficientnet classification

In general, we can also divide the process of image augmentation into four steps regardless of the neural network architecture:

1. Import libraries and images.
2. Define an augmentation pipeline.
3. Read images.
4. Pass images to the augmentation pipeline and receive augmented images.

For reading images from disk and resizing we can use OpenCV. Meanwhile for data augmentation [Albumentations](https://albumentations.ai/docs/) is a fast and flexible library compatible with different neural networks.

An example of data augmentation in Albumentations: horizontal flips with probability of 50%, rotation by a random angle in range from 0 to 15 degrees with 50% probability; either sharpens the input image with 50%/3=16.67%, or embosses the image with 16.67%, or randomly changes brightness and contrast 16.67%; cut outs 5 holes in 50% of instances.

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">def</span> <span style="color: #06287e">augment_image</span>(image):
    aug <span style="color: #666666">=</span> A<span style="color: #666666">.</span>Compose([
        A<span style="color: #666666">.</span>HorizontalFlip(p<span style="color: #666666">=</span><span style="color: #40a070">0.5</span>),
        A<span style="color: #666666">.</span>Rotate(limit<span style="color: #666666">=</span>[<span style="color: #40a070">0</span>, <span style="color: #40a070">15</span>], p<span style="color: #666666">=</span><span style="color: #40a070">0.5</span>),
        A<span style="color: #666666">.</span>OneOf([
            A<span style="color: #666666">.</span>IAASharpen(),
            A<span style="color: #666666">.</span>IAAEmboss(),
            A<span style="color: #666666">.</span>RandomBrightnessContrast(),
        ], p<span style="color: #666666">=</span><span style="color: #40a070">0.5</span>),
        A<span style="color: #666666">.</span>Cutout(num_holes<span style="color: #666666">=</span><span style="color: #40a070">5</span>, max_h_size<span style="color: #666666">=</span><span style="color: #40a070">20</span>, max_w_size<span style="color: #666666">=</span><span style="color: #40a070">20</span>, fill_value<span style="color: #666666">=</span><span style="color: #40a070">0</span>, always_apply<span style="color: #666666">=</span><span style="color: #007020; font-weight: bold">False</span>, p<span style="color: #666666">=</span><span style="color: #40a070">0.5</span>)
    ])
    augmented <span style="color: #666666">=</span> aug(image<span style="color: #666666">=</span>image)
    <span style="color: #007020; font-weight: bold">return</span> augmented[<span style="color: #4070a0">&#39;image&#39;</span>]

</pre></div>

The following class reads images, resizes, augments the images and passes the batch size to our neural network.

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">class</span> <span style="color: #0e84b5; font-weight: bold">CustomDataGen</span>(tf<span style="color: #666666">.</span>keras<span style="color: #666666">.</span>utils<span style="color: #666666">.</span>Sequence):
    <span style="color: #007020; font-weight: bold">def</span> <span style="color: #06287e">__init__</span>(<span style="color: #007020">self</span>, df,
                 augment<span style="color: #666666">=</span><span style="color: #007020; font-weight: bold">True</span>,
                 batch_size<span style="color: #666666">=</span><span style="color: #40a070">8</span>,
                 input_shape<span style="color: #666666">=</span>(<span style="color: #40a070">224</span>, <span style="color: #40a070">224</span>, <span style="color: #40a070">3</span>),
                 shuffle<span style="color: #666666">=</span><span style="color: #007020; font-weight: bold">True</span>):        
        <span style="color: #007020">self</span><span style="color: #666666">.</span>paths <span style="color: #666666">=</span> df<span style="color: #666666">.</span>path<span style="color: #666666">.</span>values
        <span style="color: #007020">self</span><span style="color: #666666">.</span>labels <span style="color: #666666">=</span> df<span style="color: #666666">.</span>target<span style="color: #666666">.</span>values
        <span style="color: #007020">self</span><span style="color: #666666">.</span>augment <span style="color: #666666">=</span> augment
        <span style="color: #007020">self</span><span style="color: #666666">.</span>batch_size <span style="color: #666666">=</span> batch_size
        <span style="color: #007020">self</span><span style="color: #666666">.</span>input_shape <span style="color: #666666">=</span> input_shape
        <span style="color: #007020">self</span><span style="color: #666666">.</span>shuffle <span style="color: #666666">=</span> shuffle
        <span style="color: #007020">self</span><span style="color: #666666">.</span>n <span style="color: #666666">=</span> <span style="color: #007020">len</span>(<span style="color: #007020">self</span><span style="color: #666666">.</span>paths)
        <span style="color: #007020">self</span><span style="color: #666666">.</span>on_epoch_end()
    <span style="color: #007020; font-weight: bold">def</span> <span style="color: #06287e">on_epoch_end</span>(<span style="color: #007020">self</span>): 
        <span style="color: #007020">self</span><span style="color: #666666">.</span>indexes <span style="color: #666666">=</span> np<span style="color: #666666">.</span>arange(<span style="color: #007020">len</span>(<span style="color: #007020">self</span><span style="color: #666666">.</span>paths))
        <span style="color: #007020; font-weight: bold">if</span> <span style="color: #007020">self</span><span style="color: #666666">.</span>shuffle <span style="color: #666666">==</span> <span style="color: #007020; font-weight: bold">True</span>:
            np<span style="color: #666666">.</span>random<span style="color: #666666">.</span>shuffle(<span style="color: #007020">self</span><span style="color: #666666">.</span>indexes)
    <span style="color: #007020; font-weight: bold">def</span> <span style="color: #06287e">__load_data</span>(<span style="color: #007020">self</span>, paths, labels):
        X_batch <span style="color: #666666">=</span> []
        y_batch <span style="color: #666666">=</span> []
        <span style="color: #007020; font-weight: bold">for</span> path, label <span style="color: #007020; font-weight: bold">in</span> <span style="color: #007020">zip</span>(paths, labels):
            X <span style="color: #666666">=</span> cv2<span style="color: #666666">.</span>imread(path)<span style="color: #666666">.</span>copy()
            X <span style="color: #666666">=</span> cv2<span style="color: #666666">.</span>cvtColor(X, cv2<span style="color: #666666">.</span>COLOR_BGR2RGB)
            X <span style="color: #666666">=</span> cv2<span style="color: #666666">.</span>resize(X, (<span style="color: #007020">self</span><span style="color: #666666">.</span>input_shape[<span style="color: #40a070">0</span>], <span style="color: #007020">self</span><span style="color: #666666">.</span>input_shape[<span style="color: #40a070">1</span>]))
            <span style="color: #007020; font-weight: bold">if</span> <span style="color: #007020">self</span><span style="color: #666666">.</span>augment:
                X <span style="color: #666666">=</span> augment_image(X)
            X_batch<span style="color: #666666">.</span>append(X <span style="color: #666666">/</span> <span style="color: #40a070">255.</span>)
            y <span style="color: #666666">=</span> np<span style="color: #666666">.</span>zeros((<span style="color: #40a070">5</span>))
            y[label] <span style="color: #666666">=</span> <span style="color: #40a070">1</span>
            y_batch<span style="color: #666666">.</span>append(y)    
        <span style="color: #007020; font-weight: bold">return</span> np<span style="color: #666666">.</span>array(X_batch, dtype<span style="color: #666666">=</span><span style="color: #007020">float</span>), np<span style="color: #666666">.</span>array(y_batch, dtype<span style="color: #666666">=</span><span style="color: #007020">float</span>)
    <span style="color: #007020; font-weight: bold">def</span> <span style="color: #06287e">__getitem__</span>(<span style="color: #007020">self</span>, index):
        indexes <span style="color: #666666">=</span> <span style="color: #007020">self</span><span style="color: #666666">.</span>indexes[index<span style="color: #666666">*</span><span style="color: #007020">self</span><span style="color: #666666">.</span>batch_size:(index<span style="color: #666666">+</span><span style="color: #40a070">1</span>)<span style="color: #666666">*</span><span style="color: #007020">self</span><span style="color: #666666">.</span>batch_size]
        X, y <span style="color: #666666">=</span> <span style="color: #007020">self</span><span style="color: #666666">.</span>__load_data([<span style="color: #007020">self</span><span style="color: #666666">.</span>paths[i] <span style="color: #007020; font-weight: bold">for</span> i <span style="color: #007020; font-weight: bold">in</span> indexes],
                                [<span style="color: #007020">self</span><span style="color: #666666">.</span>labels[i] <span style="color: #007020; font-weight: bold">for</span> i <span style="color: #007020; font-weight: bold">in</span> indexes])        
        <span style="color: #007020; font-weight: bold">return</span> X, y
    <span style="color: #007020; font-weight: bold">def</span> <span style="color: #06287e">__len__</span>(<span style="color: #007020">self</span>):
        <span style="color: #007020; font-weight: bold">return</span> <span style="color: #007020">int</span>(np<span style="color: #666666">.</span>floor(<span style="color: #007020">len</span>(<span style="color: #007020">self</span><span style="color: #666666">.</span>paths) <span style="color: #666666">/</span> <span style="color: #007020">self</span><span style="color: #666666">.</span>batch_size))
</pre></div>

## Efficientnet classification

EfficientNets are state of the art convolutional neural networks that Google Brain released open source. A family of image classification models achieve state-of-the-art accuracy, yet are an order-of-magnitude smaller and faster than previous models such as [ResNet-152](https://arxiv.org/abs/1512.03385) and [ResNet-50](https://arxiv.org/abs/1512.03385).

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">def</span> <span style="color: #06287e">create_model</span>(input_shape<span style="color: #666666">=</span>(<span style="color: #40a070">224</span>, <span style="color: #40a070">224</span>, <span style="color: #40a070">3</span>)):
    inputs <span style="color: #666666">=</span> Input(input_shape)
    base_model <span style="color: #666666">=</span> EfficientNetB1(input_shape<span style="color: #666666">=</span>input_shape, include_top<span style="color: #666666">=</span><span style="color: #007020; font-weight: bold">False</span>, classes<span style="color: #666666">=</span><span style="color: #40a070">5</span>)
    x <span style="color: #666666">=</span> base_model(inputs)
    x <span style="color: #666666">=</span> GlobalAveragePooling2D()(x)
    x <span style="color: #666666">=</span> Dense(<span style="color: #40a070">256</span>, activation<span style="color: #666666">=</span><span style="color: #4070a0">&#39;relu&#39;</span>)(x)
    x <span style="color: #666666">=</span> Dropout(<span style="color: #40a070">0.1</span>)(x)
    outputs <span style="color: #666666">=</span> Dense(<span style="color: #40a070">5</span>, activation<span style="color: #666666">=</span><span style="color: #4070a0">&#39;softmax&#39;</span>)(x)
    model <span style="color: #666666">=</span> Model(inputs, outputs)
    <span style="color: #007020; font-weight: bold">return</span> model

model <span style="color: #666666">=</span> create_model((<span style="color: #40a070">224</span>, <span style="color: #40a070">224</span>, <span style="color: #40a070">3</span>))
metrics <span style="color: #666666">=</span> [
<span style="color: #4070a0">&#39;accuracy&#39;</span>,
<span style="color: #4070a0">&#39;AUC&#39;</span>
]

model<span style="color: #666666">.</span>compile(optimizer<span style="color: #666666">=</span>Adam(), loss<span style="color: #666666">=</span><span style="color: #4070a0">&#39;categorical_crossentropy&#39;</span>, metrics<span style="color: #666666">=</span>metrics)
model<span style="color: #666666">.</span>summary()

</pre></div>

## Combining the functions and classes

Finally, we combine the augmentation pipeline, the data generator and our model to estimate the class of the image. On the fourth epoch the model reaches 100%. On the withheld dataset the model generated comparable 99.6%.

![EfficientNet Ketas training results](/images/posts/efficientnet/image-1-1024x344.png)

## References and Useful Links

Would really like to thank the person who wrote the
<a href="https://github.com/kineticmarginal/TargetClassification/blob/main/main.ipynb" target="_blank" rel="noreferrer noopener">entire script</a> Daniil Stepanov: <a href="https://t.me/kineticmarginal" target="_blank" rel="noreferrer noopener">telegram</a> and <a href="https://github.com/kineticmarginal" target="_blank" rel="noreferrer noopener">GitHub</a>.

- Jeremy Jordan. 2018. An overview of semantic image segmentation.</em>. [online] Available at: <a href="https://www.jeremyjordan.me/semantic-segmentation/" target="_blank" rel="noreferrer noopener">https://www.jeremyjordan.me/semantic-segmentation/</a> [Accessed 1 September 2021].</li>

- Le, J., 2018. <em>The 4 Convolutional Neural Network Models That Can Classify Your Fashion Images</em>. [online] Medium. Available at: <a href="https://towardsdatascience.com/the-4-convolutional-neural-network-models-that-can-classify-your-fashion-images-9fe7f3e5399d" target="_blank" rel="noreferrer noopener">https://towardsdatascience.com/the-4-convolutional-neural-network-models-that-can-classify-your-fashion-images-9fe7f3e5399d</a> [Accessed 1 September 2021].</li>

- Tan, M. and Le, Q., 2020. <em>EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks</em>. [arXiv.org](https://arxiv.org/abs/1905.11946v5)

- [EfficientNet on Github](https://github.com/tensorflow/tpu/tree/master/models/official/efficientnet)
- [Papers with Code Image Classification](https://paperswithcode.com/task/image-classification)
- [Studies Confirm the Power of Visuals to Engage Your Audience in eLearning](https://www.shiftelearning.com/blog/bid/350326/studies-confirm-the-power-of-visuals-in-elearning)
- [TensorFlow data augmentation](https://www.tensorflow.org/tutorials/images/classification#data_augmentation)
