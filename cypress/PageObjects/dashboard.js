class Dashboard{
    title(){
        return cy.get('.dxp-screen-title');
    }
    body(){
        return cy.get('.PO-0-body');
    }
    accountType(){
        return cy.get('dxp-key-value-list.PO-productsKeyValueList  h4.mat-line');
    }
    accountNumber(){
        return cy.get('dxp-key-value-list.PO-productsKeyValueList  p.mat-line span.mat-line');
    }
    viewAccountButton(){
        return cy.get('.PO-viewAccount .mat-button-wrapper');
    }
    listAccountBalances(){
        return cy.get('.PO-availbleBalanceKeyValueList p.mat-line span.mat-line');
    }

    listAccountNumbers(){
        return cy.get('dxp-key-value-list.PO-productsKeyValueList  p.mat-line span.mat-line');
    }
}
export default Dashboard;