import HomePage from "../support/pages/homePage";
import TrendingPage from "../support/pages/trendingPage";
import MusicPage from "../support/pages/musicPage";
import MoviesPage from "../support/pages/moviesPage";
import LivePage from "../support/pages/livePage";
import GamingPage from "../support/pages/gamingPage";
import NewsPage from "../support/pages/newsPage";
import SportsPage from "../support/pages/sportsPage";

/// <reference types="cypress" />

describe('Check that the explore section titles on the home page and on each section page are the same', () => {
    const homePage = new HomePage();
    const trendingPage = new TrendingPage();
    const musicPage = new MusicPage();
    const moviesPage = new MoviesPage();
    const livePage = new LivePage();
    const gamingPage = new GamingPage();
    const newsPage = new NewsPage();
    const sportsPage = new SportsPage();

    beforeEach(() => {     
        homePage.visitHomePage();
        homePage.closePopup();
    });
    
    it('Check Trending title', () => {
        homePage.checkTrendingTitle();
        homePage.goToTrendigPage();
        trendingPage.checkTitle();
    });

    it('Check Music title', () => {
        homePage.checkMusicTitle();
        homePage.goToMusicPage();
        musicPage.checkTitle();
    });

    it('Check Movies title', () => {
        homePage.checkMoviesTitle();
        homePage.goToMoviesPage();
        moviesPage.checkTitle();
    });

    it('Check Live title', () => {
        homePage.checkLiveTitle();
        homePage.goToLivePage();
        livePage.checkTitle();
    });

    it('Check Gaming title', () => {
        homePage.checkGamingTitle();
        homePage.goToGamingPage();
        gamingPage.checkTitle();
    });

    it('Check News title', () => {
        homePage.checkNewsTitle();
        homePage.goToNewsPage();
        newsPage.checkTitle();
    });

    it('Check Sports title', () => {
        homePage.checkSportsTitle();
        homePage.goToSportsPage();
        sportsPage.checkTitle();
    });

});