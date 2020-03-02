# Off-Chain Worker

> Off-Chain Worker 是 Bifrost 的子系统，其中可以执行需要长期运行、非确定性的任务（例如，Web请求，加密/解密和数据签名，随机数生成，CPU密集型计算，链上数据的枚举/聚合等） 。这些任务的执行相比块执行往往需要更长时间。

Off-Chain Worker 在运行时之外有自己的 WASM 执行环境。因此运行在 Off-Chain Worker 中的长期任务不会影响到区块的正常产生。 此外，Off-Chain Worker 可以轻松访问链上状态，用以进行复杂计算。

<img :src="$withBase('/zh/offchain_worker.png')" alt="offchain_worker">

## 优势
> Off-Chain Worker 相比预言机主要有以下几点优势

- Off-Chain Worker 作为节点的一部分，相比中心化的预言机服务，更具去中心化特性；
- Off-Chain Worker 能够通过执行交易做到安全、无缝地与运行时进行交互；
- 无需维护外部服务，减少节点运营者设施维护费用；
- 可以通过标准治理机制对 Off-Chain Worker 无缝地进行功能升级；

## 功能
> Bifrost 结合 Off-Chain Worker 提供哪些功能

- 定时结算；
- 交易签名、多签；
- 公链合约调用；
- 公链账户控制；
- 第三方交易所价格同步；