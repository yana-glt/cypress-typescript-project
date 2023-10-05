class MoviesPage {

    checkTitle(){
        cy.fixture('selectors').then((selectors) => {
            cy.get(selectors.movies_page.title).invoke('text').should('be.equal', 'Movies');
        });
    }

}

export default MoviesPage;