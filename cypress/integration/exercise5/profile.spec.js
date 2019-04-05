describe("Profile", () => {
  before(() => {
    cy.visit("/signin");
    cy.recipeLogin();
  });
  it("Get fake profile", () => {
    cy.visit("/dashboard/profile");

    cy.server();

    cy.route({
      method: "GET",
      url: "/api/v1/users/profile",
      headers: {
        "x-access-token": localStorage.getItem("token")
      },
      response: {
        status: "success",
        message: "User profile fetched successfully",
        userDetails: {
          firstName: "EdertxoDW",
          lastName: null,
          bio: "Lorem ipsum",
          imageUrl: null,
          dashCtrlImageUrl: null
        }
      }
    }).as("getProfile");

    cy.reload();
  });
});
