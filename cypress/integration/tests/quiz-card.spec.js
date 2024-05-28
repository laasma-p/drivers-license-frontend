describe("QuizCard", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.intercept("POST", "http://localhost:3000/verify-code", {
      statusCode: 200,
      body: { token: "fakeToken", userId: 1 },
    }).as("verifyCode");

    cy.get("input#code").type("35jrwj");
    cy.contains("button", "Continue").click();

    cy.wait("@verifyCode");

    cy.contains("Welcome to the theory exam.").should("exist");
    cy.contains("button", "Continue").click();
  });

  it("has to navigate through practice questions", () => {
    cy.get("[data-testid='quiz-card']").should("exist");
    cy.get("input[type='checkbox']").first().check();
    cy.contains("button", "Next").should("be.enabled").click();

    cy.get("[data-testid='quiz-card']").should("exist");
    cy.get("input[type='checkbox']").first().check();
    cy.contains("button", "Start").should("be.enabled").click();
  });
});
