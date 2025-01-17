---
title: "Getting Started with o1js: A Beginner's Guide to Zero Knowledge Programming"
date: "January 18, 2025"
excerpt: "The o1js TypeScript library facilitates the creation of zero knowledge proofs and zk smart contracts on the Mina blockchain."
cover_image: "/images/posts/Mina/TypesMina.webp"
authors: ["pavel-fedotov"]
tags:
  [
    "mina",
    "o1js",
    "SnarkyJS",
    "mina protocol",
    "zero-knowledge",
    "zk-SNARKs",
    "blockchain",
    "privacy",
    "decentralized applications",
    "open-source",
    "developer tools",
    "cryptography",
    "Mina ecosystem",
    "zkApps",
    "tutorial",
    "TypeScript",
    "zero-knowledge proofs",
    "cryptographic proofs",
  ]
---

In the rapidly evolving world of blockchain and cryptography, zero knowledge proofs (zk) have emerged as a pivotal technology. They enable one party to prove to another that they know a value without revealing the value itself. o1js is a powerful TypeScript library designed specifically for creating zero knowledge proofs and zk smart contracts on the Mina blockchain. In this tutorial, we'll explore the basic concepts of o1js and help you get started.

## What is o1js?

o1js is a TypeScript library that serves two main purposes:

1. Writing general-purpose zero knowledge (zk) programs.
2. Developing zk smart contracts for the Mina blockchain.

At its core, o1js allows developers to write zkApps — applications that can execute securely and privately while proving correct execution.

## Setting Up Your Environment

Before delving into coding with o1js, you need to install the library. The easiest way to do this is via npm:

```bash
npm i o1js
```

We recommend using the [zkApp CLI](https://docs.minaprotocol.com/zkapps/writing-a-zkapp/introduction-to-zkapps/how-to-write-a-zkapp), which provides helpful tools to facilitate your journey with o1js. The easiest way to do this is to first install via npm:

```bash
npm install -g zkapp-cli
```

And initialize an example project:

```bash
zk example
```

## Key Concepts in o1js

### 1. Field Elements

Field elements are the fundamental units of data in o1js. A Field can store an integer value up to approximately 256 bits, similar to a `uint256` in Solidity. The maximum value that can be stored in a Field is a massive number:

28,948,022,309,329,048,855,892,746,252,171,976,963,363,056,481,941,560,715,954,676,764,349,967,630,336.

**Example of Adding Two Numbers:**

In traditional programming, you might write:

```javascript
const sum = 1 + 3;
```

In o1js, you would represent this operation as:

```typescript
const sum = new Field(1).add(new Field(3));
```

This can be simplified using auto-promotion:

```typescript
const sum = new Field(1).add(3);
```

### 2. Built-in Data Types

o1js provides several data types for various applications. Some commonly used types are:

- `Bool`: Represents a boolean value.
- `Field`: For integers (up to Field limits).
- `UInt64`, `UInt32`: Use these to constrain numbers to 64 bits and 32 bits, respectively.
- `PrivateKey`, `PublicKey`, `Signature`: Useful for managing accounts and digital signing.
- `Group`: Represents points on an elliptic curve.
- `CircuitString`: A string with a maximum length of 128 characters.

**Example of Using Data Types:**

```typescript
const x = Field(10);
const b = Bool(true);
```

### 3. Conditional Statements

Traditional `if` statements are not supported in o1js. Instead, use `Circuit.if()` for conditional logic:

```typescript
const x = Circuit.if(new Bool(foo), a, b); // behaves like `foo ? a : b`
```

### 4. Functions

Functions work much like they do in TypeScript:

```typescript
function addOneAndDouble(x: Field): Field {
  return x.add(1).mul(2);
}
```

### 5. Common Methods

Some frequently used methods in o1js include:

```typescript
let x = new Field(4); // x = 4
x = x.add(3); // x = 7
x = x.sub(1); // x = 6
x = x.mul(3); // x = 18
x = x.div(2); // x = 9
```

### 6. Hashing and Signing

Hashing and signing are essential for zk applications:

```typescript
const hash = Poseidon.hash([x]); // Hashes an array of Fields
const privKey = PrivateKey.random(); // Generate a random private key
const pubKey = PublicKey.fromPrivateKey(privKey); // Derive public key
const sig = Signature.create(privKey, [hash]); // Sign a message
sig.verify(pubKey, [hash]); // Verify the signature
```

## Conclusion

o1js simplifies the process of writing zero knowledge proofs while providing a rich set of tools for development. By understanding its basic concepts, you can start creating secure and private applications on the Mina blockchain.

To dive deeper, explore the [o1js reference](https://docs.minaprotocol.com/zkapps/o1js-reference) for a comprehensive list of functions and features. Happy coding!
