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

    checkTrendingTitleAndGoToTrendingPage() {
        cy.get('@selectors').then((selectors) => {
            cy.get(selectors.home_page.navigation_titles).contains('Trending').click();
        })
    }

    checkMusicTitleAndGoToMusicPage() {
        cy.get('@selectors').then((selectors) => {
            cy.get(selectors.home_page.navigation_titles).contains('Music').click();
        })
    }

    checkMoviesTitleAndGoToMoviesPage() {
        cy.get('@selectors').then((selectors) => {
            cy.get(selectors.home_page.navigation_titles).contains('Movies').click();
        })
    }

    checkLiveTitleAndGoToLivePage() {
        cy.get('@selectors').then((selectors) => {
            cy.get(selectors.home_page.navigation_titles).contains('Live').click();
        })
    }

    checkGamingTitleAndGoToGamingPage() {
        cy.get('@selectors').then((selectors) => {
            cy.get(selectors.home_page.navigation_titles).contains('Gaming').click();
        })
    }

    checkNewsTitleAndGoToNewsPage() {
        cy.get('@selectors').then((selectors) => {
            cy.get(selectors.home_page.navigation_titles).contains('News').click();
        })
    }

    checkSportsTitleAndGoToSportsPage() {
        cy.get('@selectors').then((selectors) => {
            cy.get(selectors.home_page.navigation_titles).contains('Sports').click();
        })
    }
    
}

export default HomePage;