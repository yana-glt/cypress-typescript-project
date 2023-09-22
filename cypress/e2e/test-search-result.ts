import HomePage from "../support/pages/homePage";
import SearchResultPage from "../support/pages/searchResultPage";

/// <reference types="cypress" />

describe('Сheck inequality of the first videos on the youtube page', () => {
    it('Check youtube page', () => {
        const homePage = new HomePage();
        const searchResultPage = new SearchResultPage();
        homePage.visitHomePAge();
        homePage.closePopup();
        homePage.typeToSearchBar("funny cats");
        searchResultPage.isVideoEquals(0, 1);
    });
});