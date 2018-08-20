/* global getFactory getAssetRegistry getParticipantRegistry emit */

/**
 * Create the LOC asset
 * @param {org.venice.court.ApproveLoan} al - approveLoan transaction
 * @transaction
 */
async function approveLoan(al) { // eslint-disable-line no-unused-vars
    console.log('approveLoan');
      
      const factory = getFactory();
      const NS = 'org.venice.court';
    
    const assetRegistry = await getAssetRegistry(al.loan.getFullyQualifiedType());
    const loan = factory.newRelationship(NS, 'Loan', al.LoanforBessanio);
    const owner = factory.newRelationship(NS, 'Borrower', al.getIdentifier());
    const participantRegistry = await getParticipantRegistry(NS + '.Notary'); // eslint-disable-line no-undef
    const approval = getCurrentParticipant(NS, 'Notary', al.getIdentifier()); // eslint-disable-line no-undef
      
    //al.loan.status ='APPROVED';
      
      if (loan.approval.length === 1) {
      loan.status = 'APPROVED';
      
      await assetRegistry.update(al.loan);
     }
     }
    
        /**
             * Create the participants needed for the demo
             * @param {org.venice.court.Demo} dm -  CreateDemoParticipants transaction
             * @transaction
             */
            async function demo(dm) { // eslint-disable-line no-unused-vars
            const factory = getFactory();
            const NS = 'org.venice.court';
            
            const registry = await getParticipantRegistry(NS + '.Borrower');
            const borrower = factory.newResource(NS, 'Borrower', 'Bessanio');
            borrower.participantId = 'Bessanio';
            await registry.add(borrower);
            
            const registry2 = await getParticipantRegistry(NS + '.Lender');
            const lender = factory.newResource(NS, 'Lender', 'Shylock');
            lender.participantId = 'Shylock';
            await registry2.add(lender);
            
            const registry3 = await getAssetRegistry(NS + '.Loan');
            const loan = factory.newResource(NS, 'Loan', 'LoanforBessanio');
          //  loan.owner = factory.newRelationship(NS, 'Lender', 'Shylock');
            loan.status = 'PENDING';
            await registry3.add(loan);
            
            const registry4 = await getParticipantRegistry(NS + '.Guarantor');
            const guarantor = factory.newResource(NS, 'Guarantor', 'Antonio');
            guarantor.participantId = 'Antonio';
            await registry4.add(guarantor);
              
            const registry5 = await getParticipantRegistry(NS + '.Notary');
            const notary = factory.newResource(NS, 'Notary', 'VeniceNotary');
            guarantor.participantId = 'VeniceNotary';
            await registry5.add(notary);
            
            //const registry6 = await getAssetRegistry(NS + '.Collateral');
            //const collateral = factory.newResource(NS, 'Collateral', 'MerryBond');
            //collateral.owner = factory.newRelationship(NS, 'Guarantor', 'Antonio');
            //collateral.status = null
            //collateral.amount = 1
            //collateral.measurmentUnits = 'Pound'
            //collateral.type = 'Flesh'
           // await registry3.addAll([collateral]);
             
            }