describe("Quiz", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has to render authorization and instructions before rendering Quiz", () => {
    cy.intercept("POST", "http://localhost:3000/verify-code", {
      statusCode: 200,
      body: { token: "fakeToken", userId: 1 },
    }).as("verifyCode");

    cy.get("input#code").type("35jrwj");
    cy.contains("button", "Continue").click();

    cy.contains("Welcome to the theory exam.").should("exist");
    cy.contains("button", "Continue").click();
  });
});
