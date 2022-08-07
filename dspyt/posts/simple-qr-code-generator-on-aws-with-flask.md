---
title: "Simple QR code generator on AWS with Flask"
date: "April 28, 2021"
excerpt: ""
cover_image: "/images/posts/qr code/pexels-ron-lach-9784240.jpg"
time_read: "5 min"
---

We developed web application in python Flask that generates QR code with the help of qrcode python library. We hosted the application on AWS Elastic Beanstalk with GitHub pipeline. Therefore you onyl need to copy the code and configure AWS pipeline to deploy following application.

[The GitHub repository for the project](https://github.com/Pfed-prog/casper_QR).

<iframe width="560" height="315" src="https://www.youtube.com/embed/xKFY1vxrMeU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Python QR Code AWS App

The necessary condition for a Flask QR code application to run aws is initialize application = Flask(\_\_name\_\_)

<script src="https://emgithub.com/embed.js?target=https://github.com/Pfed-prog/casper_QR/blob/main/application.py&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on"></script>
