/// <reference types="cypress" />

//import loginPage from "../../page-objects/pages/loginPage";
import itemPage from "../../page-objects/pages/itemPage";

describe("Tests item page elements", () => {
  let userData;
  beforeEach("Login on site", () => {
    cy.fixture("credentials-saucedemo.json").then((data) => {
      userData = data;
    });
    itemPage.open();
    
    itemPage.login(userData.username, userData.password);
  });

  // it ('Login with correct login and password', () => {
  //     itemPage.login(userData.username, userData.password);
  //     cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
  // })

  it("Check the picture display, description, price and product name", () => {
    // cy.visit('https://www.saucedemo.com');
    // cy.get('[data-test="username"]').type('standard_user');
    // cy.get('[data-test="password"]').type('secret_sauce');
    // cy.get('[data-test="login-button"]').click();
    // cy.contains('Sauce').click();

    // cy.get('.inventory_details_img').should('be.visible');
    // cy.get('[data-test="inventory-item-desc"]').should('be.visible');
    // cy.get('[data-test="inventory-item-price"]').should('be.visible');
    // cy.get('[data-test="inventory-item-name"]').should('be.visible');

    itemPage.InventoryItemName.click();
    itemPage.itemImg.should("be.visible");
    itemPage.itemDesc.should("be.visible");
    itemPage.itemPrice.should("be.visible");
    itemPage.itemName.should("be.visible");
  });

  it("Check the display of the Remove button after clicking on the Add to cart button", () => {
    // cy.visit('https://www.saucedemo.com');
    // cy.get('[data-test="username"]').type('standard_user');
    // cy.get('[data-test="password"]').type('secret_sauce');
    // cy.get('[data-test="login-button"]').click();
    // cy.contains('Sauce').click();

    // cy.get('[data-test="add-to-cart"]').click();
    // cy.get('[data-test="remove"]').should('be.visible');

    itemPage.InventoryItemName.click();
    itemPage.clickAddToCartButton();
    itemPage.removeButton.should("be.visible");
  });

  it("Check the display of the Add to cart button after clicking on the Remove button", () => {
    // cy.visit('https://www.saucedemo.com');
    // cy.get('[data-test="username"]').type('standard_user');
    // cy.get('[data-test="password"]').type('secret_sauce');
    // cy.get('[data-test="login-button"]').click();
    // cy.contains('Sauce').click();

    // cy.get('[data-test="add-to-cart"]').click();
    // cy.get('[data-test="remove"]').click();
    // cy.get('[data-test="add-to-cart"]').should('be.visible');

    itemPage.InventoryItemName.click();
    itemPage.clickAddToCartButton();
    itemPage.clickRemoveButton();
    itemPage.addToCartButton.should("be.visible");
  });
});
