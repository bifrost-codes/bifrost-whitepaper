# Participants

* **Validator:**A Validator randomly assigned through a parachain or parallel slot, which role is a Validator in Polkadot or Kusama network, will execute Bifrost business code and perform block final state validation.
* **Collator:**Responsible for collecting user call data and passing query information, Collator will generate blocks and submit to Validator for final validation.
* **Vote Bidder:**Elected by proposition referendum as a bidder who can bind the address of the node that needs to be voted on, has the right to bid for votes in the Bifrost voting pool. They will be disenfranchised if Slash level or limits are triggered.
* **Vote Asker:**Vote rights provider
* **Notary:**Elected by proposition referendum, becoming a Notary requires configuration of signing private key, participates in multi-signature authentication. Notary is a heterogeneous cross-chain relay communication node that synchronizes information, signs and transmit messages, and receives BNC incentives based on the number of signatures.
* **Council:**Council performs three main governance tasks: proposing referendums, cancelling uncontroversially dangerous or malicious referendums, and electing technical committees.
* **Technical Committee:**Technical Committee can work with the Bifrost Council to develop emergency referendums that can be voted on and implemented quickly. These emergency referendums are only used in emergency situations.
* **Sudo:**Super Admin, with the ability to manipulate any parameter on the network, to adjust the direction of the network during the testing phase, and to remove Sudo privileges through a referendum once the Bifrost mainnet is stable.
