class MoviesPage {

    checkTitle(){
        cy.fixture('selectors').then((selectors) => {
            cy.xpath(selectors.generic_title_for_each_explore_section_page).invoke('text').should('be.equal', 'Movies');
        });
    }

}

export default MoviesPage;