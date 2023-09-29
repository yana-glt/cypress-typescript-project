class LivePage {

    checkTitle(){
        cy.get('#inner-header-container #title').invoke('text').should('be.equal', "Live");
    }

}
export default LivePage;