
Given(/^User on the SauceDemo login page$/, () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('.login_logo').should('have.text', 'Swag Labs');
});

When(/^User enter username "([^"]*)" and password "([^"]*)"$/, (username,password) => {
	console.log(username,password);
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
});

When(/^User click the login button$/, () => {
	cy.contains('Login').click();
});

When(/^User can see Products page$/, () => {
    cy.title().should('eq','Swag Labs')
});

When(/^User add Products to cart$/, () => {
    cy.contains('Sauce Labs Backpack').should('have.text','Sauce Labs Backpack')
	cy.get('#add-to-cart-sauce-labs-backpack').click()
});

When(/^User click on cart icon$/, () => {
    cy.get('[data-test="shopping-cart-link"]').click()
});

When(/^User can see the added product price and description on the cart page$/, () => {
    cy.get('[data-test="cart-desc-label"]').should('have.text','Description')
    cy.get('div[class="inventory_item_price"]').first().should('have.text','$29.99')
    cy.get(':nth-child(3) > .cart_item_label > [data-test="inventory-item-desc"]')
    .should('have.text','carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
});

When(/^User click on checkout button$/, () => {
	cy.get('#checkout').should('have.text','Checkout').click()
});

When(/^User fill form details$/, () => {
	cy.get('#first-name').type('Anup')
    cy.wait(1000)
    cy.get('#last-name').type('Deshmane')
    cy.wait(1000)
    cy.get('#postal-code').type('40078')
});

When(/^User click on continue button$/, () => {
    cy.get('#continue').click()
});

When(/^User can see checkout overview$/, () => {
    cy.get('span[class="title"]').should('have.text','Checkout: Overview')
});

When(/^User click on finish button$/, () => {
    cy.get('#finish').should('have.text','Finish').click()
});

Then(/^user can see order despatched message$/, () => {
    cy.get('.complete-header').should('have.text','Thank you for your order!')
    cy.wait(1000)
    cy.get('.complete-text')
    .should('have.text','Your order has been dispatched, and will arrive just as fast as the pony can get there!')
});
