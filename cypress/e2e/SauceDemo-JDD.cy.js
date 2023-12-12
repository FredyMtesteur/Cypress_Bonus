/// <reference types="cypress" />

//Var
const constants = require("../fixtures/constants.json");

// Prérequis
beforeEach("Accès au site saucedemo", () => {
  //visiter le site
  cy.visit("https://www.saucedemo.com");
  //Login
});

// Scénarios
describe("Scénarios de test site saucedemo.com", () => {
  it("Scénario 1 Authentification avec JDD", () => {
    cy.get('[data-test="username"]').type(constants.username); //username
    cy.get('[data-test="password"]').type(constants.password); //password
    cy.get('[data-test="login-button"]').click(); //login

    //Assertion url conexion
    cy.wait(1000); //Wait for new page
    cy.url().should("include", "/inventory.html"); //Assertion url connexion
  });
});
