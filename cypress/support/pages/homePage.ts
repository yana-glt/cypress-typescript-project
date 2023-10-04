import 'cypress-if'

class HomePage{

    visitHomePage(){
        cy.visit("/");
    }

    closePopup(){
        cy.isElementExist('#dialog .body').then(() => {
            cy.get('.eom-buttons > :nth-child(1) > :nth-child(1) button').click();
        })
    }

    typeToSearchBar(string: string){
        cy.get('#search-form > #container').type(`${string}{enter}`);
    }
}

export default HomePage;