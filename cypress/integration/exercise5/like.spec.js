describe("Like", () => {
  before(() => {
    cy.visit("/signin");
    cy.recipeLogin();
  });

  it("Check for Like", () => {
    cy.visit("/recipes/243");
    cy.get(".card-title > :nth-child(1)")
      .click()
      .then(res => {
        cy.log(res);
      });
  });
});
