# Consensus algorithm

> Bifrost will use the Polkadot-based PoS consensus algorithm-GRANDPA / BEBE, which is a hybrid consensus model that separates block production from the final determination of the block, so that the block is quickly produced and has probabilistic security. Asynchronous safe.

A more secure and resilient network can be established through the GRANDPA consensus. Under good network conditions, GRANDPA can complete the block almost instantaneously. Under bad network conditions, such as network partitioning, GRANDPA can complete a large number of blocks at one time (theoretically millions) during partition resolution.