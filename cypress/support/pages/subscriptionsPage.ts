class SubscriptionsPage{

    isGuestUserHasNotSubscriptions(){
        cy.get('.promo-title').invoke('text').should('equal', 'Don’t miss new videos');
        cy.get('.promo-body-text').invoke('text').should('equal', 'Sign in to see updates from your favorite YouTube channels');
    };

}

export default SubscriptionsPage;