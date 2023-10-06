class SearchResultPage{

    isVideoTitlesEqual(firstToCompare: number, secondToCompare: number) {
        cy.get(".text-wrapper #video-title").should('have.length.greaterThan', 2).as('listOfTitles');
        cy.get('@listOfTitles').eq(firstToCompare).invoke('text').then(text => {
            cy.get('@listOfTitles').eq(secondToCompare).invoke('text').should('be.not.equal', text);
        });
    };

    isVideoChannelsEqual(firstToCompare: number, secondToCompare: number) {
        cy.get('#channel-info .yt-simple-endpoint').should('have.length.greaterThan', 2).as('listOfChannels');
        cy.get('@listOfChannels').eq(firstToCompare).invoke('text').then(text => {
            cy.get('@listOfChannels').eq(secondToCompare).invoke('text').should('be.not.equal', text);
        });
    };

    isVideoDescriptionsEqual(firstToCompare: number, secondToCompare: number) {
        cy.get('.text-wrapper .metadata-snippet-container').should('have.length.greaterThan', 2).as('listOfDescriptions');
        cy.get('@listOfDescriptions').eq(firstToCompare).invoke('text').then(text => {
            cy.get('@listOfDescriptions').eq(secondToCompare).invoke('text').should('be.not.equal', text);
        });
    };

    isVideoImagesEqual(firstToCompare: number, secondToCompare: number) {
        cy.get('ytd-video-renderer #thumbnail img').should('have.length.greaterThan', 2).as('listOfImages');
        cy.scrollTo(0, 500);
        cy.get('@listOfImages').eq(firstToCompare).should('have.attr', 'src').then(src => {
            cy.get('@listOfImages').eq(secondToCompare).should('have.attr', 'src').should("be.not.equal", src);
        });
    };

    goToVideoPage(number: number){
        cy.get('ytd-video-renderer #thumbnail img').eq(number).click();
    };
}

export default SearchResultPage;