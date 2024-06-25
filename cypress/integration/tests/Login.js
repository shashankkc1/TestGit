describe("Login Validation", () => {
    it("should not be able to login with invalid credentials", () => {
        cy.visit("https://onlinetest.hrbs.co.uk/landing")
        cy.get('.PO-customerLogon > .mat-focus-indicator').click()
        cy.get('#mat-input-0').type('test')
        cy.get('#mat-input-1').type('test')
        cy.get('.PO-login > .mat-focus-indicator > .mat-button-wrapper > dxp-progress-button > .ng-star-inserted').click()
        // Add assertions to verify that login is unsuccessful
        // For example, you can assert that an error message is displayed
        //cy.get('.error-message').should('be.visible')
        cy.get('.dxp-warn-alert').should('be.visible')
        cy.get('.dxp-warn-alert').should('contain', 'Have you entered your details correctly?')

        //cy.login('test', 'test')
    })

    it("should be able to login with valid credentials", () => {
        cy.visit("https://onlinetest.hrbs.co.uk/landing")
        cy.get('.PO-customerLogon > .mat-focus-indicator').click()
        cy.get('#mat-input-0').type('testuser5@gmail.com')
        cy.get('#mat-input-1').type('Calque7*')
        cy.get('.PO-login > .mat-focus-indicator > .mat-button-wrapper > dxp-progress-button > .ng-star-inserted').click()
        // Add assertions to verify that login is successful
        // For example, you can assert that the user is redirected to the dashboard page
        cy.url().should('include', '/memorable')
        cy.get('#mat-input-2').type('1')
        cy.get('#mat-input-3').type('1')
        cy.get('#mat-input-4').type('1')
        cy.get('.PO-confirm > .mat-focus-indicator > .mat-button-wrapper > dxp-progress-button > .ng-star-inserted').click()

    })
})