# Staking gain mechanism

> Bifrost calculates the exchange rate per second from the bottom through the actual income, and realizes other network-wide clearing and settlement by real-time adjustment of the exchange rate with the original chain assets without the need for a centralized server. Other business parallel chains can be covered by Bifrost Staking settlement income without additional development. .

## Real Time Exchange Rates
Calculate the real-time exchange rate per day for the day based on the actual receipt of Bifost on the previous day. Calculate the next-second exchange rate by (1 + return per second) * current exchange rate = next-second exchange rate formula. Synchronized to each Bifrost node, the user can realize the final income collection through exchange.

## Automatic compound interest
According to the different rules of each PoS public chain, the Staking income collection cycle also varies from hourly to daily. The Bifrost clearing module will uniformly minimize the time granularity of the income to every second, that is, after the Staking income is collected, it will automatically perform Staking again to achieve the original The compound interest of the chain assets, at the same time, calculate the real-time exchange rate based on the current actual receipts to help users achieve automatic compounding.

## Cross-platform
Since Staking income is issued through exchange rate growth, it naturally has the property of cross-platform income. Users only need to hold Stake Token for a certain period of time, and they can enjoy the growth rate of exchange rate during that period. Other parallel chains do not need to integrate the clearing and settlement module to realize the distribution of user benefits through exchange rate growth.

## No need to lock up
Stake Token also has transaction liquidity while the exchange rate is increasing. When users redeem the original chain assets, they can sell based on the current exchange rate and market price, and they can immediately obtain the original chain assets.