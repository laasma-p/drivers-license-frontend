describe("Authorization", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has to render input field and 'Continue' button", () => {
    cy.get("input#code").should("exist");
    cy.contains("button", "Continue").should("exist");
  });
});
