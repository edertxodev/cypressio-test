/// <reference types"Cypress"></reference>

describe("Exercise 4", () => {
  context("Fixtures", () => {
    it("Start", () => {
      cy.visit("/");
      cy.get("#signin").click();
    });

    it("Type user/password", () => {
      cy.login();
    });
  });
});
