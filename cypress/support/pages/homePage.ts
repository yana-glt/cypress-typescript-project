class HomePage{

    visitHomePAge(){
        cy.visit("/");
    }

    closePopup(){
        cy.get('.eom-buttons > :nth-child(1) > :nth-child(1) > yt-button-shape > button').click();
    
    }

    typeToSearchBar(string: string){
        cy.get('#search-form > #container').type(`${string}{enter}`);
    }
}

export default HomePage;