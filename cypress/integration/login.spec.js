/// <reference types="Cypress" />

describe ('Login feature', ()=>{
    it('should accept the admin user/password', ()=> {
        cy.visit('https://automationintesting.online/#/admin');

        cy.fixture('login-details').then((data) => {
            const {username, password} = data.validCredentials;
            cy.get('[data-testid=username]').type(username);
            cy.get('[data-testid=password]').type(password);
        })

        cy.get('[data-testid=submit]').click();
        cy.get('#frontPageLink').should('be.visible');
    });

    it('should not login successfully if credentials are incorrect', ()=> {
        cy.visit('https://automationintesting.online/#/admin');

        cy.fixture('login-details').then((data) => {
            const {username, password} = data.invalidCredentials;
            cy.get('[data-testid=username]').type(username);
            cy.get('[data-testid=password]').type(password);
        });

        cy.get('[data-testid=submit]').click();
        cy.get('#frontPageLink').should('not.exist');
    });
});