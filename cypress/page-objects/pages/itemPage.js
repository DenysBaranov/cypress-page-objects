/// <reference types="cypress" />

import BasePage from "./BasePage";
import LoginPage from "./LoginPage";

import userData from "../../fixtures/userData.json";

class ItemPage extends BasePage {

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
    LoginPage.login(userData.username, userData.password);
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  }

  clickOnItemNameByIndex(index) {
    this.InventoryItemName.eq(index).click();
  }

  clickAddToCartButton() {
    this.addToCartButton.click();
  }

  clickRemoveButton() {
    this.removeButton.click();
  }
}

export default new ItemPage();
