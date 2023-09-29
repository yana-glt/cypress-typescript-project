class TrendingPage {

    checkTitle(){
        cy.get('#channel-container #text').invoke('text').should('be.equal', "Trending");
    }

}

export default TrendingPage;