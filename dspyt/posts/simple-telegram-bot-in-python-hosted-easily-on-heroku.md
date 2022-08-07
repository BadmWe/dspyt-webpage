---
title: "Simple and easy heroku telegram bot in Python"
date: "March 2, 2021"
excerpt: ""
cover_image: "/images/posts/telegrambot/pexels-cottonbro-5077039-1-e1629301426265.jpg"
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

![telegram bot creation : Data Science with Python](/images/posts/telegrambot/image-7.png)

## Telegram bot in Python

First we install the key library is python-telegram-bot:

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">pip install python-telegram-bot
</pre></div>

First, we create a simple python bot that uses /start and /help commands as well as echos user’s message. The script also uses a web-hook for Heroku hosting:

<!-- HTML generated using hilite.me --><div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">import</span> <span style="color: #0e84b5; font-weight: bold">logging</span>

<span style="color: #007020; font-weight: bold">import</span> <span style="color: #0e84b5; font-weight: bold">os</span>
<span style="color: #007020; font-weight: bold">from</span> <span style="color: #0e84b5; font-weight: bold">telegram.ext</span> <span style="color: #007020; font-weight: bold">import</span> Updater, CommandHandler, MessageHandler, Filters

<span style="color: #60a0b0; font-style: italic"># Enables logging</span>
logging<span style="color: #666666">.</span>basicConfig(<span style="color: #007020">format</span><span style="color: #666666">=</span><span style="color: #4070a0">&#39;%(asctime)s - %(name)s - %(levelname)s - %(message)s&#39;</span>,
level<span style="color: #666666">=</span>logging<span style="color: #666666">.</span>INFO)

logger <span style="color: #666666">=</span> logging<span style="color: #666666">.</span>getLogger(**name**)

PORT <span style="color: #666666">=</span> <span style="color: #007020">int</span>(os<span style="color: #666666">.</span>environ<span style="color: #666666">.</span>get(<span style="color: #4070a0">&#39;PORT&#39;</span>, <span style="color: #4070a0">&#39;8443&#39;</span>))

<span style="color: #60a0b0; font-style: italic"># We define command handlers. Error handlers also receive the raised TelegramError object in error.</span>
<span style="color: #007020; font-weight: bold">def</span> <span style="color: #06287e">start</span>(update, context):
<span style="color: #4070a0; font-style: italic">&quot;&quot;&quot;Sends a message when the command /start is issued.&quot;&quot;&quot;</span>
update<span style="color: #666666">.</span>message<span style="color: #666666">.</span>reply_text(<span style="color: #4070a0">&#39;Hi!&#39;</span>)

<span style="color: #007020; font-weight: bold">def</span> <span style="color: #06287e">help</span>(update, context):
<span style="color: #4070a0; font-style: italic">&quot;&quot;&quot;Sends a message when the command /help is issued.&quot;&quot;&quot;</span>
update<span style="color: #666666">.</span>message<span style="color: #666666">.</span>reply_text(<span style="color: #4070a0">&#39;Help!&#39;</span>)

<span style="color: #007020; font-weight: bold">def</span> <span style="color: #06287e">echo</span>(update, context):
<span style="color: #4070a0; font-style: italic">&quot;&quot;&quot;Echos the user message.&quot;&quot;&quot;</span>
update<span style="color: #666666">.</span>message<span style="color: #666666">.</span>reply_text(update<span style="color: #666666">.</span>message<span style="color: #666666">.</span>text)

<span style="color: #007020; font-weight: bold">def</span> <span style="color: #06287e">error</span>(update, context):
<span style="color: #4070a0; font-style: italic">&quot;&quot;&quot;Logs Errors caused by Updates.&quot;&quot;&quot;</span>
logger<span style="color: #666666">.</span>warning(<span style="color: #4070a0">&#39;Update &quot;%s&quot; caused error &quot;%s&quot;&#39;</span>, update, context<span style="color: #666666">.</span>error)

<span style="color: #007020; font-weight: bold">def</span> <span style="color: #06287e">main</span>():
<span style="color: #4070a0; font-style: italic">&quot;&quot;&quot;Starts the bot.&quot;&quot;&quot;</span>
<span style="color: #60a0b0; font-style: italic"># Creates the Updater and pass it your bot&#39;s token.</span>
<span style="color: #60a0b0; font-style: italic"># Make sure to set use_context=True to use the new context based callbacks</span>
<span style="color: #60a0b0; font-style: italic"># Post version 12 this will no longer be necessary</span>
TOKEN <span style="color: #666666">=</span> <span style="color: #4070a0">&#39; Your Token &#39;</span><span style="color: #60a0b0; font-style: italic">#enter your token here</span>
APP_NAME<span style="color: #666666">=</span><span style="color: #4070a0">&#39;https://app-name.herokuapp.com/&#39;</span> <span style="color: #60a0b0; font-style: italic">#Edit the heroku app-name</span>
updater <span style="color: #666666">=</span> Updater(TOKEN, use_context<span style="color: #666666">=</span><span style="color: #007020; font-weight: bold">True</span>)
<span style="color: #60a0b0; font-style: italic"># Get the dispatcher to register handlers</span>
dp <span style="color: #666666">=</span> updater<span style="color: #666666">.</span>dispatcher
<span style="color: #60a0b0; font-style: italic"># on different commands - answer in Telegram</span>
dp<span style="color: #666666">.</span>add_handler(CommandHandler(<span style="color: #4070a0">&quot;start&quot;</span>, start))
dp<span style="color: #666666">.</span>add_handler(CommandHandler(<span style="color: #4070a0">&quot;help&quot;</span>, help))
<span style="color: #60a0b0; font-style: italic"># on noncommand i.e message - echo the message on Telegram</span>
dp<span style="color: #666666">.</span>add_handler(MessageHandler(Filters<span style="color: #666666">.</span>text, echo))
<span style="color: #60a0b0; font-style: italic"># log all errors</span>
dp<span style="color: #666666">.</span>add_error_handler(error)
updater<span style="color: #666666">.</span>start_webhook(listen<span style="color: #666666">=</span><span style="color: #4070a0">&quot;0.0.0.0&quot;</span>, port<span style="color: #666666">=</span>PORT, url_path<span style="color: #666666">=</span>TOKEN, webhook_url<span style="color: #666666">=</span>APP_NAME <span style="color: #666666">+</span> TOKEN)
updater<span style="color: #666666">.</span>idle()

<span style="color: #007020; font-weight: bold">if</span> **name** <span style="color: #666666">==</span> <span style="color: #4070a0">&#39;**main**&#39;</span>:
main()

</pre></div>

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

The GitHub library for the bot: https://github.com/dspytdao/Telegram_bot_py_heroku
