/// <reference types="cypress" />

import basePage from "./basePage";

class loginPage extends basePage {
  get userNameField() {
    return cy.get('[data-test="username"]');
  }

  get passwordField() {
    return cy.get('[data-test="password"]');
  }

  get loginButton() {
    return cy.get('[data-test="login-button"]');
  }

  open() {
    super.open("");
  }

  login(username, password) {
    this.userNameField.type(username);
    this.passwordField.type(password);
    this.loginButton.click();
  }
}

export default new loginPage();
