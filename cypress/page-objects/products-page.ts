export class ProductsPage{

    getCart() {
        return cy.get('span[id="cart"]');
    }

    priceToNumber(priceTag) {
        return Number(priceTag.match(/\d+/)[0]);

    }

    getLowerPriceByIngredient(ingredient) {
        cy.wait(500);
        return cy.get('.text-center.col-4').filter(`:contains("${ingredient}")`).filter(':contains("Price")').then(($els) => {
          const priceValueArray = Cypress.$.makeArray($els).map((el) => this.priceToNumber(el.innerText))
          const lowestPrice = Math.min.apply( Math, priceValueArray )
          return lowestPrice
    })}

    addProductToCartByPrice(price){
      return cy.get('.text-center.col-4').filter(`:contains("${price}")`).children().contains('Add');
    }

}