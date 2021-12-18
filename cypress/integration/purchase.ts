import { HomePage } from "../page-objects/home-page";
import { ProductsPage } from "../page-objects/products-page";
import { CheckoutPage } from "../page-objects/checkout-page";
import { ConfirmationPage } from "../page-objects/confirmation-page";


import '../support/commands/commands'

describe('Login using TypeScript', () => {

    const homePage = new HomePage();
    const productsPage = new ProductsPage();
    const checkoutPage = new CheckoutPage();
    const confirmationPage = new ConfirmationPage();

    let creditCard;

    beforeEach(() => {
        cy.fixture('creditCard.json').then( data => {
            creditCard = data;
        });
    })

    it('User can buy an moisturizer or sunscreens', () => {

        cy.visit(Cypress.env('prod_url'));
        homePage.getCurrentTemperature().then(temperature => {
            const productName: string = homePage.evaluateProductToBuy(temperature);
            homePage.getBuyProductByName(productName).click();
        });
        
        productsPage.getLowerPriceByIngredient('Aloe').then(lowerPrice => {
            productsPage.addProductToCartByPrice(lowerPrice).click();
        });


        productsPage.getLowerPriceByIngredient('Almond').then(lowerPrice => {
            productsPage.addProductToCartByPrice(lowerPrice).click();
        });

        productsPage.getCart().click();

        checkoutPage.evaluateNumberOfItemsInTheCard(2);
        cy.validateUrlContains('/cart')
        checkoutPage.getPayWithCardBtn().click();
        cy.wait(500);
        checkoutPage.getStripeEmail().type(creditCard.basic_test_card.email);
        checkoutPage.getStripeCardNumber().type(creditCard.basic_test_card.number);
        checkoutPage.getStripeExpireDate().type(creditCard.basic_test_card.date);
        checkoutPage.getStripeCVV().type(creditCard.basic_test_card.cvv);
        checkoutPage.getStripeBillingZip().type(creditCard.basic_test_card.zip);
        checkoutPage.getStripeSubmitButton().click();
        cy.validateUrlContains('/confirmation');
        confirmationPage.getPaymentHeader().contains('SUCCESS');
        confirmationPage.getPaymentDescription().contains('successful');

    })

})

 