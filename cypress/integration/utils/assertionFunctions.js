class assertionFunctions {



    validateText(actualText, expectedText) {
        expect(actualText).to.equal(expectedText);
    }

    validateElementIsVisible(element) {
        expect(element).to.be.visible;
    }

    validateElementIsNotVisible(element) {
        expect(element).to.not.be.visible;
    }

    validateUrlContains(expectedUrl) {
        cy.url().should('include', expectedUrl);
    }

    elementShouldContainText(element, expectedText) {
        element.should('contain', expectedText);
    }

    elementShouldNotContainText(element, expectedText) {
        element.should('not.contain', expectedText);
    }
}

export default assertionFunctions;

//export default new assertionFunctions();
