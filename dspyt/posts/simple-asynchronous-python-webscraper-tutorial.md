---
title: "How to implement asyncio python tutorial"
date: "December 27, 2021"
excerpt: "asyncio python tutorial : smart way to efficiently handle tasks like network or input/output, especially for a time-consuming task to finish"
cover_image: "/images/posts/asyncio/pexels-thisisengineering-3861969-1-e1629301351687.jpg"
time_read: "5 min"
tags: ["python", "asyncio", "proxy"]
---

Many programming languages have an asynchronous (async) feature that improves their concurrency primitives. In 2015 Python 3.5 introduced coroutines with async and await syntax. Since then the async capability of Python has improved dramatically with the rise of libraries such as asyncio, library to write concurrent code using the async/await syntax, and AIOHTTP, an asynchronous HTTP Client/Server for asyncio and Python. Hence, we provide asyncio python tutorial.

## asyncio python tutorial

In short, a synchronous program works one step at a time. Meanwhile, an asynchronous program does not necessarily wait for a completion of a step before moving on to future steps. It is a smart way to efficiently handle tasks like network or input/output, especially when most of the time we wait for a time-consuming task to finish.

In this post, we introduce the concepts of async & await and illustrate how we can use them in Python. This capability is relatively recent in Python 3, and many users might not be familiar with it. Besides, we also improve the vacancy scraper by adding coroutines with async and await syntax. Finally, we demonstrate how to use proxies with an asynchronous http client in Python and extend [proxy tutorial](https://dspyt.com/easy-proxy-scraper-and-proxy-usage-in-python) where we obtain proxies

## Synchronous vs. Asynchronous Python

In general, asynchronous describes the relationship between two or more objects that interact within the same system but do not occur at predetermined intervals and do not necessarily rely on each other’s existence to function. They are not coordinated with each other, meaning they could occur simultaneously or not because they have their own separate objective.

In computer programming, synchronous operation is a process that runs only as a result of a completion of some other process. A typical activity that might use a synchronous protocol is a transmission of files from one point to another. As a system receives each transmission, it returns a response indicating success or failure. In such a process each successive transmission of data requires a successful response to the previous transmission.

Meanwhile asynchronous programming, also known as non-blocking code, provides opportunities for a program to continue running code while waiting for some tasks to complete. Such program executes cumbersome tasks in the background while the rest of the code continues to run.

The use of asynchronous methods is common in programming languages such as JavaScript, Go, Ruby, Python and C#. Asynchronous programming is a form of parallel programming that allows a unit of work to run separately from the primary application thread. When the work is completed, it notifies the main thread. There are numerous benefits, for instance, improved application performance and enhanced responsiveness of an application.

The feature that enables asynchronous programming in these languages is referred to as a callback function. In simple terms, an outer function expects to take a callback function as an argument to complete some kind of routine or an action.

## Async Vacancy Scraper

To demonstrate benefits of async programming we improve our vacancy collector written during a hackathon that accesses an in-built HeadHunter API for reliable and persistent connection.

In Python functions prefixed with the async keyword become asynchronous functions, also known as coroutines. Coroutines behave differently from regular functions:

Coroutines use another keyword, await, which allows a coroutine to wait for results from another coroutine without blocking. Until results come back from the awaited coroutine, Python switches freely among other running coroutines.

The libraries that we use in this project are as following:

<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2FPfed-prog%2FHeadHunter_async_parser%2Fblob%2Fmain%2Fasync_HH_parser.py%23L1-L10&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on"></script>

In the function <code>get_page()</code> we make a call to the api with a payload including a vacancy search text, area code and number of vacancies per page for all available pages. The function returns a vacancy list with urls for relevant vacancies.

<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2FPfed-prog%2FHeadHunter_async_parser%2Fblob%2Fmain%2Fasync_HH_parser.py%23L12-L28&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on"></script>

In the function <code>get_vacancy()</code> we make a call to each url and collect more granular data such as wage rate, location and necessary skills. Since this is the most time-consuming part of the scraper we speed it up with async.

<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2FPfed-prog%2FHeadHunter_async_parser%2Fblob%2Fmain%2Fasync_HH_parser.py%23L30-L57&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on"></script>

Our function is too fast for the API and the website limits the number of requests per unit of time. Hence, we introduce a class that delays sending of http requests. We wait in a loop because if there are multiple waiters the wake-up can be spurious. Before making a request, we clear the ready flag to prevent other waiters until the delay elapses again.

<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2FPfed-prog%2FHeadHunter_async_parser%2Fblob%2Fmain%2Fasync_HH_parser.py%23L59-L69&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on"></script>

## Python Main function

The main function calls the functions as well as Limiter class that implements delay. First, main calls get_page using asyncio.gather and receives the list of vacancy urls. Then it implements delay and creates a task for each url using asyncio.create_task(). In a while loop we wait for a completion of each task. Here we can also implement retry functionality in the future.

<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2FPfed-prog%2FHeadHunter_async_parser%2Fblob%2Fmain%2Fasync_HH_parser.py%23L76-L97&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on"></script>

Finally, we add a command line interface with Argparse library. We ask the user parameters such as search text, number of pages, output file name and delay. We start the event loop using get_event_loop and pass main specified parameters.

<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2FPfed-prog%2FHeadHunter_async_parser%2Fblob%2Fmain%2Fasync_HH_parser.py%23L99-L113&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on"></script>

The code is located in the [GitHub repository](https://github.com/Pfed-prog/HeadHunter_async_parser)

## Proxies with async http client

In this post we have demonstrated how and where to get proxies and how to use them in http requests library for Python. In the future we can further improve the vacancy scraper by using multiple proxies to reduce drag created by the delay. Here is a good starting point on how we can use proxies with aiohttp.

<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2FPfed-prog%2FHeadHunter_async_parser%2Fblob%2Fmain%2Fasync_parser.py&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on&showCopy=on"></script>

## Related Posts

- [A How to EfficientNet Classification](https://dspyt.com/efficientnet-classification)
- [Simple and easy heroku telegram bot in Python](https://dspyt.com/simple-telegram-bot-in-python-hosted-easily-on-heroku)
- [Simple QR code generator on AWS with Flask](https://dspyt.com/simple-qr-code-generator-on-aws-with-flask)
- [How to implement asyncio python tutorial](https://dspyt.com/simple-asynchronous-python-webscraper-tutorial)
- [How to python check proxy with aiohttp](https://dspyt.com/easy-proxy-scraper-and-proxy-usage-in-python)
