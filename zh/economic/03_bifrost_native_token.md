# Bifrost Native Token（BNC）

Bifrost Native Token（BNC）是 Bifrost 网络中的主网代币，初始总供应量为 80,000,000，目前在 Bifrost 测试网中已经可以收到可在主网进行 1:1 兑换的 BNC 凭证用于前期社区分发，目前 BNC 不具备转账功能，且开放转账将分为 Bifrost 完成 PoA 启动、主网上线、删除 Sudo、转账提案通过这四个步骤进行。

## 价值捕获

* **衍生品流动性手续费：**Bifrost 网络中转账、交易、抵押等行为均需要支付一定的手续费来维持网络的问题，Bifrost 较提供 Flexable Fee 模块来支持各类资产支付手续费用，如 BNC、DOT、vDOT、KSM、vKSM 等资产均可以作为手续费使用，用于支付手续费的资产将被统一兑换为 BNC 后进入国库（Treasury）等待下一步治理分发。
* **竞价 Slash 抵押物：**参与票权竞价的节点需要抵押部分 BNC 用于获得 Bifrost 锁仓池中资产的投票，同时提高节点的 Slash 成本，该抵押物将根据节点的评分表现进行增加或减少。
* **治理凭证：**BNC 可以作为链上议会、技术委员会、国库拨款、公投治理、节点选举等所有链上治理功能，持有 BNC 即可获得 Bifrost 网络治理中的一份权利。
* Staking 收益捕获：通过 Bifrost 产生的 Staking 收益的 10% 将会用于 BNC 回购进入国库治理发放或销毁。

## 激励模型

预留和基金会部分根据 Bifrost 发展可能会推出更多激励方式，但是 Bifrost 不会进行零成本空投，任何激励方式都将满足基本价值捕获的原则。

* **vToken 持币激励：**vToken 流动性是 Bifrost 所能带来的最大价值，也是其经过长时间积累的壁垒所在，总量 15.2% 的 BNC 将于用来奖励兑换 vToken 的用户。 
* **IPO（Initial Parachain Offer）：**平行链首次竞拍成功对于 Bifrost 网络将会带来巨大价值，Bifrost 将会拿出总量约 12.8% 的 Token 用于奖励帮助 Bifrost 参拍平行链的团体。

## 参与角色

#### Validator：
> 通过平行线程或平行链卡槽随机分配的 Validator，该角色为 Polkadot 或 Kusama 网络中的 Validator，将执行 Bifrost 业务代码并进行区块最终态验证。
#### Collator：
> 负责收集用户调用数据及传递查询信息，Collator 将产生区块并交由 Validator 做最终验证。
#### Vote Bidder：
> 票权竞价人，通过提案公投选举，选举通过的账号成为 Vote Bidder 可以将需要被投票的节点地址进行绑定，具备竞价获得 Bifrost 投票池中投票的权利，如该角色发生 Slash 级别或次数触发上限，将被取消 Bidder 的权限。
#### Vote Asker：
>vToken 兑换或持有人，为协议委托票权拍卖方。
#### Notary：
> 通过提案公投选举产生，成为 Notary 需要配置签名私钥，参与多签认证，是异构跨链的中继通讯节点，进行消息同步、签名和转发，将根据签名次数获得 BNC 激励。
#### Council：
> 理事会主要被要求执行三项治理任务：提出全民公决，取消毫无争议的危险或恶意的全民公决以及选举技术委员会。
#### Technical Committee：
> 技术委员会可以与 Bifrost Council 一起制定紧急公投，快速进行投票和实施。,这些紧急公投仅在紧急情况下使用。
#### Sudo：
> 超级管理员，可有权限操作网络中任何参数，在网络测试阶段起到调整网络发展方向的功能，在 Bifrost 主网稳定运行之后将通过提案公投删除 Sudo 权限
