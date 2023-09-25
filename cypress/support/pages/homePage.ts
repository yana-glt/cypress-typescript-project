class HomePage{

    visitHomePAge(){
        cy.visit("/");
    }

    closePopup(){
        cy.get('.eom-buttons > :nth-child(1) > :nth-child(1) > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click();
    }

    typeToSearchBar(string: string){
        cy.get('#search-form > #container').type(`${string}{enter}`);
    }
}

export default HomePage;