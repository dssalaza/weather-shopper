export class ConfirmationPage{

    getPaymentHeader() {
        return cy.get('div[class="row justify-content-center"]>h2'); 
    }

    getPaymentDescription() {
        return cy.get('p[class="text-justify"]');
    }

}