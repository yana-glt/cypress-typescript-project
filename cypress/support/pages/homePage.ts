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
        cy.fixture('selectors').as('selectors');
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
        cy.get('@selectors').then((selectors) => {
            cy.get(selectors.home_page.trending_title).invoke('text').should('be.equal', 'Trending');
        });
    };

    goToTrendigPage() {
        cy.get('@selectors').then((selectors) => {
            cy.get(selectors.home_page.trending_title).click();
        });
    };

    checkMusicTitle() {
        cy.get('@selectors').then((selectors) => {
            cy.get(selectors.home_page.music_title).invoke('text').should('be.equal', 'Music');
        });
    };

    goToMusicPage(){
        cy.get('@selectors').then((selectors) => {
            cy.get(selectors.home_page.music_title).click();
        });
    };

    checkMoviesTitle() {
        cy.get('@selectors').then((selectors) => {
            cy.get(selectors.home_page.movies_title).invoke('text').should('be.equal', 'Movies');
        });
    };

    goToMoviesPage(){
        cy.get('@selectors').then((selectors) => {
            cy.get(selectors.home_page.movies_title).click();
        });
    };

    checkLiveTitle() {
        cy.get('@selectors').then((selectors) => {
            cy.get(selectors.home_page.live_title).invoke('text').should('be.equal', 'Live');
        });
    };

    goToLivePage(){
        cy.get('@selectors').then((selectors) => {
            cy.get(selectors.home_page.live_title).click();
        });
    };

    checkGamingTitle() {
        cy.get('@selectors').then((selectors) => {
            cy.get(selectors.home_page.gaming_title).invoke('text').should('be.equal', 'Gaming');
        });
    };

    goToGamingPage(){
        cy.get('@selectors').then((selectors) => {
            cy.get(selectors.home_page.gaming_title).click();
        });
    };

    checkNewsTitle() {
        cy.get('@selectors').then((selectors) => {
            cy.get(selectors.home_page.news_title).invoke('text').should('be.equal', 'News');
        });
    };

    goToNewsPage(){
        cy.get('@selectors').then((selectors) => {
            cy.get(selectors.home_page.news_title).click();
        });
    };

    checkSportsTitle() {
        cy.get('@selectors').then((selectors) => {
            cy.get(selectors.home_page.sports_title).invoke('text').should('be.equal', 'Sports');
        });
    };

    goToSportsPage(){
        cy.get('@selectors').then((selectors) => {
            cy.get(selectors.home_page.sports_title).click();
        });
    };

}

export default HomePage;