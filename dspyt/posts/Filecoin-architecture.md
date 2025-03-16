---
title: "Demystifying the Filecoin Virtual Machine (FVM)"
date: "December 14, 2023"
excerpt: "Unveiling the Architecture and Potential of the Filecoin Virtual Machine: Empowering Smart Contract Execution and Interoperability."
authors: ["pavel-fedotov"]
cover_image: "https://dspyt.com/images/posts/Filecoin/FVM.webp"
tags:
  [
    "Filecoin",
    "Filecoin FVM",
    "filecoin virtual machine",
    "Fil",
    "FVM",
    "ethereum",
    "data",
    "ipfs",
    "blockchain",
    "SES",
    "wasm",
    "web3",
    "ipld",
    "syscalls",
    "unix kernel",
    "evm",
    "actor model",
    "Hypervisors",
  ]
---

[The Filecoin Virtual Machine](https://fvm.filecoin.io/) (FVM) is a runtime environment for smart contracts (also called actors) on the Filecoin network. FVM brings user programmability to Filecoin, unleashing the enormous potential of an open data economy.

## Architectural Inspiration for FVM: Leveraging Hypervisors, the Actor Model, and Unix Kernel Principles

The Filecoin Virtual Machine (FVM) envisions a system that can host multiple runtimes and seamlessly connect them. This is critical due to the rapid development of blockchain runtimes, each catering to different developer communities, all necessitating access to storage, which the Filecoin network can provide.

Drawing inspiration from hypervisors, the actor model, and the Linux kernel, FVM's design incorporates:

- Hypervisors: Serving as the underlying substrate for hosting multiple runtimes, effectively virtualizing the machine.

- Actor Model: Acting as the interaction paradigm between runtimes and the associated contracts or workloads.

- Unix Kernel Principles: Providing isolation, memory management, environment setup, and storage abstractions, all accessible through syscalls.

These architectural influences play a crucial role in shaping FVM's capability to facilitate the seamless coordination and management of interactions among different actors within the network. Furthermore, FVM's handling of syscalls for accessing resources and services, its orchestration role, and its support for various smart contract runtimes highlight its significance as an integral component within the Filecoin ecosystem.

## The FVM: A Foundation for Versatile Smart Contract Execution

The Filecoin Virtual Machine (FVM) represents a WASM-based polyglot execution environment, leveraging wasmtine for its operations. It is adept at supporting native Filecoin actors written in languages that compile to WASM, and smart contracts designed for external runtimes such as the Ethereum Virtual Machine (EVM), Secure EcmaScript (SES), and eBPF.

Its inaugural version is deliberately simple to facilitate rapid developer onboarding, laying a robust groundwork for future innovations.

Drawing inspiration from UNIX architecture, the FVM is centered on the concept of syscalls, essential for accessing the environment and bypassing the sandbox. Additionally, it operates around the IPLD concept, serving as the data model for both the Filecoin blockchain and IPFS. All state reads and writes are translated into IPLD reads and writes using syscalls.

Furthermore, the FVM boasts foreign addressing support, allowing the assignment of addresses based on the semantics of another chain, thereby paving the way for abstract accounts. It also conducts gas accounting and execution halt through the instrumentation of Wasm bytecode.

Exciting potential future developments include async programming via continuations/futures, capability-orientation, time-locked transactions utilizing external beacons, parallel execution, native primitives for cross-chain interoperability, computation correctness proofs, and more. These ideas indicate the FVM's commitment to adaptability, security, and interoperability within the evolving landscape of decentralized technologies.

## Components of the Filecoin Virtual Machine (FVM)

The Filecoin Virtual Machine (FVM) is a fundamental component in the Filecoin network, enabling the execution of arbitrary user-provided code. The FVM is designed with various key features and components that play essential roles in its operation:

1. FVM Machine: represents the core of the Filecoin Virtual Machine, operating at specific times and states to process messages for execution.

2. Call Manager: oversees the execution process of a message, managing the order of operations and tracking gas usage to ensure efficient processing.

3. Invocation Container (IC): a sandbox for actor code, providing a controlled environment for each individual action to prevent issues such as reentrancy or recursion.

4. Syscalls: functions that enable actors to interact with the external world, allowing access to external resources and the efficient execution of complex operations.

5. Kernel: a pivotal component of the FVM, responsible for processing syscalls and managing the state for each invocation, ensuring secure and efficient execution.

6. Externs: Externs are functions provided by the Filecoin node to the FVM, facilitating communication between different programming languages if necessary and enhancing the flexibility of the FVM.

This comprehensive breakdown showcases the intricate technical design and capabilities of the FVM, shaping its role in enabling user-provided code execution and fostering innovation within the Filecoin network.

## Functions and Responsibilities of the Filecoin Virtual Machine (FVM)

These components collaborate to carry out the following functions:

1. Setting up Invocation Containers (ICs): each IC represents an isolated environment for executing distinct smart contracts.

- The FVM manages their lifetime and stacking.
- The FVM also sets up the WASM runtime and manages memory for every IC so that The smart contract can execute commands.

- Every IC has system calls (syscalls) as host-provided functions. These syscalls enable the IC to talk to other ICs or the outer Filecoin network as well.

- It can (potentially) access dynamically linked libraries. This means that the code in the container can access and use the functionality provided by these libraries, just as if
  they were compiled directly into the program - instead of being loaded at runtime.

2. Serving as the Orchestration Layer: the FVM acts as the orchestrator, effectively coordinating and managing interactions among different actors within the network.

- For instance, when an actor seeks to retrieve data from another actor, the FVM facilitates this interaction, ensuring proper communication between the actors and accurate data transfer.

3. Relaying Syscalls: the FVM handles the resolution of syscalls between the FVM-Node
   boundary (yellow arrow in the above diagram) or the container boundary (blue arrow). These
   system calls (syscalls) are made by actors to access resources and services provided by the
   host environment, such as the Filecoin network.

- When a smart contract within an invocation container needs to read or write data to the Filecoin network, it makes a syscall to the FVM, which acts as an intermediary,
  interacting with the network on behalf of the container.

- It is important to note that gas costs are incurred for these calls, contributing to the
  overall computational expenses.

4. Managing IPLD State Tree: the FVM effectively manages the Interplanetary Linked Data
   (IPLD) state tree - the data format behind IPFS and Filecoin. FVM is responsible for buffering writes from actors running within ICs until successful execution occurs. Additionally, it maintains memory caches and optimizes access patterns, employing techniques such as
   optimistic fetches to enhance efficiency and performance.

In summary, the Filecoin Virtual Machine operates as a software layer that runs on top of Filecoin nodes, facilitating the execution of smart contracts within isolated invocation containers (ICs). Its responsibilities encompass setting up ICs, serving as an orchestration layer, relaying syscalls, and managing the IPLD state tree. Together, these functions enable the functionality of smart contracts, drive the growth of the Filecoin ecosystem, and foster innovative applications.

## Further Resources

- [Unlocking the Full Potential of Filecoin with the FVM](https://dspyt.com/Filecoin-FVM)
- [Filecoin Storage Network Energy Consumption Data Challenge](https://dspyt.com/Filecoin_analysis)
- [What is a blockchain address?](https://dspyt.com/what-is-blockchain-address)
- [Blockchain Data Indexer with TrueBlocks](https://dspyt.com/blockchain-data-indexer-with-trueblocks)
- [Panel data with python – An easy introduction](https://dspyt.com/panel-data-econometrics-an-introduction-with-an-example-in-python)
- [Machine Learning with Simple Sklearn Ensemble](https://dspyt.com/machine-learning-simple-sklearn-ensemble)
- [How to illustrate log returns vs simple returns](https://dspyt.com/simple-returns-log-return-and-volatility-simple-introduction)
- [A How to EfficientNet Classification](https://dspyt.com/efficientnet-classification)
- [Cross-sectional data – An easy introduction](https://dspyt.com/cross-sectional-data-an-easy-introduction)
- [Advanced Realized Volatility and Quarticity](https://dspyt.com/advanced-realized-volatility-and-quarticity)
