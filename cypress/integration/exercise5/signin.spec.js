describe("Exercise 5 - Sign in", () => {
  context("UI", () => {
    it("Start", () => {
      cy.visit("/signin");
    });

    it("Login without data", () => {
      cy.get("form").submit();
    });

    it("Login with data", () => {
      cy.wait(2000);
      cy.recipeLogin();
      cy.wait(2000);
      cy.recipeLogout();
    });
  });

  context("API", () => {
    it("Login with REST", () => {
      cy.recipeLoginREST();
    });
  });
});
