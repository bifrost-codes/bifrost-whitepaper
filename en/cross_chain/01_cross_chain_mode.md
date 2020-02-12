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

中本聪在比特币白皮书中提到过 SPV (Simplified Payment Verification) 简单支付验证的概念，通过简单支付验证能够在只存储区块头部信息的条件下对交易进行验证。

![light_node](/zh/light_node.png)

区块链中的每个区块有区块头和区块体组成，区块头包含能够验证区块体完整性、合法性的 Merkel 根。

Merkel 树是一颗平衡二叉树，底部叶子节点存储每笔交易的HASH，然后两两配对计算出新的HASH，重复上述操作直到输出一个结果，既 Merkel 根，并将其存入到区块头。

### 步骤
> 通过简单支付验证「交易1」的具体步骤

- 运行时模块向主链节点查询「交易1」的 Merkel Block 信息；
- 收到 Merkel Block 信息，既认证路径（HASH2, HASH34, HASH1234）；
- 运行时模块根据「交易1」、 Merkel Block 信息计算出 Merkel 根；
- 将计算出的 Merkel 根与区块头的 Merkel 根比对，一致则表明交易1是合法交易；