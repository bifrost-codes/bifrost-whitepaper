# 参与角色

* **Validator：**通过平行线程或平行链卡槽随机分配的 Validator，该角色为 Polkadot 或 Kusama 网络中的 Validator，将执行 Bifrost 业务代码并进行区块最终态验证。
* **Collator：**负责收集用户调用数据及传递查询信息，Collator 将产生区块并交由 Validator 做最终验证。
* **Vote Bidder：**票权竞价人，通过提案公投选举，选举通过的账号成为 Vote Bidder 可以将需要被投票的节点地址进行绑定，具备竞价获得 Bifrost 投票池中投票的权利，如该角色发生 Slash 级别或次数触发上限，将被取消 Bidder 的权限。
* **Vote Asker：**vToken 兑换或持有人，为协议委托票权拍卖方。
* **Notary：通过提案公投选举产生，成为 Notary 需要配置签名私钥，参与多签认证，是异构跨链的中继通讯节点，进行消息同步、签名和转发，将根据签名次数获得 BNC 激励。
* **Council：**理事会主要被要求执行三项治理任务：提出全民公决，取消毫无争议的危险或恶意的全民公决以及选举技术委员会。
* **Technical Committee：**技术委员会可以与 Bifrost Council 一起制定紧急公投，快速进行投票和实施。,这些紧急公投仅在紧急情况下使用。
* **Sudo：**超级管理员，可有权限操作网络中任何参数，在网络测试阶段起到调整网络发展方向的功能，在 Bifrost 主网稳定运行之后将通过提案公投删除 Sudo 权限
