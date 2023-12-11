/// <reference types="cypress" />

//Var faker
const { faker } = require("@faker-js/faker"); //Déclaration bibliothèque Faker dans la constante faker
let lastname = faker.person.lastName();
let firstname = faker.person.firstName();
let postalcode = faker.location.zipCode("#####");

// Prérequis
beforeEach("Accès au site saucedemo", () => {
  cy.visit("https://www.saucedemo.com"); //visit site

  //Login
  cy.get('[data-test="username"]').type("standard_user"); //username
  cy.get('[data-test="password"]').type("secret_sauce"); //password
  cy.get('[data-test="login-button"]').click(); //login
});

// Scénarios
describe("Scénarios de test site saucedemo.com", () => {
  it("Scénario 1 Authentification", () => {
    //Assertion url conexion
    cy.wait(1000); //Wait for new page
    cy.url().should("include", "/inventory.html"); //Assertion url connexion
  });

  it("Scénario 2 Commande e2e", () => {
    //Selection article - Ajout au panier
    cy.get("#item_0_img_link > .inventory_item_img").click(); //Selection by Img Bike Light
    cy.url().should("include", "/inventory-item.html?id=0"); //Assertion url select Bike Light
    cy.get(".inventory_details_price").should("have.text", "$9.99"); //Assertion price
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click(); //Add to cart
    //Aller au panier
    cy.get(".shopping_cart_link").click(); //Go to cart
    cy.url().should("include", "/cart.html"); //Assertion url cart
    cy.get(".inventory_item_name").should("have.text", "Sauce Labs Bike Light"); //Assertion good article
    cy.get(".inventory_item_price").should("have.text", "$9.99"); //Assertion good price
    //Valider le panier
    cy.get('[data-test="checkout"]').click(); //Check out
    cy.url().should("include", "/checkout-step-one.html"); //Assertion url Checkout info
    cy.get('[data-test="firstName"]')
      .type(firstname)
      .should("have.value", firstname); //checkout firstname
    cy.get('[data-test="lastName"]')
      .type(lastname)
      .should("have.value", lastname); //checkout lastname
    cy.get('[data-test="postalCode"]')
      .type(postalcode)
      .should("have.value", postalcode); //checkout zipcode
    cy.get('[data-test="continue"]').click(); //Continue
    cy.url().should("include", "/checkout-step-two.html"); //Assertion url Checkout overview
    cy.get(".inventory_item_name").should("have.text", "Sauce Labs Bike Light"); //Assertion good article
    cy.get(".item_pricebar").should("have.text", "$9.99"); //Assertion good price (wo taxe)
    cy.get(".summary_total_label").should("have.text", "Total: $10.79"); //Assertion good total price (with taxe)
    cy.get('[data-test="finish"]').click(); //Finish
    //Assertions validation
    cy.url().should("include", "/checkout-complete.html"); //url
    cy.get(".complete-header")
      .should("be.visible")
      .should("have.text", "Thank you for your order!"); //Message 1
    cy.get(".complete-text")
      .should("be.visible")
      .should(
        "have.text",
        "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
      ); //Message 2
  });
});
