class MusicPage {

    checkTitle(){
        cy.fixture('selectors').then((selectors) => {
            cy.get(selectors.music_page.title).invoke('text').should('be.equal', 'Music');
        });
    }

}

export default MusicPage;