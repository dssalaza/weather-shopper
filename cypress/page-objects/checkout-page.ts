export class CheckoutPage{

    getPayWithCardBtn() {
        return cy.get('button[class="stripe-button-el"]');
    }

    getStripeEmail() {
        return this.getIframeBody().find('input[id="email"]');
    }

    getStripeCardNumber() {
        return this.getIframeBody().find('input[id="card_number"]');
    }
    
    getStripeExpireDate() {
        return this.getIframeBody().find('input[id="cc-exp"]');
    }
    
    getStripeCVV() {
        return this.getIframeBody().find('input[id="cc-csc"]');
    }
    
    getStripeBillingZip() {
        return this.getIframeBody().find('input[id="billing-zip"]');
    }

    getStripeSubmitButton() {
        return this.getIframeBody().find('button[id="submitButton"]');
    }

    evaluateNumberOfItemsInTheCard(quantity: number){
        return cy.get('table[class="table table-striped"]>tbody>tr').should('have.length', quantity);
    }

    getIframeDocument = () => {
        return cy
        .get('iframe[class="stripe_checkout_app"]') 
        .its('0.contentDocument').should('exist')
      }
      
    getIframeBody = () => {
        return this.getIframeDocument()
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
      }

}