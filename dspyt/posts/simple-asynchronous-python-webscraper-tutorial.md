---
title: "How to implement asyncio python tutorial"
date: "December 27, 2021"
excerpt: "Asyncio python tutorial: smart way to efficiently handle tasks like network or input / output, especially for a time-consuming task to complete."
cover_image: "/images/posts/asyncio/pexels-thisisengineering-3861969-1-e1629301351687.webp"
authors: ["pavel-fedotov"]
tags:
  [
    "Python",
    "IO",
    "asyncio",
    "proxy",
    "numpy",
    "synchronous",
    "AIOHTTP",
    "await",
    "functools",
    "asynchronous",
    "asyncio python tutorial",
    "python asyncio tutorial",
    "python async tutorial",
    "python async await tutorial",
  ]
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

```python
import aiohttp
import asyncio
import time
import numpy as np
import pandas as pd
import functools
import operator
import argparse
import re
from datetime import datetime
```

In the function `get_page()` we make a call to the api with a payload including a vacancy search text, area code and number of vacancies per page for all available pages. The function returns a vacancy list with urls for relevant vacancies.

```python
async def get_page(page: int, search_text: str ) -> list:
    async with aiohttp.ClientSession(trust_env=True) as client:
        vac_list = []
        for x in set(np.arange(page)):
            params = {
                'text': f'NAME:{search_text}',
                'area': 113, #113--Russia; 1001--Other Regions(outside CIS)
                'page': int(x),
                'per_page': 100
            }
            async with client.get('https://api.hh.ru/vacancies', params=params) as response:
                data = await response.json()
                vac_list.append([data['items'][i]['url'] for i in range(len(data['items']))])
                if (data['pages'] - x) <= 1:
                    print('The maximum number of vacancies:')
                    break
        return vac_list
```

In the function `get_vacancy()` we make a call to each url and collect more granular data such as wage rate, location and necessary skills. Since this is the most time-consuming part of the scraper we speed it up with async.

```python
async def get_vacancy(url: str) -> list:
    async with aiohttp.ClientSession(trust_env=True) as client:
        async with client.get(f"{url}", raise_for_status=True) as response:
            response_dict = await response.json()
            name = response_dict['name']
            skills: str = ''
            if 'key_skills' in response_dict:
                for i in range(len(response_dict['key_skills'])):
                    skills = skills + response_dict['key_skills'][i]['name']+';'
            sal_from: str = ''
            sal_to: str   = ''
            sal_cur: str  = ''
            if 'salary' in response_dict:
                if not (response_dict['salary'] is None):
                    sal_from = response_dict['salary']['from']
                    sal_to   = response_dict['salary']['to']
                    sal_cur  = response_dict['salary']['currency']

            exp = response_dict['experience']['name']
            sch = response_dict['schedule']['name']
            employer = response_dict['employer']['name']
            description =  re.sub('<[^<]+?>', '', response_dict['description'])
            area = response_dict['area']['name']
            proper_url = response_dict['apply_alternate_url']
            published = response_dict['published_at']
            test = response_dict['has_test']

    return [name,  proper_url, published, test, sal_from, sal_to, sal_cur, exp,  sch, skills, employer, area, description]
```

Our function is too fast for the API and the website limits the number of requests per unit of time. Hence, we introduce a class that delays sending of http requests. We wait in a loop because if there are multiple waiters the wake-up can be spurious. Before making a request, we clear the ready flag to prevent other waiters until the delay elapses again.

```python
class Limiter:
    def __init__(self, delay):
        self.delay = delay
        self._ready = asyncio.Event()
        self._ready.set()

    async def wait(self):
        while not self._ready.is_set():
            await self._ready.wait()
        self._ready.clear()
        asyncio.get_event_loop().call_later(self.delay, self._ready.set)

```

## Python Main function

The main function calls the functions as well as Limiter class that implements delay. First, main calls get_page using asyncio.gather and receives the list of vacancy urls. Then it implements delay and creates a task for each url using asyncio.create_task(). In a while loop we wait for a completion of each task. Here we can also implement retry functionality in the future.

```python
async def main(pages, text, delay=0.2):
    vac_list = await asyncio.gather(get_page(pages, text))
    vac_list = functools.reduce(operator.iconcat, vac_list[0], [])
    print(len(vac_list))
    limiter = Limiter(delay)
    tasks = {asyncio.ensure_future(try_make_request(limiter, c)): c for c in vac_list}
    pending = set(tasks.keys())
    num_times_called = 0
    while pending:
        num_times_called += 1
        finished, pending = await asyncio.wait(pending, return_when=asyncio.FIRST_EXCEPTION)
        for task in finished:
            if task.exception():
                print(f"{task} got an exception {task.exception()}")
                return [x.result() for x in finished]
                #for retrying
                #coro = tasks[task]
                #new_task = asyncio.ensure_future(get_vacancy(coro))
                #tasks[new_task] = coro
                #pending.add(new_task)
    print("saving to output file")
    return [x.result() for x in finished]
```

Finally, we add a command line interface with Argparse library. We ask the user parameters such as search text, number of pages, output file name and delay. We start the event loop using get_event_loop and pass main specified parameters.

```python
if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('-p','--pages', default=5, dest='pages', type=int, help='provide the number of pages to scrape. 1 page has 100 vacancies.')
    parser.add_argument('-t','--text', default='', dest='search_text', type=str, help='provide the search text.')
    parser.add_argument('-o','--output', default='df', dest='file_name', type=str, help='provide the output file name.')
    parser.add_argument('-d','--delay', default=0.2, dest='delay', type=float, help='provide the delay.')
    args = parser.parse_args()
    s = time.perf_counter()
    loop = asyncio.get_event_loop()
    res = loop.run_until_complete(main(args.pages, args.search_text, args.delay))
    pd.DataFrame(np.array(res),columns=['vacancy','url', 'created', 'has_test', 'salary_from','salary_to', 'currency', 'experience', 'schedule','skills', 'employer', 'area', 'description']).to_csv(f'{args.file_name}{datetime.now().date()}.csv',index=False)
    loop.run_until_complete(asyncio.sleep(0.01))
    loop.close()
    elapsed = time.perf_counter() - s
    print(f"{__file__} executed in {elapsed:0.2f} seconds.")
```

The code is located in the [GitHub repository](https://github.com/Pfed-prog/HeadHunter_async_parser)

## Proxies with async http client

In this post we have demonstrated how and where to get proxies and how to use them in http requests library for Python. In the future we can further improve the vacancy scraper by using multiple proxies to reduce drag created by the delay. Here is a good starting point on how we can use proxies with aiohttp.

```python
import aiohttp
from aiohttp_proxy import ProxyConnector, ProxyType
import asyncio
import sys
import numpy as np

if sys.version_info[0] == 3 and sys.version_info[1] >= 8 and sys.platform.startswith('win'):
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

async def fetch(url, proxy):
    host, port = proxy.split(':')[0], proxy.split(':')[1]
    connector = ProxyConnector(
         proxy_type=ProxyType.HTTP,
         host=host,
         port= int(port),
    )
    async with aiohttp.ClientSession(connector=connector,trust_env=True) as session:
        params = {
            'text': f'NAME:C++',
            'area': 113,
            'page': 0,
            'per_page': 100
        }
        async with session.get(url, params=params) as response:
            return await response.text()

if __name__ == "__main__":
    data = np.load('file.npy')
    print(f'we take {data[2]} proxy')
    loop = asyncio.get_event_loop()
    result = loop.run_until_complete(fetch('https://api.hh.ru/vacancies', data[2]))
    print(result)
    loop.run_until_complete(asyncio.sleep(0.01))
    loop.close()

```

## Related Posts

- [A How to EfficientNet Classification](https://dspyt.com/efficientnet-classification)
- [Simple and easy heroku telegram bot in Python](https://dspyt.com/simple-telegram-bot-in-python-hosted-easily-on-heroku)
- [Simple QR code generator on AWS with Flask](https://dspyt.com/simple-qr-code-generator-on-aws-with-flask)
- [How to implement asyncio python tutorial](https://dspyt.com/simple-asynchronous-python-webscraper-tutorial)
- [How to python check proxy with aiohttp](https://dspyt.com/easy-proxy-scraper-and-proxy-usage-in-python)
