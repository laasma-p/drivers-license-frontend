describe("Quiz", () => {
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

  it("has to render Quiz and its sub-components", () => {
    cy.get("[data-testid='quiz']").should("exist");
    cy.get("[data-testid='quiz-card']").should("exist");
    cy.get("[data-testid='header']").should("exist");
  });

  it("has to display a message when there are no practice questions", () => {
    cy.intercept("GET", "http://localhost:3000/practice-questions", {
      statusCode: 200,
      body: [],
    }).as("getPracticeQuestions");

    cy.visit("/");
    cy.get("input#code").type("35jrwj");
    cy.contains("button", "Continue").click();
    cy.wait("@verifyCode");

    cy.contains("Welcome to the theory exam.").should("exist");
    cy.contains("button", "Continue").click();

    cy.wait("@getPracticeQuestions");

    cy.get("[data-testid='no-questions-message']")
      .should("exist")
      .and("contain", "No practice questions available.");
  });

  it("has to display a message when there are no actual test questions after answering practice questions", () => {
    cy.intercept("GET", "http://localhost:3000/test-questions", {
      statusCode: 200,
      body: [],
    }).as("getTestQuestions");

    cy.visit("/");
    cy.get("input#code").type("35jrwj");
    cy.contains("button", "Continue").click();
    cy.wait("@verifyCode");

    cy.contains("Welcome to the theory exam.").should("exist");
    cy.contains("button", "Continue").click();

    cy.get("[data-testid='quiz-card']").should("exist");
    cy.get("input[type='checkbox']").first().check();
    cy.contains("button", "Next").should("be.enabled").click();

    cy.get("[data-testid='quiz-card']").should("exist");
    cy.get("input[type='checkbox']").first().check();
    cy.contains("button", "Start").should("be.enabled").click();

    cy.wait("@getTestQuestions");
    cy.get("[data-testid='no-questions-message']")
      .should("exist")
      .and("contain", "No test questions available.");
  });
});
