const validateUrlContains = (path: string) => {
  cy.url().should('include', path);
};

Cypress.Commands.add('validateUrlContains', validateUrlContains);
