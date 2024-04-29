
Given(/^User on the SauceDemo login page$/, () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('.login_logo').should('have.text', 'Swag Labs');
});

When(/^User enter username "([^"]*)" and password "([^"]*)"$/, (username,password) => {
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
});

When(/^User click the login button$/, () => {
    cy.contains('Login').click();
});

When(/^User can see Products page$/, () => {
	cy.title().should('eq','Swag Labs')
});

When(/^User add first and last Products$/, () => {
    cy.contains('Sauce Labs Backpack').should('have.text','Sauce Labs Backpack')
	cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.contains('Test.allTheThings() T-Shirt (Red)').should('have.text','Test.allTheThings() T-Shirt (Red)')
	cy.get("button[class='btn btn_primary btn_small btn_inventory ']").last().click()
});

When(/^User click on cart icon$/, () => {
	cy.get('[data-test="shopping-cart-link"]').click()
});

Then(/^User can see the added product price and description on the cart page$/, () => {
	cy.get('[data-test="cart-desc-label"]').should('have.text','Description')
    cy.get('div[class="inventory_item_price"]').first().should('have.text','$29.99')
    cy.get(':nth-child(3) > .cart_item_label > [data-test="inventory-item-desc"]')
    .should('have.text','carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
    cy.get('div[class="inventory_item_price"]').last().should('have.text','$15.99')
    cy.get(':nth-child(4) > .cart_item_label > [data-test="inventory-item-desc"]')
    .should('have.text','This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.')
});
