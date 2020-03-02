# Security Mechanism

## account security
- Bifrost provides users with an account encryption scheme based on the ed25519 and sr25519 algorithms.
- Multi-signature for cross-chain operation
- Public chain account and contract maintenance costs (deployment, upgrade RAM, transaction CPU / GAS)

## Asset Security
The assets locked by the user in the main chain through the cross-chain are multi-signed by the escrow contract, and the escrow contract is jointly managed by multiple witness nodes. Through the decentralized governance mechanism, the witness nodes are elected by the participants according to the voting share, and are rotated regularly. At the same time, when the assets held by the main chain escrow contract are too large, they can be split into multiple escrow contracts, and more trust node groups are introduced for custody to improve overall security.