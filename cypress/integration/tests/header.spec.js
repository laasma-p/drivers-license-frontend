describe("Header", () => {
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

  it("has to display the logo and timer when landing on the quiz", () => {
    cy.get("[data-testid='timer']").should("exist");
    cy.get("img").should("exist");
  });

  it("has to display timer for practice questions without starting it", () => {
    cy.intercept("GET", "http://localhost:3000/practice-questions", {
      statusCode: 200,
      body: [],
    }).as("getPracticeQuestions");

    cy.visit("/");
    cy.get("input#code").type("2draB4");
    cy.contains("button", "Continue").click();

    cy.wait("@verifyCode");

    cy.contains("Welcome to the theory exam.").should("exist");
    cy.contains("button", "Continue").click();

    cy.wait("@getPracticeQuestions");

    cy.get("[data-testid=timer]").should("exist");
    cy.get("[data-testid=timer]").should("contain", "25:00");
  });
});
