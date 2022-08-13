---
title: "Simple and easy heroku telegram bot in Python"
date: "May 3, 2022"
excerpt: "We create a heroku python telegram bot from scratch. We utilize python telebot library and host the project on Heroku."
cover_image: "/images/posts/telegrambot/pexels-cottonbro-5077039-1-e1629301426265.webp"
time_read: "5 min"
---

To begin with, the idea for creating a telegram bot came up during Safety & Security Lab Hackathon. Our team created a sample bot to educate public on computer security and protecting yourself online. The bot was running from our personal notebook and utilized telebot library. However, we experienced difficulties when we put on Heroku. As a result, I decided to begin optimizing the code from scratch so we could host heroku telegram bot.

## Virtual Environment

First, we need to save python dependencies to host the bot on Heroku. Personally, I have already mentioned the platform in the write-up on the Moscow City Hack hackathon. Hence, we can use virtual environment library virtualenv. We install the library:

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">pip install virtualenv
</pre></div>

Start the virtual environment and activate it:

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">virtualenv project
<span style="color: #007020">source </span>project/Scripts/activate
</pre></div>

To save the dependencies, for example, for Heroku:

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">pip freeze &gt; requirements.txt
</pre></div>

In case we want to exit the virtual environment:

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">deactivate
</pre></div>

## Heroku Telegram Bot

To create a bot we have to message @BotFather in telegram. The command that creates a bot is /newbot and you have to also name the bot. After that BotFather sends us the HTTP API TOKEN.

![telegram bot creation : Data Science with Python](/images/posts/telegrambot/image-7.webp)

## Telegram bot in Python

First we install the key library is python-telegram-bot:

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">pip install python-telegram-bot
</pre></div>

First, we create a simple python bot that uses /start and /help commands as well as echos user’s message. The script also uses a web-hook for Heroku hosting:

<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2Fdspytdao%2FTelegram_bot_py_heroku%2Fblob%2Fmain%2Fbot.py&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on"></script>

Do not forget to edit the created TOKEN and APP_NAME that you obtain through Heroku.

## Deploying heroku telegram bot

Besides, we create a Procfile that contains a line:

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">web: python3 bot.py
</pre></div>

Our folder should contain three files: Procifle, the python script (in this case bot.py) and requirements.txt.

Finally, to deploy on Heroku:

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">git init
heroku create <span style="color: #4070a0">&quot;app-name&quot;</span> <span style="color: #60a0b0; font-style: italic"># This is the APP_NAME from the script</span>
git remote -v
git add .
git commit -m <span style="color: #4070a0">&quot;commit&quot;</span>
git push heroku master
</pre></div>

[The GitHub library for the bot](https://github.com/dspytdao/Telegram_bot_py_heroku)
