# 概述

Bifrost 是一条使用 Substrate 开发的垂直于 Staking 生态的 Polkadot 平行链，底层基于 WebAssembly，LIBP2P 和 GRANDPA 共识，让用 户可以在资产跨链的同时完成 Staking 并获得相应权益。

Bifrost 使用转接桥的跨链方式接入多条 PoS 主 链，通过跨链的 Staking 资产具备无需锁仓、自动复 利、Staking 代理等优势，用户将 EOS、DOT、ATOM 等资产通过 Bifrost 转接桥映 射进入 Bifrost 平行链，将会获得对应的映射资产 (vDOT、vKSM、vEOS 等)，用户只需持有映射 资产即可根据持有量获得对应 Staking 收益。

Bifrost 支持 One Asset One Vote 的资产挖矿模 式，根据用户跨链映射进来的 EOS、DOT、ATOM 等多种资产的市值衡量挖矿权重，沿用比特币从零 开始逐步减半的模式发行新币，公平分配系统发行 的 BNC。

Bifrost 作为 Polkadot 架构平行链，从底层提供 Staking 逻辑，构建在 Bifrost 之上的 DEX、DApp 等应用将获得原生的 Staking 增益，此种方式将很大 程度上扩充 Staking 场景，用户在充值映射或 DEX 直接购买跨链资产的同时，就被动参与到了 Staking 的生态建设当中来。