---
title: "How to Bypass CAPTCHA in Python: A Complete Guide Using 2Captcha"
date: "23 November, 2022"
excerpt: "Captcha is a test to determine whether or not the user is human. 2Captcha is the best provider of automatic captcha solving software on the market now."
cover_image: "/images/posts/captcha/pexels-christina-morillo-1181263.webp"
authors: ["pavel-fedotov"]
tags:
  [
    "Python",
    "captcha",
    "pip3",
    "data",
    "security",
    "reCaptcha",
    "twocaptcha",
    "API",
    "2Captcha",
    "solving software",
    "2captcha-python",
    "python captcha solver",
    "bypass hcaptcha",
    "bypass captcha python",
  ]
---

You may have already solved a number of captchas while filling out a form or registering for a website. The basic goal of Captcha is to determine whether the user is human or a bot. Captcha is an abbreviation for "Completely Automated Public Turing Test," which is used to distinguish between computers and humans. Companies use captchas to prevent blog spam, access bots, and to make a website more secure.

There are different types of captchas that are used, like reCaptcha (a new type), inverted captchas, word-based captchas, and image-based captchas. A CAPTCHA is a type of challenge-response test used in computing to determine whether or not the user is human.

Sometimes you can easily answer a question on how to bypass captcha; however, others are a source of frustration for users. It may take several minutes to determine whether the letter is uppercase or lowercase. As a result, users nowadays prefer to use captcha solving software. The captcha solving software reads each number or letter on the captcha and automatically enters them into a text box on the web page.

[2Captcha](https://2captcha.com?from=16036084) is among those services that help us with captcha solving software in seconds. Primarily it is a captcha solver service for bypassing challenge-response tests called captchas to determine whether the user is human or not. If you want to quickly find an answer to how to bypass captcha. this is definitely type of software for your website. [2Captcha](https://2captcha.com?from=16036084) is the best provider of automatic captcha solving software on the market now.

## Advantages of 2Captcha

So what makes the [2Captcha](https://2captcha.com?from=16036084) captcha solving software so appealing to its users? The following captcha solver advantages should not be disregarded.

Workers recognize all captchas, which is why 2Captcha can recognize all humanly readable sorts of captchas.

Furthermore, the service recognizes not only text captcha but also any graphical captcha, such as reCAPTCHA V2, Asirra, FunCaptcha, and others. Rates start at $0.001 each captcha and go up from there.

Because the captcha solver is completely automated, you only need to configure the captcha solving software once, and then you can forget about captcha solving and simply return to topping up your balance.

Besides, send any captchas to the captcha solver using the API. [2Captcha](https://2captcha.com?from=16036084) makes it simple for developers to implement any captcha solving software capability. Whether you are a developer or just need to solve captchas from time to time, [2Captcha](https://2captcha.com?from=16036084) provides the tools needed to convert those images into text. 2Captcha is one of the biggest, yet most affordable outsourcing 2Captcha solution provider on the Internet. 2Captcha provides free and highly accurate image to text translation for processing of any captcha.

## How to bypass Captcha in Python with 2Captcha

Since 2Captcha provides cheap and highly accurate translations of captchas, any business can easily utilize this captcha solver by signing up to use the software provided by 2Captcha. To bypass captcha in Python, first, a user has to sign up at [2Captcha](https://2captcha.com?from=16036084) and generate their own private key for use in processing captchas.

First, we navigate to the website and click the yellow "Sign Up" button on the upper right side of the screen.

![2Captcha captcha solver](/images/posts/captcha/captcha.webp)

After this, we can select an option if we want to sign up with a Facebook or Google account or choose the email option, which is to create a 2captcha.com account.

![2Captcha captcha solver sign up](/images/posts/captcha/signup.webp)

Next, we choose the role of the customer on the 2captcha website.

![2Captcha captcha solver role](/images/posts/captcha/role.webp)

The page redirects us to the account page where we obtain the necessary api key.

![2Captcha captcha solver api key](/images/posts/captcha/api_key.webp)

We also add funds for our account to purchase the captcha solving service. The payment options include PayPro Global: Visa, MasterCard, Amex, Wire transfer, USDT/USDC through TRC20, Payments via popular payment methods: PIX, Boleto, Sofort, AliPay, iDeal and Bitcoin.
![2Captcha captcha solver payment options](/images/posts/captcha/payment.webp)

## How to bypass CAPTCHA in python

To begin with, we install the Python library necessary to interact with the 2CAPTHCHA captcha solving software:

```bash
pip3 install 2captcha-python
```

Now we can solve the captcha in Python. We import the installed library and initialize a `TwoCaptcha` instance.

```python
from twocaptcha import TwoCaptcha

PRIVATE_KEY = 'YOUR_API_KEY'
solver = TwoCaptcha(PRIVATE_KEY)
```

Additionally, there are a maximum of 7 arguments that we can pass to the `TwoCaptcha` class as kwargs.

```python
config = {
            'server':           '2captcha.com',
            'apiKey':           'YOUR_API_KEY',
            'softId':            444,
            'callback':         'https://website.app/result-receiver',
            'defaultTimeout':    120,
            'recaptchaTimeout':  600,
            'pollingInterval':   10,
        }
solver = TwoCaptcha(**config)
```

- `Server` argument - API server for the captcha solving software
- `apiKey` argument - your api key
- `softId` argument - your software ID obtained after publishing in [2captcha software catalog](https://2captcha.com?from=16036084software/add)

![2captcha software catalog](/images/posts/captcha/add.webp)

- `callback` argument - web server URL that receives the captcha recognition result
- `defaultTimeout` argument - polling timeout in seconds for all captcha types except ReCaptcha
- `recaptchaTimeout` argument - polling timeout for ReCaptcha in seconds
- `pollingInterval` argument - interval in seconds between requests to the API endpoint (setting values less than 5 seconds is not recommended)

Now we provide examples of captcha solver with [2Captcha](https://2captcha.com?from=16036084). First we demonstrate bypassing hCaptcha:

```python
result = solver.hcaptcha(
    sitekey='3ceb8624-1970-4e6b-91d5-70317b70b651',
    url='https://2captcha.com?from=16036084demo/hcaptcha?difficulty=easy',
)
```

Besides here is an example of solving reCaptcha V3 with [2Captcha](https://2captcha.com?from=16036084):

```python
result = solver.recaptcha(
    sitekey='6LfdxboZAAAAAMtnONIt4DJ8J1t4wMC-kVG02zIO',
    url='https://2captcha.com?from=16036084demo/recaptcha-v3',
    version='v3',
    enterprise=0,
    action='verify',
    score=0.7
)
```

## Conclusion

Captcha is an abbreviation for "Completely Automated Public Turing Test." A CAPTCHA is a type of challenge-response test used in computing to determine whether or not the user is human. Companies use captchas to prevent blog spam, block access bots, and make a website more secure. [2Captcha](https://2captcha.com?from=16036084) is the best provider of automatic captcha solving software on the market now. 2Captcha.com is one of the biggest, yet most affordable, providers of outsourcing captcha solving software on the Internet. The service provides cheap and highly accurate image-to-text translation for the processing of any captchas.

It also makes it simple for developers to implement any captcha solving software capability. To bypass Captcha in Python, a user has to sign up at [2Captcha](https://2captcha.com?from=16036084) and generate their own private key. There are a maximum of 7 arguments that we can pass to the TwoCaptcha object as kwargs. The server argument is the web server URL that receives the captcha recognition result. The pollingInterval argument specifies the interval in seconds between requests to the API endpoint (setting values less than 5 seconds is not recommended).

## Related Posts

- [Ethereum Security Data Collection Ideas](https://dspyt.com/data_collection_ideas)
- [Panel data with python – An easy introduction](https://dspyt.com/panel-data-econometrics-an-introduction-with-an-example-in-python)
- [Blockchain data indexer with TrueBlocks](https://dspyt.com/blockchain-data-indexer-with-trueblocks)
- [What is a blockchain address?](https://dspyt.com/what-is-blockchain-address)
- [Advanced Realized Volatility and Quarticity](https://dspyt.com/advanced-realized-volatility-and-quarticity)
- [Machine Learning with Simple Sklearn Ensemble](https://dspyt.com/machine-learning-simple-sklearn-ensemble)
- [How to illustrate log returns vs simple returns](https://dspyt.com/simple-returns-log-return-and-volatility-simple-introduction)
- [A How to EfficientNet Classification](https://dspyt.com/efficientnet-classification)
- [Cross-sectional data – An easy introduction](https://dspyt.com/cross-sectional-data-an-easy-introduction)
