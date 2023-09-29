class SportsPage {

    checkTitle(){
        cy.get('#inner-header-container #title').invoke('text').should('be.equal', "Sports");
    }

}

export default SportsPage;