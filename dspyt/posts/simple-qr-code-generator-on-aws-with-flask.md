---
title: "Simple QR code generator on AWS with Flask"
date: "April 28, 2022"
excerpt: "Web application in Flask python to generate qr code for Casper network. We host the application at on AWS Elasticbean with GitHub pipeline."
cover_image: "https://dspyt.com/images/posts/qr-code/pexels-ron-lach-9784240.webp"
authors: ["pavel-fedotov"]
tags:
  [
    "Python",
    "flask",
    "AWS",
    "QR code",
    "Casper",
    "blockchain",
    "PIL",
    "IO",
    "base64",
    "github",
    "Elasticbean",
    "encoding",
    "http",
    "BytesIO",
    "web app",
    "github pipeline",
    "aws qr code generator",
    "python qr code generator",
    "simple qr codes",
    "qr code generator python",
  ]
---

If you are looking for a fun and easy way to generate QR codes, Python is the perfect language for you. With Python, you can create QR codes in minutes, and you can use them to create fun and interesting things like websites and apps. You can also use Python to create simple QR code generators, which is perfect for creating quick and easy QR codes. All you need to do is input a few basic parameters, and you'll be able to generate a QR code that looks and feels amazing!

In this article we develop web application in Flask python to generate qr code with the help of `qrcode` python library. Next, we host the application on AWS Elastic Beanstalk with GitHub pipeline. Therefore you only need to copy the code and configure AWS pipeline to deploy following application.

[The GitHub repository for flask qr code generator](https://github.com/Pfed-prog/casper_QR).

## Python QR Code AWS App

The necessary condition for a python Flask QR code application to successfully run aws is to initialize the app as following: `application = Flask(__name__)`

```python
import base64
from flask import Flask, render_template, request, send_from_directory
from PIL import Image
from io import BytesIO

import qrcode
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.moduledrawers import RoundedModuleDrawer
from qrcode.image.styles.colormasks import SquareGradiantColorMask

application = Flask(__name__)
app = application

def return_image(image):
    data = BytesIO()
    image.save(data, "PNG")
    encoded_img_data = base64.b64encode(data.getvalue())
    return encoded_img_data

def generate_image(address:str='', amount=0, message:str='', transaction:str='', network:str='casper'):

    QRcode = qrcode.QRCode(
        error_correction=qrcode.constants.ERROR_CORRECT_H, box_size=8, version=1,
    )

    # taking url or text
    if network =='casper':
        url = f"{network}:{address}?amount={amount}&message={message}&transfer_id={transaction}"
    else:
        url = f"{network}?recipient={address}&amount={amount}&transfer_id={transaction}"
    # adding URL or text to QRcode
    QRcode.add_data(url)

    # generating QR code
    QRcode.make(fit=True)

    # get the logo and resize it
    Logo_link = './static/logo3.png'
    # taking base width
    basewidth = 100
    logo = Image.open(Logo_link)
    # adjust image size
    wpercent = (basewidth/float(logo.size[0]))
    hsize = int((float(logo.size[1])*float(wpercent)))
    logo = logo.resize((basewidth, hsize), Image.ANTIALIAS)

    # adding color to QR code
    QRimg = QRcode.make_image(
        back_color="white",\
        image_factory=StyledPilImage,\
        module_drawer=RoundedModuleDrawer(),\
        #color_mask=SquareGradiantColorMask()\
    ).convert('RGB')

    # position the logo
    pos = ((QRimg.size[0] - logo.size[0]) // 2,
            (QRimg.size[1] - logo.size[1]) // 2)
    QRimg.paste(logo,pos)# put QRimg.paste(logo,pos,log) to make the logo fully transparent

    # set size of QR code
    return QRimg.resize((400, 400), Image.ANTIALIAS)

@app.route("/", methods=["GET","POST"])
def home():
    if request.method == "POST":
        data = [x for x in request.form.values()]
        image = generate_image(data[0], data[1], data[2], data[3], data[4])

    else:
        image = generate_image()

    image.save('./static/output.png')
    img_data = return_image(image)
    return render_template("home.html", img_data = img_data.decode('utf-8'), mth=request.method)

@app.route("/img", methods=["GET"])
def send():
    return send_from_directory(directory='./static/',path='output.png',as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True)
```

### Python QR Code Flask explanation

The given snippet is a Python Flask application that generates a QR code for cryptocurrency transactions. Let's break down the key components and functionalities:

**Flask Web Application**: The code initializes a Flask web application that serves as the framework for handling HTTP requests and responses.

**QR Code Generation**: The application uses the 'qrcode' library to dynamically generate a QR code based on the user's input. The code takes into account the recipient's address, transaction amount, message, transaction ID, and cryptocurrency network.

**Image Handling**: The 'PIL' (Python Imaging Library) is used to handle image-related operations, such as creating and manipulating the QR code image.

**Styling and Customization**: The QR code is styled and customized using the 'qrcode.image.styledpil' module, implementing rounded module drawers and color masks to enhance its visual appearance.

**Web Routes and Templates**: Two routes ('/', '/img') are defined for handling requests. A template ('home.html') is rendered to display the generated QR code.

**File Handling**: The application saves the generated QR code image to a static directory and provides it for download when requested.

Overall, this snippet demonstrates the use of Flask, qrcode, PIL, and web routing to create a web application that dynamically generates customized QR codes for cryptocurrency transactions.

## Related Posts

- [How to Panel data python – An easy introduction](https://dspyt.com/panel-data-econometrics-an-introduction-with-an-example-in-python)
- [Simple Ceramic Data Model App and Unstoppable Domains](https://dspyt.com/simple-app-with-ceramic-data-model-and-unstoppable-domains)
- [Simple QR code generator on AWS with Flask](https://dspyt.com/simple-qr-code-generator-on-aws-with-flask)
- [How to implement asyncio python tutorial](https://dspyt.com/simple-asynchronous-python-webscraper-tutorial)
- [How to generate parsiq wallet triggers for CryptoPunks](https://dspyt.com/generating-fast-and-easy-parsiq-triggers-for-cryptopunks)
- [How to Python jail escape (Newbie CTF 2019)](https://dspyt.com/how-to-python-jail-escape-newbie-ctf-2019)
- [How to python check proxy with aiohttp](https://dspyt.com/easy-proxy-scraper-and-proxy-usage-in-python)
