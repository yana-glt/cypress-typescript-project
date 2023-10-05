class LivePage {

    checkTitle(){
        cy.fixture('selectors').then((selectors) => {
            cy.get(selectors.live_page.title).invoke('text').should('be.equal', 'Live');
        });
    }

}
export default LivePage;