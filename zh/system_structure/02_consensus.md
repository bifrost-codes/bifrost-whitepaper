<div
style=" display:flex;justify-content:space-between;align-items:center;margin-top: 1.6rem"> 
<h1 >共识算法</h1>
<ClientOnly><button-demo> </button-demo></ClientOnly>
</div>

> Bifrost 将使用基于 Polkadot 的 PoS 共识算法 —— GRANDPA / BEBE，这是一种混合共识模型，将区块生产与区块的最终确定分离开来，使区块快速生产且具有概率安全性，是异步安全的。

通过 GRANDPA 共识可以建立一个更安全，更有弹性的网络。在良好的网络条件下，GRANDPA几乎可以瞬间完成分块。在糟糕的网络条件下，比如网络分区，GRANDPA可以在分区解析时一次性完成大量的块(理论上是数百万个)。

