/// <reference types="cypress" />

//Var
const constants = require("../fixtures/constants.json");

// Prérequis
beforeEach("Accès au site saucedemo", () => {
  //cy.viewport("samsung-s10"); //Screen Res for a samsung smartphone
  //cy.viewport(550, 770); //Screen res for a tab (with,height) //visiter le site

  cy.visit("https://www.saucedemo.com");
  //Login
  cy.authentification(constants.username, constants.password); //Personnal command in commands.js
  // autocompletion in support/index.d.ts
});

const mobilRes = {
  //Add a function for dynamic reso in const
  viewportHeight: 800,
  viewportWidth: 375,
};

// Scénarios
describe(
  "Tests One Reso",
  {
    //Add a function for dynamic reso for all scenarios
    viewportHeight: 1000,
    viewportWidth: 1200,
  },
  () => {
    it("Scénario 1 ", () => {
      cy.url().should("include", "/inventory.html"); //Assertion url connexion
    });

    it("Scénario 2 ", () => {
      cy.url().should("include", "/inventory.html"); //Assertion url connexion
    });
  }
);

describe("Tests Two Reso", () => {
  it("Scénario 1 Small Reso", mobilRes, () => {
    //mobileRes = Res for a mobile in a const
    cy.url().should("include", "/inventory.html"); //Assertion url connexion
  });
  it(
    "Scénario 2 Larg Reso ",
    {
      //Add a function for dynamic reso for this scenario
      viewportHeight: 1000,
      viewportWidth: 1200,
    },
    () => {
      cy.url().should("include", "/inventory.html"); //Assertion url connexion
    }
  );
});
