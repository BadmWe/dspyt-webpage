---
title: "Simple and easy heroku telegram bot in Python"
date: "May 3, 2022"
excerpt: "We create a heroku python telegram bot from scratch. We utilize python telebot library and host the project on Heroku."
cover_image: "https://dspyt.com/images/posts/telegrambot/pexels-cottonbro-5077039-1-e1629301426265.webp"
authors: ["pavel-fedotov"]
tags:
  [
    "Python",
    "Python telebot",
    "telegram",
    "bot",
    "heroku",
    "api",
    "github",
    "telebot",
    "pip",
    "API",
    "virtualenv",
    "BotFather",
  ]
---

A Python Telegram Bot is a simple, easy-to-use tool that allows you to send and receive messages through the Telegram app.
In this article we create telegram bot which is a chatbot that uses the Telegram protocol to communicate with users.
It can be used to send and receive messages, as well as to manage channels and users. Further we host python telegram on Heroku.

## Python Virtual Environment

First, we need to save python dependencies to host the telegram python bot on Heroku. In this tutorial related to hosting python telegram bot on heroku, we use the python virtual environment library `virtualenv`. We install the python `virtualenv` library with PIP:

```bash
pip install virtualenv
```

Next, we create the python virtual environment and activate with the following commands:

```bash
virtualenv project
source project/Scripts/activate
```

To save the dependencies for the server such as Heroku, we run the following python command:

```bash
pip freeze > requirements.txt
```

In case we want to exit the python virtual environment:

```bash
deactivate
```

## Heroku python telegram optimizing

To create a bot we have to message @BotFather in telegram. The command that creates a bot is `/newbot` and you have to also name the bot. After that BotFather sends us the HTTP API TOKEN.

![python telegram bot creation: Data Science with Python](https://dspyt.com/images/posts/telegrambot/image-7.webp)

## Python telegram bot

First, we install the key python telegram bot library which is `python-telegram-bot`:

```bash
pip install python-telegram-bot
```

Next, we create a simple python telegram bot that uses `/start` and `/help` commands as well as echoes the user’s message. The script also uses a web hook for Heroku hosting:

```python
import logging
import os
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters

# Enable logging
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    level=logging.INFO)

logger = logging.getLogger(__name__)

PORT = int(os.environ.get('PORT', '8443'))

# Define a few command handlers. These usually take the two arguments update and
# context. Error handlers also receive the raised TelegramError object in error.
def start(update, context):
    """Send a message when the command /start is issued."""
    update.message.reply_text('Hi!')


def help(update, context):
    """Send a message when the command /help is issued."""
    update.message.reply_text('Help!')


def echo(update, context):
    """Echo the user message."""
    update.message.reply_text(update.message.text)


def error(update, context):
    """Log Errors caused by Updates."""
    logger.warning('Update "%s" caused error "%s"', update, context.error)


def main():
    """Start the bot."""
    # Create the Updater and pass it your bot's token.
    # Make sure to set use_context=True to use the new context based callbacks
    # Post version 12 this will no longer be necessary
    TOKEN = ''
    APP_NAME='https://app-name.herokuapp.com/'

    updater = Updater(TOKEN, use_context=True)

    # Get the dispatcher to register handlers
    dp = updater.dispatcher

    # on different commands - answer in Telegram
    dp.add_handler(CommandHandler("start", start))
    dp.add_handler(CommandHandler("help", help))

    # on noncommand i.e message - echo the message on Telegram
    dp.add_handler(MessageHandler(Filters.text, echo))

    # log all errors
    dp.add_error_handler(error)
    updater.start_webhook(listen="0.0.0.0",port=PORT,url_path=TOKEN,webhook_url=APP_NAME + TOKEN)
    updater.idle()


if __name__ == '__main__':
    main()
```

Do not forget to edit the created `TOKEN` and `APP_NAME` that you obtain through Heroku.

## Deploying Heroku python telegram bot

Besides, we create a Procfile that contains the following line:

`web: python3 bot.py`

Our folder should contain three files: `Procfile`, the python script (in this case `bot.py`), and `requirements.txt`.

Finally, we deploy a python telegram bot on Heroku:

```bash
git init
heroku create "app-name" # This is the APP_NAME from the script
git remote -v
git add .
git commit -m "commit"
git push heroku master
```

[The GitHub repository for the python telegram bot](https://github.com/dspytdao/Telegram_bot_py_heroku)

## Summary

In this tutorial, we create a simple python Heroku telegram bot that uses `/start` and `/help` commands as well as echoes the user's message. The script also uses a web hook for python Heroku hosting. To create a bot we have to message @BotFather in telegram. After that BotFather sends us the HTTP API TOKEN.

## Related Posts

- [How to Panel data python – An easy introduction](https://dspyt.com/panel-data-econometrics-an-introduction-with-an-example-in-python)
- [Simple Ceramic Data Model App and Unstoppable Domains](https://dspyt.com/simple-app-with-ceramic-data-model-and-unstoppable-domains)
- [Simple QR code generator on AWS with Flask](https://dspyt.com/simple-qr-code-generator-on-aws-with-flask)
- [How to implement asyncio python tutorial](https://dspyt.com/simple-asynchronous-python-webscraper-tutorial)
- [How to generate parsiq wallet triggers for CryptoPunks](https://dspyt.com/generating-fast-and-easy-parsiq-triggers-for-cryptopunks)
