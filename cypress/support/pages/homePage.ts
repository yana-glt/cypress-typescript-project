import 'cypress-if'

class HomePage{

    visitHomePage(){
        cy.visit("/", { 
            onBeforeLoad(win) {
                Object.defineProperty(win.navigator, 'language', { value: 'en-EN' }); 
                Object.defineProperty(win.navigator, 'languages', { value: ['en'] }); 
                Object.defineProperty(win.navigator, 'accept_languages', { value: ['en'] });
            }, headers: {'Accept-Language': 'en',},
        });
    }

    closePopup(){
        // cy.get('#dialog .body')
        //     .if('visible').find('.eom-buttons > :nth-child(1) > :nth-child(1) button').click()
        //     .else().log('**popup is not visible**');

        cy.get('body[dir="ltr"]:has(#dialog .body)').then((el) => {
            cy.wrap(el).get('.eom-buttons > :nth-child(1) > :nth-child(1) button').click();
        });
    }

    typeToSearchBar(string: string){
        cy.get('#search-form > #container').type(`${string}{enter}`);
    }

    goToSubscriptionsPage(){
        cy.get('[role="navigation"] > #items > :nth-child(3)').click();
    }

    checkTrendingTitle() {
        cy.get(':nth-child(4) > #items > :nth-child(1) .title').invoke('text').should('be.equal', 'Trending');
    }

    goToTrendigPage() {
        cy.get(':nth-child(4) > #items > :nth-child(1)').click();
    }

    checkMusicTitle() {
        cy.get(':nth-child(4) > #items > :nth-child(2) .title').invoke('text').should('be.equal', 'Music');
    }

    goToMusicPage(){
        cy.get(':nth-child(4) > #items > :nth-child(2)').click();
    }

    checkMoviesTitle() {
        cy.get(':nth-child(4) > #items > :nth-child(3) .title').invoke('text').should('be.equal', 'Movies');
    }

    goToMoviesPage(){
        cy.get(':nth-child(4) > #items > :nth-child(3)').click();
    }

    checkLiveTitle() {
        cy.get(':nth-child(4) > #items > :nth-child(4) .title').invoke('text').should('be.equal', 'Live');
    }

    goToLivePage(){
        cy.get(':nth-child(4) > #items > :nth-child(4)').click();
    }

    checkGamingTitle() {
        cy.get(':nth-child(4) > #items > :nth-child(5) .title').invoke('text').should('be.equal', 'Gaming');
    }

    goToGamingPage(){
        cy.get(':nth-child(4) > #items > :nth-child(5)').click();
    }

    checkNewsTitle() {
        cy.get(':nth-child(4) > #items > :nth-child(6) .title').invoke('text').should('be.equal', 'News');
    }

    goToNewsPage(){
        cy.get(':nth-child(4) > #items > :nth-child(6)').click();
    }

    checkSportsTitle() {
        cy.get(':nth-child(4) > #items > :nth-child(7) .title').invoke('text').should('be.equal', 'Sports');
    }

    goToSportsPage(){
        cy.get(':nth-child(4) > #items > :nth-child(7)').click();
    }

}

export default HomePage;