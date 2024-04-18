/// <reference types="cypress" />

import basePage from "./basePage";

class itemPage extends basePage {
  get userNameField() {
    return cy.get('[data-test="username"]');
  }

  get passwordField() {
    return cy.get('[data-test="password"]');
  }

  get loginButton() {
    return cy.get('[data-test="login-button"]');
  }

  get InventoryItemName() {
    return cy.get('[data-test="inventory-item-name"]');
  }

  get itemImg() {
    return cy.get(".inventory_details_img");
  }

  get itemDesc() {
    return cy.get('[data-test="inventory-item-desc"]');
  }

  get itemPrice() {
    return cy.get('[data-test="inventory-item-price"]');
  }

  get itemName() {
    return cy.get('[data-test="inventory-item-name"]');
  }

  get addToCartButton() {
    return cy.get('[data-test="add-to-cart"]');
  }

  get removeButton() {
    return cy.get('[data-test="remove"]');
  }

  open() {
    super.open("");
  }

  login(username, password) {
    this.userNameField.type(username);
    this.passwordField.type(password);
    this.loginButton.click();
  }

  clickOnItemName(index) {
    this.InventoryItemName.eq(index).click();
  }

  clickAddToCartButton() {
    this.addToCartButton.click();
  }

  clickRemoveButton() {
    this.removeButton.click();
  }
}

export default new itemPage();
