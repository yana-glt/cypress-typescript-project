import HomePage from "../support/pages/homePage";
import SearchResultPage from "../support/pages/searchResultPage";

/// <reference types="cypress" />

describe('Сheck inequality of the first videos on the youtube page', () => {
    const homePage = new HomePage();
    const searchResultPage = new SearchResultPage();

    beforeEach(() => {     
        homePage.visitHomePage();
        homePage.closePopup();
        homePage.typeToSearchBar("funny cats");
    });

    it('Сheck inequality of the titles of the first two videos', () => {  
        searchResultPage.isVideoTitlesEqual(0, 1);
    });

    it('Сheck inequality of the channels of the first two videos', () => {
        searchResultPage.isVideoChannelsEqual(0, 1);
    });

    it('Сheck inequality of the descriptions of the first two videos', () => {
        searchResultPage.isVideoDescriptionsEqual(0, 1);
    });

    it('Сheck inequality of the images of the first two videos', () => {
        searchResultPage.isVideoImagesEqual(0, 1);
    });

    it('Сheck inequality of the first two videos', () => {
        searchResultPage.isVideoTitlesEqual(0, 1);
        // different videos can have the same channel and description, but differ in title and image
        // searchResultPage.isVideoChannelsEqual(0, 1);
        // searchResultPage.isVideoDescriptionsEqual(0, 1);
        searchResultPage.isVideoImagesEqual(0, 1);
    });
});