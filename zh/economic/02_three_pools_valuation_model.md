# 三池估值模型

> PoS 通证存在三个相连的蓄水池里，分别是资本池，现金池和投机池，Bifrost 通过给资本池提供流动性，合并资本池和投机池的大部分需求，同时通过鲍莫尔托宾模型动态调整 Stake 利率和兑换成本，提升资本池总容量，增加 Bifrost 收入。

<img :src="$withBase('/zh/three_pools.png')" alt="three_pools">

根据上图鲍莫尔-托宾模型公式得出，通过降低用户兑换赎回成本，增加 Stake 利率，则用户所需平均现金余额越小，用户人均持有 Stake 资产比例越高。同时 Bifrost 从底层提供 Stake 的流动性，使 Stake 资产满足投机需求，将整体提升 Stake 池的总容量。
