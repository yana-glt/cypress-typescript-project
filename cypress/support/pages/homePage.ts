class HomePage{

    visitHomePAge(): void{
        cy.visit("/");
    }

    closePopup(): void{
        cy.get('.eom-buttons > :nth-child(1) > :nth-child(1) > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click();
    }

    typeToSearchBar(string: string): void{
        cy.get('#search-form > #container').type(`${string}{enter}`);
    }
}

export default HomePage;