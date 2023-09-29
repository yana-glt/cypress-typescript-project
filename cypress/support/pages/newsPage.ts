class NewsPage {

    checkTitle(){
        cy.get('#inner-header-container #title').invoke('text').should('be.equal', "News");
    }

}

export default NewsPage;