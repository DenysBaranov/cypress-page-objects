/// <reference types="cypress" />

import ItemPage from "../../page-objects/pages/ItemPage";

describe("Tests item page elements", () => {
  beforeEach("Login on site", () => {
      ItemPage.open();
    }); 

  it("Check the picture display, description, price and product name", () => {
    ItemPage.clickOnItemNameByIndex(1);
    ItemPage.itemImg.should("be.visible");
    ItemPage.itemDesc.should("be.visible");
    ItemPage.itemPrice.should("be.visible");
    ItemPage.itemName.should("be.visible");
  });

  it("Check the display of the Remove button after clicking on the Add to cart button", () => {
    ItemPage.clickOnItemNameByIndex(1);
    ItemPage.clickAddToCartButton();
    ItemPage.removeButton.should("be.visible");
  });

  it("Check the display of the Add to cart button after clicking on the Remove button", () => {
    ItemPage.clickOnItemNameByIndex(1);
    ItemPage.clickAddToCartButton();
    ItemPage.clickRemoveButton();
    ItemPage.addToCartButton.should("be.visible");
  });
});
