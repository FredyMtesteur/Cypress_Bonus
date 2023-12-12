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
  it("Scénario 1 Authentification", () => {
    //Assertion url conexion
    cy.wait(1000); //Wait for new page
    cy.url().should("include", "/inventory.html"); //Assertion url connexion
  });
});
