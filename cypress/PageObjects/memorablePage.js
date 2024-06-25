class memorablePage {
  
    get memorableChar1() {
        return cy.get('#mat-input-2')
    }
    get memorableChar2() {
        return cy.get('#mat-input-3')
    }
    get memorableChar3() {
        return cy.get('#mat-input-4')
    }
    get confirmButton() {
        return cy.get('.PO-confirm > .mat-focus-indicator > .mat-button-wrapper > dxp-progress-button > .ng-star-inserted')
    }
}

export default memorablePage;