# Interop bridge

> There are differences in the consensus models currently used in mainstream public chains, resulting in no unified cross-chain model. In order to support the cross-chain of mainstream POS public chains and achieve bi-directional cross-chain operation, Bifrost transfer bridge uses a hybrid cross-chain model combining witnesses and side chains. Bifrost uses the identity of the side chain to access the head information of each main chain block to successfully light nodes, and deploys multi-signature escrow contracts on the main chain. Witness nodes perform multiple sign operations on the main chain contract.

## Main chain operation Bifrost
- Users initiate token transfer operations on the escrow contract on the main chain;
- Custody contract locks user tokens;
- The transit bridge light node performs SPV verification on user transactions;
- After successful verification, issue the corresponding amount of main chain mapping tokens on the Bifrost chain;

## Bifros Operation Main Chain
- The user initiates a transfer operation on the Bifrost chain;
- Bifrost chain lockout transfer amount;
- Transit bridge witness node 1-N performs multiple signings on the mainnet withdrawal transaction data;
- Transit Bridge Witness Day X sends the multi-signature withdrawal transaction to the main network;
- The main chain escrow contract verifies the multi-signature transaction and executes it automatically, and the cash amount is transferred to the user account;
- The transit bridge light node found that the main network withdrawal transaction was successful and destroyed the previously locked amount;

<img :src="$withBase('/en/interoperability_bridge.png')" alt="interoperability_bridge" />

The Bifrost transfer bridge mainly has two functions of asset cross-chain and Stake interoperability. Users lock assets on the original chain through the transfer bridge, and then map the cross-chain assets with additional attributes of Stake on Bifrost 1: 1. Stake assets on the original chain to the target node to generate revenue. After receiving the instructions from the transfer bridge to start receiving revenue, Bifrost will issue cross-chain asset revenue to the corresponding account in proportion to the age of the currency held by the cross-chain asset. Stake automatically compound interest effect.

When the user wants to redeem the original chain asset, he can directly match the transaction through the DEX corresponding transaction pair, but the price of the cross-chain asset with the Stake attribute in Bifrost and the original chain asset cannot be kept stable 1: 1 (the reason is in the cross-chain mapping (Specific introduction), if the user needs a stable 1:1 exchange relationship, he can send an UnStake instruction to the original chain through the transition bridge and wait for the original chain UnStake lock period to be completed, and the user will redeem the original chain assets in equal amounts.