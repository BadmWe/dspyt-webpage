---
title: "Simple QR code generator on AWS with Flask"
date: "April 28, 2022"
excerpt: "We developed web application in python Flask that generates QR code for Casper network. We host the application at on AWS Elasticbean with GitHub pipeline."
cover_image: "/images/posts/qr code/pexels-ron-lach-9784240.jpg"
time_read: "5 min"
---

We developed web application in python Flask that generates QR code with the help of qrcode python library. We hosted the application on AWS Elastic Beanstalk with GitHub pipeline. Therefore you onyl need to copy the code and configure AWS pipeline to deploy following application.

[The GitHub repository for the project](https://github.com/Pfed-prog/casper_QR).

<iframe src="https://www.youtube.com/embed/xKFY1vxrMeU?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Python QR Code AWS App

The necessary condition for a Flask QR code application to run aws is initialize application = Flask(\_\_name\_\_)

<script src="https://emgithub.com/embed.js?target=https://github.com/Pfed-prog/casper_QR/blob/main/application.py&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on"></script>
