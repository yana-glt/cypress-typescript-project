class GamingPage {

    checkTitle(){
        cy.fixture('selectors').then((selectors) => {
            cy.get(selectors.gaming_page.title).invoke('text').should('be.equal', 'Gaming');
        });
    }

}

export default GamingPage;