/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
        * Custom command to check if element exist in DOM.
        * @example cy.isElementExist('cssSelector')
        */
        isElementExist(elmt: string): Cypress.Chainable<boolean>
    }
}