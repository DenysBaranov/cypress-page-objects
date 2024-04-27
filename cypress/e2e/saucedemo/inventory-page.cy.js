/// <reference types="cypress" />

import InventoryPage from "../../page-objects/pages/InventoryPage";

describe("Tests inventory page elements", () => {
  beforeEach(() => {
    InventoryPage.open();
    });
   
  it("Checking the display of UI elements on page", () => {
    InventoryPage.burgerButton.click();
    InventoryPage.bmMenu.should("be.visible");
    InventoryPage.cartIcon.should("be.visible");
    InventoryPage.productSort.scrollIntoView().should("be.visible");
  });

  it("Check dropdown sorting options", () => {
    InventoryPage.productSortOption.should("have.length", 4);
  });

  it("Check redirect after clicking on cart", () => {
    InventoryPage.cartIcon.click();
    cy.url().should("eq", "https://www.saucedemo.com/cart.html");
  });

  it("Check redirect to Item page after clicking on item", () => {
    InventoryPage.clickOnItem(2);
    InventoryPage.inventoryDetails.should("be.visible");
  });
});
