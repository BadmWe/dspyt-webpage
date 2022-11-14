---
title: "How to python check proxy with aiohttp - DSPYT"
date: "May 2, 2022"
excerpt: "A proxy server is a remote server through which you connect to obfuscate your initial address. The proxy overlays your authentic IP address."
cover_image: "/images/posts/proxy/proxy-proxy-server-proxy-online-proxy-proxy-site-proxy-list-768x575.webp"
time_read: "5 min"
tags: ["proxy", "Python", "aiohttp", "proxy-server", "proxy-scraper"]
---

To conduct data analysis, for example during market research, we first need to determine the scope and collect the necessary data. Some websites and companies provide an easy and convenient way to access data via API. However, many limit the number of requests from one IP address. Therefore to scrape data anonymously and prevent your IP from being blocked by the web server, we recommend that you implement python scrapper for proxy servers.

## What is a proxy server?

A proxy server is a remote server through which you connect to obfuscate your initial address. Since the proxy hides and overlays your authentic IP address with its IP, the destination server can only see the IP of the proxy. Hence, if you rotate proxies with each request, the endpoint will recognize them as separate ones since they are coming from different IP addresses. Thus, you increase the speed and chance of obtaining data for research.

![python proxy server](/images/posts/proxy/Proxy-Server.webp)

## Where is my proxy?

In this article, we demonstrate how to obtain, verify and implement python scrapper for free proxies by using python libraries [requests](https://docs.python-requests.org/en/master/), selenium, BeautifulSoup and NumPy.

## Python check proxy with requests

Requests is a python http library that allows for the usage of proxies and multi-threading.

To implement the python script to work with proxies we first need to check those proxy servers are compatible with the target website.
Hence, we create a python scraper that collects the proxy server list from https://free-proxy-list.net/ and saves only those that work with our target.

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">import</span> <span style="color: #0e84b5; font-weight: bold">requests</span>
<span style="color: #007020; font-weight: bold">from</span> <span style="color: #0e84b5; font-weight: bold">bs4</span> <span style="color: #007020; font-weight: bold">import</span> BeautifulSoup
<span style="color: #007020; font-weight: bold">import</span> <span style="color: #0e84b5; font-weight: bold">numpy</span>
<span style="color: #007020; font-weight: bold">import</span> <span style="color: #0e84b5; font-weight: bold">concurrent.futures</span>

<span style="color: #60a0b0; font-style: italic"># Get HTML response</span>
html <span style="color: #666666">=</span> requests<span style="color: #666666">.</span>get(<span style="color: #4070a0">&#39;https://www.free-proxy-list.net/&#39;</span>)

<span style="color: #60a0b0; font-style: italic"># Parse HTML response</span>
content <span style="color: #666666">=</span> BeautifulSoup(html<span style="color: #666666">.</span>text, <span style="color: #4070a0">&#39;lxml&#39;</span>)

<span style="color: #60a0b0; font-style: italic"># Extract proxies table</span>
table <span style="color: #666666">=</span> content<span style="color: #666666">.</span>find(<span style="color: #4070a0">&#39;table&#39;</span>)

<span style="color: #60a0b0; font-style: italic"># Extract table rows</span>
rows <span style="color: #666666">=</span> table<span style="color: #666666">.</span>findAll(<span style="color: #4070a0">&#39;tr&#39;</span>)

<span style="color: #60a0b0; font-style: italic"># Create proxies result list</span>
results <span style="color: #666666">=</span> []

<span style="color: #60a0b0; font-style: italic"># Loop over table rows</span>
<span style="color: #007020; font-weight: bold">for</span> row <span style="color: #007020; font-weight: bold">in</span> rows:
<span style="color: #60a0b0; font-style: italic"># Use only non-empty rows</span>
    <span style="color: #007020; font-weight: bold">if</span> <span style="color: #007020">len</span>(row<span style="color: #666666">.</span>findAll(<span style="color: #4070a0">&#39;td&#39;</span>)):
    <span style="color: #60a0b0; font-style: italic"># Append rows containing proxies to results list</span>
        results<span style="color: #666666">.</span>append(row<span style="color: #666666">.</span>findAll(<span style="color: #4070a0">&#39;td&#39;</span>)[<span style="color: #40a070">0</span>]<span style="color: #666666">.</span>text <span style="color: #666666">+</span><span style="color: #4070a0">&#39;:&#39;</span> <span style="color: #666666">+</span> row<span style="color: #666666">.</span>findAll(<span style="color: #4070a0">&#39;td&#39;</span>)[<span style="color: #40a070">1</span>]<span style="color: #666666">.</span>text)

<span style="color: #60a0b0; font-style: italic"># Create proxies final list</span>
final <span style="color: #666666">=</span>[]
<span style="color: #007020; font-weight: bold">def</span> <span style="color: #06287e">test</span>(proxy):
<span style="color: #60a0b0; font-style: italic">#test each proxy on whether it access api of hh.ru</span>
    headers <span style="color: #666666">=</span> {<span style="color: #4070a0">&#39;User-Agent&#39;</span>: <span style="color: #4070a0">&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:80.0) Gecko/20100101 Firefox/80.0&#39;</span>}
    <span style="color: #007020; font-weight: bold">try</span>:
        params <span style="color: #666666">=</span> {
        <span style="color: #4070a0">&#39;text&#39;</span>: f<span style="color: #4070a0">&#39;NAME:C++&#39;</span>,
        <span style="color: #4070a0">&#39;area&#39;</span>: <span style="color: #40a070">113</span>,
        <span style="color: #4070a0">&#39;page&#39;</span>: <span style="color: #40a070">0</span>,
        <span style="color: #4070a0">&#39;per_page&#39;</span>: <span style="color: #40a070">100</span>
        }
        requests<span style="color: #666666">.</span>get(<span style="color: #4070a0">&#39;https://api.hh.ru/vacancies&#39;</span>, headers<span style="color: #666666">=</span>headers, proxies<span style="color: #666666">=</span>{<span style="color: #4070a0">&#39;http&#39;</span> : proxy}, timeout<span style="color: #666666">=</span><span style="color: #40a070">1</span>, params<span style="color: #666666">=</span>params)
        final<span style="color: #666666">.</span>append(proxy)
    <span style="color: #007020; font-weight: bold">except</span>:
        <span style="color: #007020; font-weight: bold">pass</span>
    <span style="color: #007020; font-weight: bold">return</span> proxy

<span style="color: #60a0b0; font-style: italic">#test multiple proxies concurrently</span>
<span style="color: #007020; font-weight: bold">with</span> concurrent<span style="color: #666666">.</span>futures<span style="color: #666666">.</span>ThreadPoolExecutor() <span style="color: #007020; font-weight: bold">as</span> executor:
    executor<span style="color: #666666">.</span>map(test, results)

<span style="color: #60a0b0; font-style: italic">#to print the number of proxies</span>
<span style="color: #60a0b0; font-style: italic">#print(len(final))</span>

<span style="color: #60a0b0; font-style: italic">#save the working proxies to a file</span>
numpy<span style="color: #666666">.</span>save(<span style="color: #4070a0">&#39;file.npy&#39;</span>, final)
</pre></div>

This script yielded 295 proxy servers that work with our target website: HeadHunter.

## Python check proxy with selenium

We also create a script that additionally uses selenium library to scrape and check the proxy server list from https://advanced.name/.

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">from</span> <span style="color: #0e84b5; font-weight: bold">selenium</span> <span style="color: #007020; font-weight: bold">import</span> webdriver
<span style="color: #007020; font-weight: bold">from</span> <span style="color: #0e84b5; font-weight: bold">bs4</span> <span style="color: #007020; font-weight: bold">import</span> BeautifulSoup
<span style="color: #007020; font-weight: bold">import</span> <span style="color: #0e84b5; font-weight: bold">numpy</span> 
<span style="color: #007020; font-weight: bold">import</span> <span style="color: #0e84b5; font-weight: bold">concurrent.futures</span>
<span style="color: #007020; font-weight: bold">import</span> <span style="color: #0e84b5; font-weight: bold">requests</span>

dr <span style="color: #666666">=</span> webdriver<span style="color: #666666">.</span>Chrome(executable_path<span style="color: #666666">=</span><span style="color: #4070a0">&quot;C:</span><span style="color: #4070a0; font-weight: bold">\\</span><span style="color: #4070a0">YourPath&quot;</span>)
dr<span style="color: #666666">.</span>get(<span style="color: #4070a0">&quot;https://advanced.name/freeproxy?ddexp4attempt=1&amp;page=1&quot;</span>)
content <span style="color: #666666">=</span> BeautifulSoup(dr<span style="color: #666666">.</span>page_source,<span style="color: #4070a0">&quot;lxml&quot;</span>)
table <span style="color: #666666">=</span> content<span style="color: #666666">.</span>find(<span style="color: #4070a0">&#39;tbody&#39;</span>)
rows <span style="color: #666666">=</span> table<span style="color: #666666">.</span>findAll(<span style="color: #4070a0">&#39;tr&#39;</span>)
results <span style="color: #666666">=</span> []
<span style="color: #007020; font-weight: bold">for</span> row <span style="color: #007020; font-weight: bold">in</span> rows:
<span style="color: #60a0b0; font-style: italic"># Use only non-empty rows</span>
    <span style="color: #007020; font-weight: bold">if</span> <span style="color: #007020">len</span>(row<span style="color: #666666">.</span>findAll(<span style="color: #4070a0">&#39;td&#39;</span>)):
        <span style="color: #60a0b0; font-style: italic"># Append rows containing proxies to results list</span>
        results<span style="color: #666666">.</span>append(row<span style="color: #666666">.</span>findAll(<span style="color: #4070a0">&#39;td&#39;</span>)[<span style="color: #40a070">1</span>]<span style="color: #666666">.</span>text <span style="color: #666666">+</span><span style="color: #4070a0">&#39;:&#39;</span> <span style="color: #666666">+</span> row<span style="color: #666666">.</span>findAll(<span style="color: #4070a0">&#39;td&#39;</span>)[<span style="color: #40a070">2</span>]<span style="color: #666666">.</span>text)
        dr<span style="color: #666666">.</span>close()

final <span style="color: #666666">=</span>[]
<span style="color: #007020; font-weight: bold">def</span> <span style="color: #06287e">extract</span>(proxy):
    <span style="color: #60a0b0; font-style: italic">#this was for when we took a list into the function, without conc futures.</span>
    headers <span style="color: #666666">=</span> {<span style="color: #4070a0">&#39;User-Agent&#39;</span>: <span style="color: #4070a0">&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:80.0) Gecko/20100101 Firefox/80.0&#39;</span>}
    <span style="color: #007020; font-weight: bold">try</span>:
        <span style="color: #60a0b0; font-style: italic">#change the url to https://httpbin.org/ip that doesnt block anything</span>
        params <span style="color: #666666">=</span> {
        <span style="color: #4070a0">&#39;text&#39;</span>: f<span style="color: #4070a0">&#39;NAME:C++&#39;</span>,
        <span style="color: #4070a0">&#39;area&#39;</span>: <span style="color: #40a070">113</span>,
        <span style="color: #4070a0">&#39;page&#39;</span>: <span style="color: #40a070">0</span>,
        <span style="color: #4070a0">&#39;per_page&#39;</span>: <span style="color: #40a070">100</span>
        }
        requests<span style="color: #666666">.</span>get(<span style="color: #4070a0">&#39;https://api.hh.ru/vacancies&#39;</span>, headers<span style="color: #666666">=</span>headers, proxies<span style="color: #666666">=</span>{<span style="color: #4070a0">&#39;http&#39;</span> : proxy}, timeout<span style="color: #666666">=</span><span style="color: #40a070">1</span>, params<span style="color: #666666">=</span>params)
        final<span style="color: #666666">.</span>append(proxy)
    <span style="color: #007020; font-weight: bold">except</span>:
        <span style="color: #007020; font-weight: bold">pass</span>
        <span style="color: #007020; font-weight: bold">return</span> proxy

<span style="color: #007020; font-weight: bold">with</span> concurrent<span style="color: #666666">.</span>futures<span style="color: #666666">.</span>ThreadPoolExecutor() <span style="color: #007020; font-weight: bold">as</span> executor:
    executor<span style="color: #666666">.</span>map(extract, results)

<span style="color: #60a0b0; font-style: italic">#print(len(final))</span>
numpy<span style="color: #666666">.</span>save(<span style="color: #4070a0">&#39;file.npy&#39;</span>, final)

<span style="color: #60a0b0; font-style: italic"># Parse HTML response</span>
content <span style="color: #666666">=</span> BeautifulSoup(html<span style="color: #666666">.</span>text, <span style="color: #4070a0">&#39;lxml&#39;</span>)

<span style="color: #60a0b0; font-style: italic"># Extract proxies table</span>
table <span style="color: #666666">=</span> content<span style="color: #666666">.</span>find(<span style="color: #4070a0">&#39;table&#39;</span>)

<span style="color: #60a0b0; font-style: italic"># Extract table rows</span>
rows <span style="color: #666666">=</span> table<span style="color: #666666">.</span>findAll(<span style="color: #4070a0">&#39;tr&#39;</span>)

<span style="color: #60a0b0; font-style: italic"># Create proxies result list</span>
results <span style="color: #666666">=</span> []

<span style="color: #60a0b0; font-style: italic"># Loop over table rows</span>
<span style="color: #007020; font-weight: bold">for</span> row <span style="color: #007020; font-weight: bold">in</span> rows:
<span style="color: #60a0b0; font-style: italic"># Use only non-empty rows</span>
    <span style="color: #007020; font-weight: bold">if</span> <span style="color: #007020">len</span>(row<span style="color: #666666">.</span>findAll(<span style="color: #4070a0">&#39;td&#39;</span>)):
        <span style="color: #60a0b0; font-style: italic"># Append rows containing proxies to results list</span>
        results<span style="color: #666666">.</span>append(row<span style="color: #666666">.</span>findAll(<span style="color: #4070a0">&#39;td&#39;</span>)[<span style="color: #40a070">0</span>]<span style="color: #666666">.</span>text <span style="color: #666666">+</span><span style="color: #4070a0">&#39;:&#39;</span> <span style="color: #666666">+</span> row<span style="color: #666666">.</span>findAll(<span style="color: #4070a0">&#39;td&#39;</span>)[<span style="color: #40a070">1</span>]<span style="color: #666666">.</span>text)

<span style="color: #60a0b0; font-style: italic"># Create proxies final list</span>
final <span style="color: #666666">=</span>[]
<span style="color: #007020; font-weight: bold">def</span> <span style="color: #06287e">test</span>(proxy):
    <span style="color: #60a0b0; font-style: italic">#test each proxy on whether it access api of hh.ru</span>
    headers <span style="color: #666666">=</span> {<span style="color: #4070a0">&#39;User-Agent&#39;</span>: <span style="color: #4070a0">&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:80.0) Gecko/20100101 Firefox/80.0&#39;</span>}
    <span style="color: #007020; font-weight: bold">try</span>:
        params <span style="color: #666666">=</span> {
        <span style="color: #4070a0">&#39;text&#39;</span>: f<span style="color: #4070a0">&#39;NAME:C++&#39;</span>,
        <span style="color: #4070a0">&#39;area&#39;</span>: <span style="color: #40a070">113</span>,
        <span style="color: #4070a0">&#39;page&#39;</span>: <span style="color: #40a070">0</span>,
        <span style="color: #4070a0">&#39;per_page&#39;</span>: <span style="color: #40a070">100</span>
        }
        requests<span style="color: #666666">.</span>get(<span style="color: #4070a0">&#39;https://api.hh.ru/vacancies&#39;</span>, headers<span style="color: #666666">=</span>headers, proxies<span style="color: #666666">=</span>{<span style="color: #4070a0">&#39;http&#39;</span> : proxy}, timeout<span style="color: #666666">=</span><span style="color: #40a070">1</span>, params<span style="color: #666666">=</span>params)
        final<span style="color: #666666">.</span>append(proxy)
    <span style="color: #007020; font-weight: bold">except</span>:
        <span style="color: #007020; font-weight: bold">pass</span>
    <span style="color: #007020; font-weight: bold">return</span> proxy

<span style="color: #60a0b0; font-style: italic">#test multiple proxies concurrently</span>
<span style="color: #007020; font-weight: bold">with</span> concurrent<span style="color: #666666">.</span>futures<span style="color: #666666">.</span>ThreadPoolExecutor() <span style="color: #007020; font-weight: bold">as</span> executor:
executor<span style="color: #666666">.</span>map(test, results)

<span style="color: #60a0b0; font-style: italic">#to print the number of proxies</span>
<span style="color: #60a0b0; font-style: italic">#print(len(final))</span>

<span style="color: #60a0b0; font-style: italic">#save the working proxies to a file</span>
numpy<span style="color: #666666">.</span>save(<span style="color: #4070a0">&#39;file.npy&#39;</span>, final)
</pre></div>

In turn, it determined 99 items in the proxy server list.

## Proxies with asynchronous HTTP client/server library

We can also use the proxies in asynchronous HTTP client/server library [AIOHTTP](https://docs.aiohttp.org/en/stable/) for [asyncio](https://docs.aiohttp.org/en/stable/glossary.html#term-asyncio) and Python. Meanwhile [Aiohttp-proxy library](https://pypi.org/project/aiohttp-proxy/) assists with SOCKS proxy connector for [AIOHTTP](https://docs.aiohttp.org/en/stable/).

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007020; font-weight: bold">import</span> <span style="color: #0e84b5; font-weight: bold">aiohttp</span>
<span style="color: #007020; font-weight: bold">from</span> <span style="color: #0e84b5; font-weight: bold">aiohttp_proxy</span> <span style="color: #007020; font-weight: bold">import</span> ProxyConnector, ProxyType
<span style="color: #007020; font-weight: bold">import</span> <span style="color: #0e84b5; font-weight: bold">asyncio</span>
<span style="color: #007020; font-weight: bold">import</span> <span style="color: #0e84b5; font-weight: bold">sys</span>
<span style="color: #007020; font-weight: bold">import</span> <span style="color: #0e84b5; font-weight: bold">numpy</span>

<span style="color: #007020; font-weight: bold">if</span> sys<span style="color: #666666">.</span>version_info[<span style="color: #40a070">0</span>] <span style="color: #666666">==</span> <span style="color: #40a070">3</span> <span style="color: #007020; font-weight: bold">and</span> sys<span style="color: #666666">.</span>version_info[<span style="color: #40a070">1</span>] <span style="color: #666666">&gt;=</span> <span style="color: #40a070">8</span> <span style="color: #007020; font-weight: bold">and</span> sys<span style="color: #666666">.</span>platform<span style="color: #666666">.</span>startswith(<span style="color: #4070a0">&#39;win&#39;</span>):
asyncio<span style="color: #666666">.</span>set_event_loop_policy(asyncio<span style="color: #666666">.</span>WindowsSelectorEventLoopPolicy())

async <span style="color: #007020; font-weight: bold">def</span> <span style="color: #06287e">fetch</span>(url, proxy):
    host, port <span style="color: #666666">=</span> proxy<span style="color: #666666">.</span>split(<span style="color: #4070a0">&#39;:&#39;</span>)[<span style="color: #40a070">0</span>], proxy<span style="color: #666666">.</span>split(<span style="color: #4070a0">&#39;:&#39;</span>)[<span style="color: #40a070">1</span>]
    connector <span style="color: #666666">=</span> ProxyConnector(
    proxy_type<span style="color: #666666">=</span>ProxyType<span style="color: #666666">.</span>HTTP,
    host<span style="color: #666666">=</span>host,
    port<span style="color: #666666">=</span> <span style="color: #007020">int</span>(port),
    )
    async <span style="color: #007020; font-weight: bold">with</span> aiohttp<span style="color: #666666">.</span>ClientSession(connector<span style="color: #666666">=</span>connector,trust_env<span style="color: #666666">=</span><span style="color: #007020; font-weight: bold">True</span>) <span style="color: #007020; font-weight: bold">as</span> session:
    async <span style="color: #007020; font-weight: bold">with</span> session<span style="color: #666666">.</span>get(url) <span style="color: #007020; font-weight: bold">as</span> response:
    <span style="color: #007020; font-weight: bold">return</span> await response<span style="color: #666666">.</span>text()

<span style="color: #007020; font-weight: bold">if</span> **name** <span style="color: #666666">==</span> <span style="color: #4070a0">&quot;**main**&quot;</span>:
    data <span style="color: #666666">=</span> numpy<span style="color: #666666">.</span>load(<span style="color: #4070a0">&#39;file.npy&#39;</span>)
    loop <span style="color: #666666">=</span> asyncio<span style="color: #666666">.</span>get_event_loop()
    l <span style="color: #666666">=</span> loop<span style="color: #666666">.</span>run_until_complete(fetch(<span style="color: #4070a0">&#39;http://api.hh.ru/&#39;</span>, data[<span style="color: #666666">-</span><span style="color: #40a070">1</span>]))
    <span style="color: #007020">print</span>(l)
    loop<span style="color: #666666">.</span>run_until_complete(asyncio<span style="color: #666666">.</span>sleep(<span style="color: #40a070">0.1</span>))
    loop<span style="color: #666666">.</span>close()
</pre></div>

## Summary

In this article, we demonstrated how to scrape and utilize free proxies. Nevertheless, free easy proxy servers will quickly get flagged since too many people use them.

For more reliable service we recommend paid residential proxy servers that [Bright Data](https://brightdata.grsm.io/ntzo6z21fa32) provides. Formerly known as Luminaty the third-party service has a well-written api documentation for python that you can use to manage your proxies.

![python proxy server api](/images/posts/proxy/image-5.webp)

## Related Posts

- [Blockchain Data Indexer with TrueBlocks](https://dspyt.com/blockchain-data-indexer-with-trueblocks)
- [Advanced Realized Volatility and Quarticity](https://dspyt.com/advanced-realized-volatility-and-quarticity)
- [Machine Learning with Simple Sklearn Ensemble](https://dspyt.com/machine-learning-simple-sklearn-ensemble)
- [Parsiq Triggers for Axie Infinity](https://dspyt.com/blockchain-insights-with-parsiq-triggers-for-axie-infinity)
- [How to illustrate log returns vs simple returns](https://dspyt.com/simple-returns-log-return-and-volatility-simple-introduction)
- [A How to EfficientNet Classification](https://dspyt.com/efficientnet-classification)
