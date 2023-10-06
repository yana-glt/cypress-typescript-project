class VideoPage {

    checkCommentsSection(){
        cy.get("#comments #sections", {timeout: 10000}).should('be.visible').as('comment_section');
        cy.get('@comment_section').find('#count span').eq(1).contains('Comments');
        cy.get('@comment_section').find(' #comment').eq(1).as('first_comment');
        cy.get('@first_comment').find('#author-text span').invoke('text').should('contain', '@').and('have.length.greaterThan', 1);
        cy.get('@first_comment').find('.published-time-text > a').should('be.visible').and('contain', 'ago');
        cy.get('@first_comment').find('#content-text').invoke('text').should('have.length.greaterThan', 1);
        cy.get('@first_comment').find('#like-button').should('be.visible');
        cy.get('@first_comment').find('#dislike-button').should('be.visible');
    }

}

export default VideoPage;