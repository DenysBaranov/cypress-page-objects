/// <reference types="cypress" />

import BasePage from "./BasePage";
import LoginPage from "./LoginPage";
import userData from "../../fixtures/userData.json";

class InventoryPage extends BasePage {
 
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
    LoginPage.login(userData.username, userData.password);
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  }

  clickOnItem(index) {
    this.inventoryImg.eq(index).click();
  }
}

export default new InventoryPage();
