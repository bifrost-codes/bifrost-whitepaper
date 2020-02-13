<div
style=" display:flex;justify-content:space-between;align-items:center;margin-top: 1.6rem"> 
<h1 >互操作转接桥</h1>
<ClientOnly><button-demo> </button-demo></ClientOnly>
</div>

> 目前主流的公链采用的共识模式存在差异，导致没有统一跨链模式。为了支持主流 POS 公链的跨链，实现跨链的双向操作，Bifrost 转接桥使用了见证人和侧链相结合的混合跨链模式。Bifrost 以侧链的身份，接入各个主链区块头部信息成功轻节点，在主链上部署多签托管合约，由见证人节点对主链合约进行多签操作。

## 主链操作 Bifrost
- 用户在主链上对托管合约发起代币转入操作；
- 托管合约锁定用户代币；
- 转接桥轻节点对用户交易做 SPV 验证；
- 验证成功后，在 Bifrost 链上发行相应金额的主链映射代币；

## Bifros 操作主链
- 用户在 Bifrost 链发起转出操作；
- Bifrost 链锁定转出金额；
- 转接桥见证人节点 1 - N 对主网提现交易数据进行多签；
- 转接桥见证人节 X 将多签提现交易发送给主网；
- 主链托管合约验证多签交易并自动执行，提现金额转入用户账户；
- 转接桥轻节点发现主网提现交易成功，将之前锁定的金额销毁；

<img :src="$withBase('/zh/interoperability_bridge.png')" alt="interoperability_bridge">

Bifrost 转接桥主要具备资产跨链和 Stake 互操作两种功能，用户把资产通过转接桥在原链上锁定，之后在 Bifrost 1:1 映射具备 Stake 附加属性的跨链资产，同时通过转接桥将原链上的资产 Stake 到目标节点中产生收益，由转接桥出发收益领取指令后，Bifrost 将按照跨链资产的持有币龄按比例发放跨链资产收益到相应账户中，以此产生 Stake 自动复利效果。

用户想要赎回原链资产时，可通过 DEX 相应交易对直接进行撮合交易，但 Bifrost 中具备 Stake 属性的跨链资产与原链资产的价格无法稳定保持 1:1（原因由跨链映射中具体介绍），如若用户需要稳定的 1:1 兑换关系，可以通过转接桥向原链发送 UnStake 指令，等待原链 UnStake 锁定期完成后，用户将等额赎回原链资产。