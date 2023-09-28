import 'cypress-if'

class HomePage{

    visitHomePage(){
        cy.visit("/");
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
}

export default HomePage;