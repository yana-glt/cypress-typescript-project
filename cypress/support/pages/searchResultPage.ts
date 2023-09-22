class SearchResultPage{

    isVideoEquals(firstToCompare: number, secondToCompare: number) {
        cy.get('#contents ytd-video-renderer > #dismissible > .text-wrapper > #meta > #title-wrapper').as('listOfTitles');
        cy.get('@listOfTitles').eq(firstToCompare).invoke('text').then(text => {
            cy.get('@listOfTitles').eq(secondToCompare).invoke('text').then(text2 => {
                expect(text).to.not.equal(text2);
            })
        })

        cy.get('#contents ytd-video-renderer > #dismissible > .text-wrapper > #channel-info > #channel-name').as('listOfChannels');
        cy.get('@listOfChannels').eq(firstToCompare).invoke('text').then(text => {
            cy.get('@listOfChannels').eq(secondToCompare).invoke('text').then(text2 => {
                expect(text).to.not.equal(text2);
            })
        })

        cy.get('#contents ytd-video-renderer > #dismissible > .text-wrapper > .metadata-snippet-container').as('listOfDescriptions');
        cy.get('@listOfDescriptions').eq(firstToCompare).invoke('text').then(text => {
            cy.get('@listOfDescriptions').eq(secondToCompare).invoke('text').then(text2 => {
                expect(text).to.not.equal(text2);
            })
        })

        cy.get('#contents ytd-video-renderer > #dismissible >ytd-thumbnail #thumbnail > yt-image > img').as('listOfImages');
        cy.get('@listOfImages').eq(firstToCompare).invoke('attr', 'src').then(text => {
            cy.get('@listOfImages').eq(secondToCompare).invoke('attr', 'src').then(text2 => {
                expect(text).to.not.equal(text2);
            })
        })
    }
}
export default SearchResultPage;