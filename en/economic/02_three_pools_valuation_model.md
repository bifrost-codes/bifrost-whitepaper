# Three pool valuation model

> PoS tokens are stored in three connected reservoirs, namely the capital pool, the cash pool and the speculative pool. Bifrost provides liquidity to the capital pool and merges most of the demand from the capital pool and speculative pool. The Tobin model dynamically adjusts the Stake interest rate and conversion costs to increase the total capacity of the capital pool and increase Bifrost revenue.

<img :src="$withBase('/en/three_pools.png')" alt="three_pools" />

According to the above formula of the Bowmore-Tobin model, by reducing the user's redemption cost and increasing the Stake interest rate, the smaller the average cash balance required by the user, the higher the proportion of Stake assets per user. At the same time, Bifrost provides the liquidity of Stake from the bottom, so that Stake assets meet speculative demand, which will increase the overall capacity of the Stake pool as a whole.