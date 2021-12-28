export class ProductsPage {
  getCart() {
    return cy.get('span[id="cart"]');
  }

  priceToNumber(priceTag: string) {
    return Number(priceTag.match(/\d+/)[0]);
  }

  getLowerPriceByIngredient(ingredient: string) {
    return cy
      .get('.text-center.col-4')
      .filter(`:contains("${ingredient}")`)
      .filter(':contains("Price")')
      .then($els => {
        const priceValueArray = Cypress.$.makeArray($els).map(el =>
          this.priceToNumber(el.innerText)
        );
        const lowestPrice = Math.min(...priceValueArray);
        return lowestPrice;
      });
  }

  addProductToCartByPrice(price: Number) {
    return cy
      .get('.text-center.col-4')
      .filter(`:contains("${price}")`)
      .children()
      .contains('Add');
  }
}
