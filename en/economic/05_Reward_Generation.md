# 收益产生方式

当 Bifrost 协议锁仓池中的资产进入投票池中时，进入投票池方法将分为竞价投票（默认）和自行治理，竞价投票原 Token 所对应的票权将由竞价人（具备竞价票权权利的候选验证人）竞价获得，通过此方式，用户的投票权将通过 Bifrost 进行代理，指定投票给特定时间内出出价最高的竞价人。该方式本质上是将原先 Staking 收益由收益分账的模式改变为 “先付后租”，将不同 PoS 公链的 Staking 收益标准化，绕过不同收益规则带来的限制。

## 票权市场
竞选机制，放弃了收益分账的模式，验证人如果想要进入 Bifrost 的验证者集，必须首先进行收益率出价，即告诉协议，愿意给使用协议的 Staker 多少比例的收益。倘若出价为10%，并最终被协议所接受，无论该验证者的实际收益率是多少，都将按照 10% 向协议分享收益，《Share Holder Votes For Sale》为该功能提供了更多延展和论证说明。

* 竞价人出价 < Staking 收益，类比为竞价人配置佣金 > 0%，存在利润，用户获得正常收益

* 竞价人出价 = Staking 收益，类比为竞价人配置佣金 = 0%，不存在利润，用户获得原链最高收益

* 竞价人出价 > Staking 收益，类比为竞价人配置佣金 < 0%，存在补贴，用户获得高于原链的溢价收益

根据市场对票权需求，投票竞价将产生不同的结果，通常情况下，用户提名产生的 Staking 收益将由验证人扣除佣金后进行发放，而通过投票竞价的方式，验证人将转变为竞价人角色，出价高低将根据市场需求进行波动，根据对市场的理性判断，竞价人将出价控制在低于 Staking 收益的范围，获得用户 Staking 收益的利润，当市场对票权需求旺盛时，竞价人将支付溢价才能获得投票，用户将获得竞价人支付的溢价作为 Staking 收益，该情况下用户获得的 Staking 收益将会高于原链的最高收益。

## 自行治理
用户将绕过竞价人出价过程，根据自身决策选择指定竞价人进行成交，但是所产生收益依然需要遵循 Bifrost 收益分发规则，进行回购金、保险金和渠道金的扣除。

## 收益结构：
* 回购金 10%，定期回购 BNC
* 保险金 1 ~ 5%，抵押资金被 Slash 时风险分摊，根据 Slash 历史情况进行浮动
* 渠道金 3%，根据渠道贡献进行分发
* 用户发放 82 ~ 86%，进入原 Token 铸币池，通过提升铸币价格将收益发放至用户