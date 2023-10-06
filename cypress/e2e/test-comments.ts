import HomePage from "../support/pages/homePage";
import SearchResultPage from "../support/pages/searchResultPage";
import VideoPage from "../support/pages/videoPage";

/// <reference types="cypress" />

describe("Verify that users can see comments on video", () => {
    const homePage = new HomePage();
    const searchResultPage = new SearchResultPage();
    const videoPage = new VideoPage();

    beforeEach(() => {     
        homePage.visitHomePage();
        homePage.closePopup();
    });

    it('Verify that users can see comment section, author of the first comment, time elapsed since it was posted, and comment itself', () => {
        homePage.typeToSearchBar("funny dogs");
        searchResultPage.goToVideoPage(1);
        videoPage.checkCommentsSection();
    });
    
});