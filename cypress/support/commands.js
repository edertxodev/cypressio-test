// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("login", () => {
  cy.fixture("defaults.json").as("UserJSON");
  cy.get("@UserJSON").then(res => {
    cy.get('input[name="username"]').type(res.username);
    cy.get('input[name="password"]').type(res.password);
  });
});

Cypress.Commands.add("recipeLogin", () => {
  cy.fixture("defaults.json").as("UserJSON");
  cy.get("@UserJSON").then(res => {
    cy.get('input[name="username"]').type(res.recipes.username);
    cy.get('input[name="password"]').type(res.recipes.password);
    cy.get('button[type="submit"]').click();
  });
});

Cypress.Commands.add("recipeLogout", () => {
  cy.get(".dropdown-button").click();
  cy.get("#user-dropdown li a")
    .last()
    .click();
});

Cypress.Commands.add("recipeLoginREST", () => {
  cy.fixture("defaults.json").as("UserJSON");
  cy.get("@UserJSON").then(res => {
    cy.request({
      url: "/api/v1/users/signin",
      method: "POST",
      body: {
        username: res.recipes.username,
        password: res.recipes.password
      }
    }).then(res => {
      return res.body.token;
    });
  });
});
