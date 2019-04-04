/// <reference types"Cypress"></reference>

describe("Exercise 2", () => {
  before(() => {
    cy.visit("https://www.irontec.com/");
  });

  context("Form", () => {
    before(() => {
      cy.get(".headerOpenAwards2017 > a").invoke("attr", "target", "_self");
      cy.get(".headerOpenAwards2017 > a").click();
    });

    it("Comprobar que el checkbox no esté seleccionado", () => {
      cy.get("#privacityCheck").should("not.be.checked");
    });

    it("Rellenar el nombre, el apellido, seleccionar algo select y aceptar la política de privacidad, y enviar", () => {
      cy.get(".form-empleo").within(() => {
        cy.get("#name").type("Agapito");
        cy.get("#lastName").type("DiSousa");
        cy.get("#work").select("Internet es mi única religión");
        cy.get("#privacityCheck").check();
        cy.root().submit();
      });
    });

    it("Comprobar el mensaje de error", () => {
      cy.get("#alert-warning > strong").should(
        "contain",
        "Los campos con * son obligatorios"
      );
    });

    it("Limpiar los campos nombre y apellido", () => {
      cy.get("#name")
        .clear()
        .should("have.value", "");
      cy.get("#lastName")
        .clear()
        .should("have.value", "");
    });

    it("Cambiar el viewport a móvil y testear que el menú móvil se muestra", () => {
      cy.viewport("iphone-6");
      cy.get(".btnSidebarMenu > .si-icons").should("exist");
    });
  });
});
