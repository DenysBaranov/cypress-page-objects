/// <reference types="cypress" />

import basePage from "./basePage";

class inventoryPage extends basePage {
  get userNameField() {
    return cy.get('[data-test="username"]');
  }

  get passwordField() {
    return cy.get('[data-test="password"]');
  }

  get loginButton() {
    return cy.get('[data-test="login-button"]');
  }

  get burgerButton() {
    return cy.get("#react-burger-menu-btn");
  }

  get bmMenu() {
    return cy.get(".bm-menu");
  }

  get cartIcon() {
    return cy.get('[data-test="shopping-cart-link"]');
  }

  get productSort() {
    return cy.get('[data-test="product-sort-container"]');
  }

  get productSortOption() {
    return cy.get('[data-test="product-sort-container"]>option');
  }

  get inventoryImg() {
    return cy.get("img.inventory_item_img");
  }

  get inventoryDetails() {
    return cy.get(".inventory_details");
  }

  open() {
    super.open("");
  }

  login(username, password) {
    this.userNameField.type(username);
    this.passwordField.type(password);
    this.loginButton.click();
  }

  clickOnItem(index) {
    this.inventoryImg.eq(index).click();
  }
}

export default new inventoryPage();
