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
});
