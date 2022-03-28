/// <reference types="Cypress" />
// ^^ Get suggestions on what cy.(thing) to use

describe ('Todo application', ()=> {
    it ('should add a new todo item', ()=> {
        cy.visit('https://todomvc.com/examples/react/#/');
        cy.get('.new-todo').type('new todo {enter}');
        cy.get('.todo-list li').should('have.length', 1).and('have.text', 'new todo');
    })
});