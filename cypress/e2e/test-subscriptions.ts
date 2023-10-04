import HomePage from "../support/pages/homePage";
import SubscriptionsPage from "../support/pages/subscriptionsPage";

/// <reference types="cypress" />

describe('Сheck subscriptions section on the youtube page', () => {
    const homePage = new HomePage();
    const subscriptionsPage = new SubscriptionsPage();

    beforeEach(() => {     
        homePage.visitHomePage();
        homePage.closePopup();
    });
    
    it('Guest user should not have subscriptions', () => {
        homePage.goToSubscriptionsPage();
        subscriptionsPage.isGuestUserHasNotSubscriptions();
    });
});