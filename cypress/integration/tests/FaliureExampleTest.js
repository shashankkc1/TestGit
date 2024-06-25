import landingPage from "../../PageObjects/landingPage"
import loginPage from "../../PageObjects/loginPage"
import memorablePage from "../../PageObjects/memorablePage"
import Dashboard from '../../PageObjects/dashboard';

describe("Test to showcase failure in reporting", () => {

    before(function () {
        // runs once before all tests in the it block

    })

    it("should not be able to login with invalid credentials", () => {

        /*
        Click on Login button
        Enter invalid username
        Enter invalid password
        Click on Login button
        Verify that an error message is displayed
        */
        cy.visit("https://onlinetest.hrbs.co.uk/landing")
        const landing = new landingPage()
        const login = new loginPage()
        landing.loginButton().click()
        login.username.type('invalidUser')
        login.password.type('invalidPassword')
        login.loginButton.click()
        login.errorMessage.should('be.visible')
        login.errorMessage.should('contain', 'Have you entered your details correctly?')
    })

    it("Vrify that account type is correct for a given account number", () => {
        /*
        Click on Login button
        Enter valid username
        Enter valid password
        Click on Login button
        Verify that login is successful
        */

        cy.visit("https://onlinetest.hrbs.co.uk/landing")
        const landing = new landingPage()
        const login = new loginPage()
        const memorable = new memorablePage()
        const dashboard = new Dashboard()
        landing.loginButton().click()
        login.username.type('testuser5@gmail.com')
        login.password.type('Calque7*')
        login.loginButton.click()
        cy.url().should('include', '/memorable')
        memorable.memorableChar1.type('1')
        memorable.memorableChar2.type('1')
        memorable.memorableChar3.type('1')
        memorable.confirmButton.click()
        // Add assertions to verify that login is successful
        // Verify that dashboard page is displayed
        cy.url().should('include', '/dashboard')
        // Verify that the user is logged in
        cy.get('.dxp-screen-title').should('contain', 'Account Overview')
        cy.get('.PO-0-body').should('be.visible')
        cy.get('dxp-key-value-list.PO-productsKeyValueList  p.mat-line span.mat-line').each(($el, index, $list) => {
            const text = $el.text()
            if (text.includes('99003005554')) {
                dashboard.accountType().eq(index).should('contain', '4 Year Fixed Rate')
            }
        })


    })
})