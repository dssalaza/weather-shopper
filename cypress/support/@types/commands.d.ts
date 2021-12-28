declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to get the temperature number, callback function can be used to operate on top of the retrieved temperature.
     * @example cy.evaluateTemperatureNumber().then(value => {})
     */
    evaluateTemperatureNumber(callback: (result: string) => void): cy;
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.login('username','password')
     */
    validateUrlContains(path: string): void;
  }
}
