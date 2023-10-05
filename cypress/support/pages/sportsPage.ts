class SportsPage {

    checkTitle(){
        cy.fixture('selectors').then((selectors) => {
            cy.get(selectors.sports_page.title).invoke('text').should('be.equal', 'Sports');
        });
    }

}

export default SportsPage;