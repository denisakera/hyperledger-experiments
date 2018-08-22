# Court of Venice 1594 business network

## Hyperledger composer experiment in "translating" the "Merchant of Venice" play

It is a business network revolving around a defaulted and then an exonerated bond between a Lender, Guarantor, and Borrower.

## Participants

**Lender**: Shylock gives 3000 ducats without usury for 3 months with a collateral (Merry bond).

**Notary**: Anonymous notary in Venice confirms the contract between Antonio (guarantor) and Shylock (lender) to give a loan to Bassanio (borrower, debtor). Approval of the bond.

**Guarantor**: Antonio guarantees to repay the loan in 3 months or give one pound of his flesh to Shylock.

**Borrower**: Bassanio who needs 3000 ducats.

**Judge**: Doctor Balthasar who notifies the ledger if the bond/loan was repaid or defaulted (received by lender).
Holds a rule that if the bond defaults, collateral has to be executed.
Holds a rule forbidding a collateral with Christian blood < 0.
Triggers a law confiscating the property of a person *“conspiring against the life of a Venetian citizen - half of his wealth and property will go to the state and the other half to Antonio”*.
Executes or exonerates a defaulted bond/collateral rule.
Executes a rule on acquiring all assets from Lender if blood is included in a bond.

## Assets

**Loan**: 3000 ducats
**Collateral**: Pound of flesh
**Confiscated property?**

## Transactions (scenarios)

**Loan is initiated**
Notary confirms/notifies the ledger:
Changes the status of the loan to ‘APPROVED’.
Borrower/debtor gets 3000 ducats from the lender.
Initiates a rule that in 3 months (DateTime) guarantor will repay the loan to the lender.
Guarantor provides a collateral to guarantee the bond (1 pound of flesh) - new asset is created after the signature?

**Loan is repaid**
Guarantor sends 3000 ducats to Lender in <3 months.
Lender notifies the ledger and Collateral changes status to ‘ANNULLED’

**Loan defaults**
Guarantor does not send any payment after 3 months (lender account does not get 3000 ducats after three months from “Loan Initiated”).
The Judge changes the status of the collateral to “INITIATED”.
Lender demands the Guarantor for a one pound of flesh.
Judge sends notification that the bond on one pound of flesh does not include blood. Judge executes a rule/law on blood of Venetian citizens.
Lender sends notification/request to exonerate the loan.

**Loan and collaretral exonerated**
Judge executes a rule on acquiring all assets from Lender if blood is included in a bond. Lender loses all his property and has to convert to Christianity.
