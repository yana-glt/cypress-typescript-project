class SearchResultPage{

    isVideoTitlesEqual(firstToCompare: number, secondToCompare: number) {
        cy.get('#contents > ytd-video-renderer > #dismissible > .text-wrapper > #meta > #title-wrapper').as('listOfTitles');
        cy.get('@listOfTitles').eq(firstToCompare).invoke('text').then(text => {
            cy.get('@listOfTitles').eq(secondToCompare).invoke('text').should('be.not.equal', text);
        });
    };

    isVideoChannelsEqual(firstToCompare: number, secondToCompare: number) {
        cy.get('#contents > ytd-video-renderer > #dismissible > .text-wrapper > #channel-info > #channel-name').as('listOfChannels');
        cy.get('@listOfChannels').eq(firstToCompare).invoke('text').then(text => {
            cy.get('@listOfChannels').eq(secondToCompare).invoke('text').should('be.not.equal', text);
        });
    };

    isVideoDescriptionsEqual(firstToCompare: number, secondToCompare: number) {
        cy.get('#contents > ytd-video-renderer > #dismissible > .text-wrapper > .metadata-snippet-container').as('listOfDescriptions');
        cy.get('@listOfDescriptions').eq(firstToCompare).invoke('text').then(text => {
            cy.get('@listOfDescriptions').eq(secondToCompare).invoke('text').should('be.not.equal', text);
        });
    };

    isVideoImagesEqual(firstToCompare: number, secondToCompare: number) {  
        cy.get('#contents > ytd-video-renderer > #dismissible > ytd-thumbnail > #thumbnail > yt-image > img').as('listOfImages');
        cy.scrollTo(0, 500);
        cy.get('@listOfImages').eq(firstToCompare).should('have.attr', 'src').then(src => {
            cy.get('@listOfImages').eq(secondToCompare).should('have.attr', 'src').should("be.not.equal", src);
        });
    };
}

export default SearchResultPage;