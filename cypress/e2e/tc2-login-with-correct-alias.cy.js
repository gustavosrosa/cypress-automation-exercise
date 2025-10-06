const EMAIL = 'asdasda@asdasda.com'
const PASSWORD = "123"

describe('login with correct credentials', () => {
    beforeEach(() => {
        // Launch browser
        // Navigate to url 'http://automationexercise.com'
        cy.visit('http://automationexercise.com');

        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('[data-qa="signup-name"]').type("New user");
        cy.get('[data-qa="signup-email"]').type(EMAIL)
        cy.get('[data-qa="signup-button"]').click();

        cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click()
        cy.get('[data-qa="password"]').type(PASSWORD)
        cy.get('[data-qa="first_name"]').type("New");
        cy.get('[data-qa="last_name"]').type("Last");
        cy.get('[data-qa="address"]').type("Address");
        cy.get('[data-qa="state"]').type("State");
        cy.get('[data-qa="city"]').type("City");
        cy.get('[data-qa="zipcode"]').type("11111");
        cy.get('[data-qa="mobile_number"]').type("111111")

        cy.get('[data-qa="create-account"]').click();
        cy.get('[data-qa="continue-button"]').click();
        
    });

    it('login with correct credentials', () => {

        // Verify that home page is visible successfully
        cy.get('a > img').should('be.visible');

        // Click on 'Signup / Login' button
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

        // Verify 'Login to your account' is visible
        cy.get('.login-form > h2').should('be.visible');

        // Enter correct email address and password
        cy.get('[data-qa="login-email"]').type(EMAIL);
        cy.get('[data-qa="login-password"]').type(PASSWORD);
        cy.get('[data-qa="login-button"]').click();

        // Verify that 'Logged in as username' is visible
        cy.get(':nth-child(10) > a').should('be.visible');

        // Click 'Delete Account' button
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click();

        // Verify that 'ACCOUNT DELETED!' is visible
        cy.get('.shop-menu > .nav > :nth-child(5) > a').should('be.visible');
    })
})