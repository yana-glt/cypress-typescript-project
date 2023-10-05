import 'cypress-if';
import selectors from "../fixtures/selectors.json";

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
        cy.get(':nth-child(1) > #items > :nth-child(3)').click();
    }

    checkTrendingTitleAndGoToTrendingPage() {
        cy.fixture('selectors').then((selectors) => {
            cy.get(selectors.home_page.navigation_titles).contains('Trending').click();
        })
    }

    checkMusicTitleAndGoToMusicPage() {
        cy.fixture('selectors').then((selectors) => {
            cy.get(selectors.home_page.navigation_titles).contains('Music').click();
        })
    }

    checkMoviesTitleAndGoToMoviesPage() {
        cy.fixture('selectors').then((selectors) => {
            cy.get(selectors.home_page.navigation_titles).contains('Movies').click();
        })
    }

    checkLiveTitleAndGoToLivePage() {
        cy.fixture('selectors').then((selectors) => {
            cy.get(selectors.home_page.navigation_titles).contains('Live').click();
        })
    }

    checkGamingTitleAndGoToGamingPage() {
        cy.fixture('selectors').then((selectors) => {
            cy.get(selectors.home_page.navigation_titles).contains('Gaming').click();
        })
    }

    checkNewsTitleAndGoToNewsPage() {
        cy.fixture('selectors').then((selectors) => {
            cy.get(selectors.home_page.navigation_titles).contains('News').click();
        })
    }

    checkSportsTitleAndGoToSportsPage() {
        cy.fixture('selectors').then((selectors) => {
            cy.get(selectors.home_page.navigation_titles).contains('Sports').click();
        })
    }

}

export default HomePage;