/// <reference types="cypress" />

import loginPage from "../../page-objects/pages/loginPage";

describe("Login test", () => {
  let userData;
  beforeEach(() => {
    cy.fixture("credentials-saucedemo.json").then((data) => {
      userData = data;
    });
    loginPage.open();
  });

  it("Login with correct login and password", () => {
    loginPage.login(userData.username, userData.password);
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  });
});
