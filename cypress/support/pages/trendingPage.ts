class TrendingPage {

    checkTitle(){
        cy.fixture('selectors').then((selectors) => {
            cy.get(selectors.trending_page.title).invoke('text').should('be.equal', 'Trending');
        });
    }

}

export default TrendingPage;