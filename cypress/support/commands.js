// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

import landingPage from "../PageObjects/landingPage"
import loginPage from "../PageObjects/loginPage"

// -- This is a parent command --
 Cypress.Commands.add('login', (username, password) => {

    cy.visit("https://onlinetest.hrbs.co.uk/landing")
    const landing = new landingPage()
    const login = new loginPage()
    landing.loginButton().click()
    login.username.type(username)  
    login.password.type(password)
    login.loginButton.click()

 })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })