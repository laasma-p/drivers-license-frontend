describe("Instructions", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.intercept("POST", "http://localhost:3000/verify-code", {
      statusCode: 200,
      body: { token: "fakeToken", userId: 1 },
    }).as("verifyCode");

    const validCode = "2draB4";
    cy.get("input#code").type(validCode);
    cy.contains("button", "Continue").click();
  });

  it("displays the instructions correctly", () => {
    cy.contains("Welcome to the theory exam.").should("exist");

    const instructionsList = [
      "You have 25 minutes to fill out the test. Each question consists of an image about a situation, an explanation of it and several statements that you have to check if the step has to be fulfilled in the situation.",
      "Maximum of five mistakes are allowed to pass the test. One mistake equals to one or more incorrect or not marked statements in a question.",
      'After you have completed the test, click on "Finish" to submit the answers.',
      "The result of whether the test is passed is showed immediately, as well as mistakes (if any).",
    ];

    instructionsList.forEach((instruction) => {
      cy.contains(instruction).should("exist");
    });

    cy.contains(
      'Before the test itself, two test questions will be presented to familiarize yourself with the test structure. After clicking on "Start" button, the test starts.'
    ).should("exist");

    cy.contains("button", "Continue").should("exist");
  });
});
