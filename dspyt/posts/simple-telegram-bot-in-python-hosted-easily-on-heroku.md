---
title: "Simple and easy heroku telegram bot in Python - DSPYT"
date: "May 3, 2022"
excerpt: "We create a heroku python telegram bot from scratch. We utilize python telebot library and host the project on Heroku."
cover_image: "/images/posts/telegrambot/pexels-cottonbro-5077039-1-e1629301426265.webp"
time_read: "5 min"
tags: ["Python", "telegram", "bot", "heroku"]
---

To begin with, the idea for creating a telegram python bot came up during Safety & Security Lab Hackathon. Our team created a sample bot to educate the public on computer security and protecting yourself online. The bot was running from our personal laptop and utilized the python telebot library. However, we experienced difficulties when we put the python telegram bot on Heroku.

As a result, in this blog post, we conduct telegram optimization. We optimize the python telegram bot template from scratch so we could host the Heroku telegram bot.

## Python Virtual Environment

First, we need to save python dependencies to host the telegram python bot on Heroku. In this tutorial related to telegram optimizing, we use the python virtual environment library virtualenv. We install the python library:

```bash
pip install virtualenv
```

Next, we start the virtual environment and activate it:

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

To create a bot we have to message @BotFather in telegram. The command that creates a bot is /newbot and you have to also name the bot. After that BotFather sends us the HTTP API TOKEN.

![python telegram bot creation: Data Science with Python](/images/posts/telegrambot/image-7.webp)

## Python telegram bot

First, we install the key python telegram bot library which is python-telegram-bot:

```bash
pip install python-telegram-bot
```

Next, we create a simple python telegram bot that uses /start and /help commands as well as echoes the user’s message. The script also uses a web hook for Heroku hosting:

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

Do not forget to edit the created TOKEN and APP_NAME that you obtain through Heroku.

## Deploying Heroku python telegram bot

Besides, we create a Procfile that contains the following line:

`web: python3 bot.py`

Our folder should contain three files: Procifle, the python script (in this case bot.py), and requirements.txt.

Finally, we deploy a python telegram bot on Heroku:

```bash
git init
heroku create "app-name" # This is the APP_NAME from the script
git remote -v
git add .
git commit -m "commit"
git push heroku master
```

[The GitHub library for the python telegram bot](https://github.com/dspytdao/Telegram_bot_py_heroku)

## Summary

In this tutorial, we create a simple python Heroku telegram bot that uses /start and /help commands as well as echoes the user's message. The script also uses a web hook for python Heroku hosting. To create a bot we have to message @BotFather in telegram. After that BotFather sends us the HTTP API TOKEN.

## Related Posts

- [How to Panel data python – An easy introduction](https://dspyt.com/panel-data-econometrics-an-introduction-with-an-example-in-python)
- [Simple Ceramic Data Model App and Unstoppable Domains](https://dspyt.com/simple-app-with-ceramic-data-model-and-unstoppable-domains)
- [Simple QR code generator on AWS with Flask](https://dspyt.com/simple-qr-code-generator-on-aws-with-flask)
- [How to implement asyncio python tutorial](https://dspyt.com/simple-asynchronous-python-webscraper-tutorial)
- [How to generate parsiq wallet triggers for CryptoPunks](https://dspyt.com/generating-fast-and-easy-parsiq-triggers-for-cryptopunks)
