# Cross-chain Model

## Data Verify
> At present, there are three typical cross-chain technologies: 1. Witness 2. Hash lock 3. Side chain.

### 1. Witness Model
The most understandable cross-chain solution. Chain B wants to know the transactions happening on chain A, and let multiple witnesses forward the transactions happening on chain A independently. In fact, it is the Oracle oracle system that we often hear. Chain B records the data forwarded by multiple witnesses in a similar multi-signature form. This mode applies to smart contracts or multi-signature addresses.

### Hash Lock Model
The earliest appeared in Bitcoin's Lightning Network, cross-chain asset exchange supports a certain number of A chain assets and a certain number of B chain assets for atomic exchange. Hash time lock cleverly uses hash locks and time locks to force the receiver of the asset to determine the receipt within a timeout period and generate a receipt certificate to the sender, otherwise the asset will be returned to the sender. The receipt certificate can be used by the payer to obtain the equivalent amount of assets on the receiver's blockchain or trigger other events. Hash lock is currently only suitable for the exchange of partial assets or key data.

### Side Chain Model
Compared to the main chain, the side chain stores the block data and ledger data in the main chain-light nodes. The basic technology implemented by the side chain is Two-way Peg. Through two-way anchoring technology, digital assets can be locked on the main chain. SPV technology is used to verify the main chain transaction. After verification, the equivalent Assets are released in a parachain. Conversely, when the related assets in the parallel chain are locked, the equivalent assets anchored on the main chain can also be released. The implementation of this cross-chain is simple, and relative hash locking can provide more cross-chain interaction scenarios.

## Light Node
In order to verify the correctness of the main chain transaction on the parallel chain, the main chain block must be synchronized to the parallel chain. However, if you want to synchronize the full node block information of the main chain, you need to occupy tens or even hundreds of Gb of storage space, which is not a reasonable processing method. Relatively large nodes require a huge amount of storage. Light nodes only synchronize block header information (the size of each block's header is tens of bytes), and eventually occupy only tens of Mb of space, which is an economical and reasonable choice.

Satoshi Nakamoto mentioned the concept of Simple Payment Verification (SPV) in the Bitcoin white paper. Through simple payment verification, transactions can be verified under the condition that only the block header information is stored.

<img :src="$withBase('/en/light_node.png')" alt="light_node" />

Each block in the blockchain consists of a block header and a block body. The block header contains a Merkel root that can verify the integrity and legality of the block body.

The Merkel tree is a balanced binary tree. The leaf nodes at the bottom store the Hash of each transaction, and then pairwise calculate the new Hash. Repeat the above operation until a result is output, that is, the Merkel root, and it is stored in the block header.

### Step
> Specific steps to verify "Transaction 1" with simple payment

- The runtime module queries the Merkel Block information of "Transaction 1" from the main chain node;
- Received Merkel Block information, both authentication paths (HASH2, HASH34, HASH1234);
- The runtime module calculates the Merkel root based on the "Transaction 1" and Merkel Block information;
- Compare the calculated Merkel root with the Merkel root of the block header. If they match, it indicates that transaction 1 is a legal transaction;