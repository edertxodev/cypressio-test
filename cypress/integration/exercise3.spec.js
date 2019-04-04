/// <reference types"Cypress"></reference>

describe("Exercise 3", () => {
  before(() => {
    cy.visit("https://www.irontec.com/");
  });

  context("Menu", () => {
    it("Comprobar TODA la carga del menú, que no esté vacio. (each)", () => {
      cy.get("#nav-menu .nav a").each(($el, index, $list) => {
        cy.wrap($el).should("not.be.empty");
      });
    });

    it("Comprobar el texto del primer y último elemento del menú", () => {
      cy.get("#nav-menu .nav a")
        .first()
        .should("not.be.empty")
        .and("contain", "Nosotros");
      cy.get("#nav-menu .nav a")
        .last()
        .should("not.be.empty")
        .and("contain", "Blog");
    });

    it("Comprobar las urls y títulos de la primera opción del menú", () => {
      cy.get("#nav-menu .nav a")
        .eq(0)
        .click({ force: true });
      cy.title().should(
        "contain",
        "Nosotros | Irontec - Consultoría tecnológica"
      );
      cy.url().should("contain", "/nosotros");
    });
  });
});
