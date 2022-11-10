---
title: "Simple and easy heroku telegram bot in Python - DSPYT"
date: "May 3, 2022"
excerpt: "We create a heroku python telegram bot from scratch. We utilize python telebot library and host the project on Heroku."
cover_image: "/images/posts/telegrambot/pexels-cottonbro-5077039-1-e1629301426265.webp"
time_read: "5 min"
tags: ["Python", "telegram", "bot", "heroku"]
---

To begin with, the idea for creating a telegram python bot came up during Safety & Security Lab Hackathon. Our team created a sample bot to educate public on computer security and protecting yourself online. The bot was running from our personal laptop and utilized python telebot library. However, we experienced difficulties when we put python telegram bot on Heroku.

As a result, in this blog post we conduct telegram optimizing. We optimize the python telegram bot template from scratch so we could host heroku telegram bot.

## Python Virtual Environment

First, we need to save python dependencies to host telegram python bot on Heroku. In this tutorial related to telegram optimizing, we use python virtual environment library virtualenv. We install the python library:

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">pip install virtualenv
</pre></div>

Next, we start the virtual environment and activate it:

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">virtualenv project
<span style="color: #007020">source </span>project/Scripts/activate
</pre></div>

To save the dependencies for server such as Heroku, we run the following python command:

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">pip freeze &gt; requirements.txt
</pre></div>

In case we want to exit python virtual environment:

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">deactivate
</pre></div>

## Heroku python telegram optimizing

To create a bot we have to message @BotFather in telegram. The command that creates a bot is /newbot and you have to also name the bot. After that BotFather sends us the HTTP API TOKEN.

![python telegram bot creation: Data Science with Python](/images/posts/telegrambot/image-7.webp)

## Python telegram bot

First, we install the key python telegram bot library which is python-telegram-bot:

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">pip install python-telegram-bot
</pre></div>

Next, we create a simple python telegram bot that uses /start and /help commands as well as echos user’s message. The script also uses a web-hook for Heroku hosting:

<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2Fdspytdao%2FTelegram_bot_py_heroku%2Fblob%2Fmain%2Fbot.py&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on"></script>

Do not forget to edit the created TOKEN and APP_NAME that you obtain through Heroku.

## Deploying heroku python telegram bot

Besides, we create a Procfile that contains a following line:

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">web: python3 bot.py
</pre></div>

Our folder should contain three files: Procifle, the python script (in this case bot.py) and requirements.txt.

Finally, we deploy python telegram bot on Heroku:

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">git init
heroku create <span style="color: #4070a0">&quot;app-name&quot;</span> <span style="color: #60a0b0; font-style: italic"># This is the APP_NAME from the script</span>
git remote -v
git add .
git commit -m <span style="color: #4070a0">&quot;commit&quot;</span>
git push heroku master
</pre></div>

[The GitHub library for the python telegram bot](https://github.com/dspytdao/Telegram_bot_py_heroku)

## Related Posts

- [How to Panel data python – An easy introduction](https://dspyt.com/panel-data-econometrics-an-introduction-with-an-example-in-python)
- [Simple Ceramic Data Model App and Unstoppable Domains](https://dspyt.com/simple-app-with-ceramic-data-model-and-unstoppable-domains)
- [Simple QR code generator on AWS with Flask](https://dspyt.com/simple-qr-code-generator-on-aws-with-flask)
- [How to implement asyncio python tutorial](https://dspyt.com/simple-asynchronous-python-webscraper-tutorial)
- [How to generate parsiq wallet triggers for CryptoPunks](https://dspyt.com/generating-fast-and-easy-parsiq-triggers-for-cryptopunks)
