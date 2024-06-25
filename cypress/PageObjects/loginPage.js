class loginPage {
    get username() {
        return cy.get('#mat-input-0')
    }
    get password() {
        return cy.get('#mat-input-1')
    }
    get loginButton() {
        return cy.get('.PO-login > .mat-focus-indicator > .mat-button-wrapper > dxp-progress-button > .ng-star-inserted')
    }
    get errorMessage() {
        return cy.get('.dxp-warn-alert')
    }
    
}

export default loginPage;