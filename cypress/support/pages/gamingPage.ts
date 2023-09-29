class GamingPage {

    checkTitle(){
        cy.get('#inner-header-container #title').invoke('text').should('be.equal', "Gaming");
    }

}

export default GamingPage;