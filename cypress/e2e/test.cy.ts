/// <reference types="cypress" />

context("next catch error", () => {
  it("retries on error", () => {
    cy.visit("/");
    cy.intercept(
      { pathname: "/", method: "POST" },
      { forceNetworkError: true }
    );
    cy.get("button").click();
  });
});
