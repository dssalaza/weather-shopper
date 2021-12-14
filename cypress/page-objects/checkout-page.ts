export class CheckoutPage{

    getTotal() {
        return cy.get('p[id="total"]');
    }

}