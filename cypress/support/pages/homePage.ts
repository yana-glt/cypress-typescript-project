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
        cy.isElementExist('#dialog .body').then(() => {
            cy.get('.eom-buttons > :nth-child(1) > :nth-child(1) button').click();
        })
    }

    typeToSearchBar(string: string){
        cy.get('#search-form > #container').type(`${string}{enter}`);
    }

    goToSubscriptionsPage(){
        cy.get(':nth-child(1) > #items > :nth-child(3)').click();
    }
}

export default HomePage;