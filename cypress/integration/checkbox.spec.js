/// <reference types="Cypress" />

describe ('The Internet - Checkboxes', ()=> {
    it ('should assert the heading text correctly', ()=> {
        cy.visit('https://the-internet.herokuapp.com/checkboxes');
        cy.get('h3').invoke('text').should('equal', 'Checkboxes');
    })
})