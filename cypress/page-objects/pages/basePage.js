/// <reference types="cypress" />

export default class basePage {
  constructor() {
    this.baseUrl = "https://www.saucedemo.com/";
  }

  open(url) {
    cy.visit(`${this.baseUrl}${url}`);
  }
}
