describe("Authorization", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has to render input field and 'Continue' button", () => {
    cy.get("input#code").should("exist");
    cy.contains("button", "Continue").should("exist");
  });

  it("has to update enteredCode state when user enters the code", () => {
    const code = "2kaei3";
    cy.get("input#code").type(code);
    cy.get("input#code").should("have.value", code);
  });

  it("has to call onAuthorization prop with entered code when the form is submitted", () => {
    const code = "2draB4";
    cy.get("input#code").type(code);
    cy.contains("button", "Continue").click();

    cy.intercept("POST", "/verify-code", (req) => {
      expect(req.body).to.have.property("code", code);
    }).as("verifyCode");
  });

  it("has to display an error message for an empty code on submitting the form", () => {
    cy.contains("button", "Continue").click();
    cy.contains("Please enter the code.").should("exist");
  });

  it("has to display an error message for invalid code format on submitting the form", () => {
    const invalidCode = "invalid";
    cy.get("input#code").type(invalidCode);
    cy.contains("button", "Continue").click();
    cy.contains("Invalid code format.").should("exist");
  });

  it("has to display an error message if API request fails", () => {
    cy.intercept("POST", "http://localhost:3000/verify-code", {
      statusCode: 500,
      body: { error: "API request failed" },
    }).as("verifyCode");

    const code = "deMB24";
    cy.get("input#code").type(code);
    cy.contains("button", "Continue").click();
  });
});
