/**
 * Tests the default state of the Seeding Report page in the BarnKit module.
 * Ensures correct UI elements appear and that default dates are properly set.
 */
import dayjs from 'dayjs'

describe('Test the Seeding Report Default View', () => {
  beforeEach(() => {
    cy.login("manager1", "farmdata2")
    cy.visit("/farm/fd2-barn-kit/seedingReport");
  });

  it('displays correct defaults', () => {

  // Check default start and end dates
  const expectedStart = dayjs().startOf('year').format('YYYY-MM-DD').toString()
  const expectedEnd = dayjs().format('YYYY-MM-DD').toString()

  cy.get('[data-cy=start-date]').should('have.value', expectedStart)
  cy.get('[data-cy=end-date]').should('have.value', expectedEnd)
  

  // Report should NOT be visible by default
  cy.get('[data-cy="filters-panel"]').should('not.exist');
  cy.get('[data-cy="report-table"]').should('not.exist');
  cy.get('[data-cy="no-logs-message"]').should('not.exist');
  cy.get('[data-cy="loader"]').should('not.exist');
});


});