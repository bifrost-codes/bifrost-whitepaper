# Off-Chain Worker

> Off-Chain Worker is a subsystem of Bifrost, which can perform long-running, non-deterministic tasks (such as web requests, encryption / decryption and data signing, random number generation, CPU-intensive calculations, and enumeration of data on the chain Citation / aggregation, etc.). These tasks tend to take longer than block execution.

Off-Chain Worker has its own WASM execution environment outside the runtime. Therefore, long-term tasks running in the Off-Chain Worker will not affect the normal generation of blocks. In addition, Off-Chain Workers can easily access on-chain states for complex calculations.

<img :src="$withBase('/zh/offchain_worker.png')" alt="offchain_worker" />

## Advantage
> Off-Chain Worker has the following advantages over oracles

- Off-Chain Worker, as part of the node, is more decentralized than the centralized oracle service;
- Off-Chain Worker can securely and seamlessly interact with the runtime by executing transactions;
- No need to maintain external services, reducing node maintenance facility maintenance costs;
- Off-Chain Worker can be upgraded seamlessly through standard governance mechanism;

## Features
> What features does Bifrost combine with Off-Chain Worker

- Regular settlement;
- Transaction signature and multi-signature;
- Public chain contract call;
- Public chain account control;
- Third-party exchange price synchronization;