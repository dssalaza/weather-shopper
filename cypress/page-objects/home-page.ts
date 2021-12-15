export class HomePage{

    getCurrentTemperature() {
        return cy.get('div[id="weather"]').then(($temperatureString) => {
            return cy.wrap(Number($temperatureString.text().match(/\d+/)[0]));
        })
    }

    getBuyProductByName(productName) {      
        return cy.get('.btn-primary').contains(productName);
    }

    evaluateProductToBuy(temperature) {
        temperature = Number(temperature);
        if (temperature < 19){
            return 'moisturizers';
        }
        if(temperature > 34) {
            return 'sunscreens';
        }
        else{
            return `Don't need to buy sunscreens or moisturizers`
        }
    }

}