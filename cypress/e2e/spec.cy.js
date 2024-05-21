describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/') 
  });

  it('should display the header', () => {
    cy.get('[data-testid="cypress-header"]').should('exist');
  });

  it('should display the paragraph', () => {
    cy.get('[data-testid="cypress-paragraph"]').should('exist');
    cy.get('[data-testid="cypress-paragraph"]').contains('This is a simple app to test Cypress functionality.');
  });

  it('should display the button and handle click event', () => {
    cy.get('[data-testid="cypress-button"]').should('exist');
    cy.get('[data-testid="cypress-button"]').click();
    cy.get('[data-testid="cypress-clicked-message"]').should('exist');
    cy.get('[data-testid="cypress-clicked-message"]').contains('Button was clicked!');
  });

  it('should not display the clicked message before button click', () => {
    cy.get('[data-testid="cypress-clicked-message"]').should('not.exist');
  });
});
