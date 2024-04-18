/// <reference types="cypress" />

import inventoryPage from "../../page-objects/pages/inventoryPage";

describe("Tests inventory page elements", () => {
  let userData;
  beforeEach(() => {
    cy.fixture("credentials-saucedemo.json").then((data) => {
      userData = data;
      inventoryPage.open();
      inventoryPage.login(userData.username, userData.password);
    });
  });

  it("Checking the display of UI elements on page", () => {
    // cy.visit('https://www.saucedemo.com');
    // cy.get('[data-test="username"]').type('standard_user');
    // cy.get('[data-test="password"]').type('secret_sauce');
    // cy.get('[data-test="login-button"]').click();

    // cy.get('#react-burger-menu-btn').click();
    // cy.get('.bm-menu').should('be.visible');
    // cy.get('[data-test="shopping-cart-link"]').should('be.visible');
    // cy.get('[data-test="product-sort-container"]').should('be.visible');

    inventoryPage.burgerButton.click();
    inventoryPage.bmMenu.should("be.visible");
    inventoryPage.cartIcon.should("be.visible");
    inventoryPage.productSort.scrollIntoView().should("be.visible");
  });

  it("Check dropdown sorting options", () => {
    // cy.visit('https://www.saucedemo.com');
    // cy.get('[data-test="username"]').type('standard_user');
    // cy.get('[data-test="password"]').type('secret_sauce');
    // cy.get('[data-test="login-button"]').click();

    //cy.get('[data-test="product-sort-container"]>option').should('have.length', 4);

    inventoryPage.productSortOption.should("have.length", 4);
  });

  it("Check redirect after clicking on cart", () => {
    // cy.visit('https://www.saucedemo.com');
    // cy.get('[data-test="username"]').type('standard_user');
    // cy.get('[data-test="password"]').type('secret_sauce');
    // cy.get('[data-test="login-button"]').click();

    // cy.get('[data-test="shopping-cart-link"]').click();
    // cy.url().should('eq', 'https://www.saucedemo.com/cart.html');

    inventoryPage.cartIcon.click();
    cy.url().should("eq", "https://www.saucedemo.com/cart.html");
  });

  it("Check redirect to Item page after clicking on item", () => {
    // cy.visit('https://www.saucedemo.com');
    // cy.get('[data-test="username"]').type('standard_user');
    // cy.get('[data-test="password"]').type('secret_sauce');
    // cy.get('[data-test="login-button"]').click();

    // cy.get('div.inventory_item_img').click();//.should('eq', 'https://www.saucedemo.com/inventory-item.html');
    // cy.contains('Sauce').click();
    // cy.get('.inventory_details').should('be.visible');

    inventoryPage.clickOnItem(2);
    inventoryPage.inventoryDetails.should("be.visible");
  });
});
