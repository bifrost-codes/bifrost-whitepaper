<div
style=" display:flex;justify-content:space-between;align-items:center;margin-top: 1.6rem"> 
<h1 >Staking 增益机制</h1>
<ClientOnly><button-demo> </button-demo></ClientOnly>
</div>

> Bifrost 从底层通过实际收益计算出每秒汇率，通过实时调整与原链资产汇率来实现其他全网清算结算，无需中心化服务器参与，其他业务平行链无需额外开发即可被Bifrost Staking 结算收益覆盖。

## 实时汇率
通过前一日 Bifost 实际领取收益计算出当日每秒实时汇率，通过 (1 + 每秒收益率) * 当前汇率 = 下一秒汇率 公式计算出下一秒汇率，并在区块打包同时，将汇率同步到每个 Bifrost 节点，用户可以通过汇兑来实现最终收益的领取。

## 自动复利
根据每条 PoS 公链的规则不同，Staking 收益领取周期也从每小时至每天不等，Bifrost 清算模块会统一收益时间粒度最小为每秒，即在 Staking 收益领取之后，自动进行再次 Staking，实现原链资产的复利，同时根据当前实际领取收益计算出实时兑换汇率，来帮助用户实现自动复利。

## 跨平台
由于 Staking 收益通过汇率增长形式进行发放，故天然具备收益跨平台的属性，用户仅需持有 Stake Token 某时间，即可享受该时间段内汇率的增长收益。其他平行链无需集成清结算模块即可通过汇率增长实现用户收益的发放。

## 无需锁仓
Stake Token 在汇率不断增长的同时，也具备交易流动性，用户在赎回原链资产时，可根据当前汇率和市场价格进行卖出，即可立即获得原链资产。

