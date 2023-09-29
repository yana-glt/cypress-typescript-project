class MoviesPage {

    checkTitle(){
        cy.get('#channel-container #text').invoke('text').should('be.equal', "Movies");
    }

}

export default MoviesPage;