const faker = require("faker");
let token = null;

const fakeRecipe = {
  recipeName: faker.lorem.word(),
  ingredients: faker.lorem.sentence(),
  instructions: faker.lorem.sentence()
};

describe("Exercise 5 - Product", () => {
  context("API", () => {
    it("Login", () => {
      cy.recipeLoginREST().then(tokenResponse => (token = tokenResponse));
    });

    it("New Product", () => {
      cy.request({
        url: "/api/v1/recipes",
        method: "POST",
        body: fakeRecipe,
        headers: {
          "x-access-token": token
        }
      }).then(res => {
        expect(res.status).to.equal(201);
        if (res.body.status === "success") {
        }
      });
    });
  });
});
