/// <reference types="Cypress" />

describe('Submit an enquiry', ()=> {
    beforeEach(() => {
        cy.visit('https://automationintesting.online/#/');
        cy.fixture('form-details').as('data');
    });

    it('should allow form submission when all fields are filled', function () {
        const {name, email, phone, subject, message} = this.data;
        cy.get('#name').type(name);
        cy.get('#email').type(email);
        cy.get('#phone').type(phone);
        cy.get('#subject').type(subject);
        cy.get('#description').type(message);
        cy.get('#submitContact').click();
        
        cy.get(':nth-child(2) > div > h2').should('have.text', "Thanks for getting in touch Karen Todd!")
    });

    it('should not submit with empty fields', ()=> {
        cy.reload();
        cy.get('#submitContact').click();
        cy.get('.alert > :nth-child(2)').should('have.text', "must not be blank");
//      This ^ command can be flaky, as the errors are not in the same order each time  
    });
});

describe('Log into admin page', ()=>{
    beforeEach(() => {
        cy.visit('https://automationintesting.online/#/admin');
        cy.fixture('login-details').as('data');
    });

    it('should accept the admin user/password', function () {
        const {username, password} = this.data.validCredentials;
        cy.login(username, password);
        cy.get('#frontPageLink').should('be.visible');
    });
});

describe('Verifying booking enquiry was recorded', ()=> {
    it('should show my new enquiry on line 2', ()=>{
        cy.get('.nav-link > .fa').click();
        cy.get('#message1 > .col-sm-2 > p').should('have.text', "Karen Todd")
    });

    after(()=> {
        cy.get('.col-sm-1 > .fa').click({multiple: true});
    });
});