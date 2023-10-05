class NewsPage {

    checkTitle(){
        cy.fixture('selectors').then((selectors) => {
            cy.get(selectors.music_page.title).invoke('text').should('be.equal', 'News');
        });
    }

}

export default NewsPage;