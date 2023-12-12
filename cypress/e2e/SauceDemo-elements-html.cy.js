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
  it("Scénario 1 Select html elements", () => {
    //first
    cy.get(".inventory_item_description")
      .first()
      .should("include.text", "Sauce Labs Backpack"); //Sélect first element of class inventory_item_description

    //eq
    cy.get(".inventory_item_description")
      .eq(3)
      .should("include.text", "Sauce Labs Fleece Jacket"); //Sélect element 4 of class inventory_item_description

    //find
    cy.get(".inventory_item_description")
      .find(".inventory_item_price")
      .should("include.text", "$")
      .and("be.be.visible"); //find and select all prices of class inventory_item_description
    cy.get(".inventory_item_description")
      .eq(1)
      .find(".btn_inventory")
      .should("include.text", "Add to cart")
      .click(); //select element 2  + click Add to cart
    cy.get(".inventory_item_description")
      .eq(1)
      .find(".btn_inventory")
      .should("include.text", "Remove")
      .click(); //select element 2  + click Remove (of cart)

    //each
    cy.get(".inventory_item_description")
      .find(".inventory_item_price")
      .each((price) => {
        expect(price).include.text("$"); //Select each price have $ with function and assertion expect
      });
  });
});
