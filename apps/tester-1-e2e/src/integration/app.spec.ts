import { getGreeting } from '../support/app.po';

describe('tester-1', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to tester-1!');
  });
});
