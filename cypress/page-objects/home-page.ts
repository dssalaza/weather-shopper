export class HomePage{

    getCurrentTemperature() {
        return cy.get('div[id="weather"]');
    }

    getMoisturizersButton(productName) {      
        return cy.get('.btn-primary').contains(productName);
    }


}