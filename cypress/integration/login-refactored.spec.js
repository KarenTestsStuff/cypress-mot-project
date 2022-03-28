/// <reference types="Cypress" />

describe ('Login feature', ()=>{
    beforeEach(() => {
        cy.visit('https://automationintesting.online/#/admin');
        cy.fixture('login-details').as('data');
    });

    it('should accept the admin user/password', function () {
        const {username, password} = this.data.validCredentials;
        cy.login(username, password);
        cy.get('#frontPageLink').should('be.visible');
    });

    it('should not login successfully if credentials are incorrect', function () {
        const {username, password} = this.data.invalidCredentials;
        cy.login(username, password);
        cy.get('#frontPageLink').should('not.exist');
    });
});