# Cross-chain asset mapping

> The cross-chain assets mapped from the original chain to Bifrost, in addition to retaining all the functions of the cross-chain, also provide assets with the Stake bonus attribute. You only need to hold to get the corresponding amount of original chain assets Stake. Freely tradable assets.

In a rational market, the cross-chain assets that are mapped to Bifrost should be priced in the market within the original chain asset's X time, and X is the freezing time required for the original chain asset UnStake.

When users need to sell the original chain assets, they do not need to perform the UnStake operation. They can directly sell the original chain asset's X time option price in DEX. Therefore, the price fluctuations of the original chain assets and the supply and demand of cross-chain assets are expected to affect Bifrost's corresponding The price of cross-chain assets, which is why the prices of the cross-chain assets and the original chain assets mentioned in the previous chapter cannot maintain a stable 1: 1.

<img :src="$withBase('/zh/user_assets_01.png')" alt="<img :src=&quot;$withBase('/en/user_assets_02.png')&quot; alt=&quot;user_assets_02&quot; />" />

<img :src="$withBase('/zh/user_assets_02.png')" alt="<img :src=&quot;$withBase('/en/user_assets_02.png')&quot; alt=&quot;user_assets_02&quot; />" />

Bifrost cross-chain assets will also provide trading pairs of stablecoins and original chain assets in DEX. In non-extreme cases (cross-chain asset prices deviate significantly), users do not need to wait for UnStake time when they need to redeem the original chain assets. The redemption of the original chain asset can be completed by matching the cross-chain asset with the original chain asset transaction pair, and the spread can be used as the transaction fee for the immediate redemption of the original chain asset.

Within Bifrost's incentive rules, the corresponding channel (Bkifrost node) selected by the user's cross-chain asset mapping will receive 10% of the user's asset mining revenue to stimulate nodes to educate more users to complete the asset's cross-chain operation.