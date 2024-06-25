//"use strict"
import assertionFunctions from '../utils/assertionFunctions'
import memorablePage from "../../PageObjects/memorablePage"
import Dashboard from '../../PageObjects/dashboard';

let testdata;

describe('Enquire Account', () => {

    //   let testData

    before(function () {
        // runs once before all tests in the it block
        cy.fixture('enquireAccount').then((data) => {
            //testData = data
            //  this.data = data
            testdata = data;
        })
    })

    it('Verify the account type is correct for give account', function () {
        const assertion = new assertionFunctions()
        const memorableInfoPage = new memorablePage()
        const dashboard = new Dashboard()
        cy.login(testdata.username, testdata.password);
        assertion.validateUrlContains('/memorable')
        memorableInfoPage.memorableChar1.type('1')
        memorableInfoPage.memorableChar2.type('1')
        memorableInfoPage.memorableChar3.type('1')
        memorableInfoPage.confirmButton.click()
        cy.url().should('include', '/dashboard')
        assertion.elementShouldContainText(cy.get('.dxp-screen-title'), 'Account Overview')
        dashboard.title().should('contain', 'Account Overview')
        dashboard.body().should('be.visible')
        dashboard.accountNumber().each(($el, index, $list) => {
            if ($el.text().includes(testdata.accountNumber)) {
                dashboard.accountType().eq(index).should('contain', testdata.expectedaccountType)
            }
        })
    })

    it('Verify Account Details', function () {

        const assertion = new assertionFunctions()
        const memorableInfoPage = new memorablePage()
        const dashboard = new Dashboard()
        cy.login(testdata.username, testdata.password);
        assertion.validateUrlContains('/memorable')
        memorableInfoPage.memorableChar1.type('1')
        memorableInfoPage.memorableChar2.type('1')
        memorableInfoPage.memorableChar3.type('1')
        memorableInfoPage.confirmButton.click()
        cy.url().should('include', '/dashboard')
        dashboard.title().should('contain', 'Account Overview')
        dashboard.listAccountNumbers().each(($el, index, $list) => {
            if ($el.text().includes(testdata.accountNumber)) {
                dashboard.viewAccountButton().eq(index).click().then(() => {
                    cy.wait(3000)
                })
            }
        })
        let bal, bal1;
        bal = dashboard.listAccountBalances().then(($el) => {
            return $el.text()
        })
        cy.log(bal)
        bal.should('contain', '£40,000.00')

    })

})
