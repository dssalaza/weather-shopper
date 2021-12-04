# weather-shopper

## Evaluation criteria
Define and write one manual end-to-end test cases which will be automated in next
steps.

These are some aspects we pay particular attention to:
- You can use any language/framework you are most comfortable with.
- Your solution must be independent of a particular OS.
- Your solution must support running tests in parallel.
- Your solution must support two different browsers.
- You must provide instructions on how to run the tests and any installation prerequisites.
- The tests in the provided solution must pass consistently and follow the initial steps.

Nice to have:
- The code should be documented and be easy-to-follow.
- The solution should be well structured.

## Manual end-to-end test case
### Test case: User is able to buy Moisturizers
1. User goes to weathershopper website (https://weathershopper.pythonanywhere.com/)
2. User check current temperature
3. If current temperature is below 19 degrees user clicks on _Buy moisturizers_ button
4. User lands in moisturizees page and check that current url contains /moisturizer
5. User adds two moisturizers to the cart. First, selects the least expensive moisturizer that contains Aloe. Then selects the least expensive moisturizer that contains almond
6. After selecting the proper moisturizers user checks that cart contains 2 items
7. User clicks on _cart_ button
8. User lands in checkout page and check that current url contains /cart
9. User checks that item title, unit price and total price are correct.
10. User clicks on _Pay with Card_ button
11. User fills the credit card details (email: test@test.com cc: 5555555555554444, cvc: 111, date: 12/2030 or any future date, zip; 1111)
12. User lands in confirmation page and check that current url contains /confirmation
13. User checks that there is a "PAYMENT SUCCESS" header and "Your payment was successful. You should receive a follow-up call from our sales team." subheader.
