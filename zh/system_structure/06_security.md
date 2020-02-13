<div
style=" display:flex;justify-content:space-between;align-items:center;margin-top: 1.6rem"> 
<h1 >安全机制</h1>
<ClientOnly><button-demo> </button-demo></ClientOnly>
</div>

## 账户安全
- Bifrost 为用户提供基于 ed25519、sr25519 算法的账户加密方案。
- 跨链操作多签
- 公链账户、合约维护费用（部署、升级RAM，交易CPU/GAS）

## 资产安全
用户通过跨链锁定在主链的资产由托管合约进行多签保管，托管合约由多个见证人节点共同管理。见证人节点通过去中心化治理机制有参与方按照投票份额选举产生，定期轮换。同时，当主链托管合约所保管资产过于庞大时，可以拆分到多个托管合约中，引入更多信托节点分组进行保管，提升整体安全性。