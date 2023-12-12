/// <reference types="cypress" />

//Var
const constants = require("../fixtures/constants.json");

// Prérequis
beforeEach("Accès au site saucedemo", () => {
  //visiter le site
  cy.visit("https://www.saucedemo.com");
  //Login
  cy.authentification(constants.username, constants.password); //Personnal command in commands.js
  // autocompletion in support/index.d.ts
});

// Scénarios
describe("Scénarios de test site saucedemo.com", () => {
  it("Scénario 1 Assertions", () => {
    //should
    cy.get(".inventory_item_description").should("have.length", 6); //verify class inventory_item_description have 6 elements
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .should("exist")
      .and("be.enabled"); //verify the button exist and is clickable
    //expect
    cy.get(".inventory_item_description").then((nbItem) => {
      expect(nbItem).have.length(6);
      expect(nbItem).have.lengthOf(6); //the same
    }); //verify class inventory_item_description have 6 elements
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').then((btCart) => {
      expect(btCart).exist;
      expect(btCart).enabled;
      expect(btCart).include.text("Add to cart"); //verify the button exist and is clickable nd include Add to cart
    });
  });
});
