class MusicPage {

    checkTitle(){
        cy.get('#inner-header-container #title').invoke('text').should('be.equal', "Music");
    }

}

export default MusicPage;