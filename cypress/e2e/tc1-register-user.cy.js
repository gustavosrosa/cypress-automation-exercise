describe('register user', () => {
  beforeEach(() => {
    // Launch browser
    // Navigate to url 'http://automationexercise.com'
    cy.visit('https://automationexercise.com');
  })

  it('Verify that home page is visible successfully', () => {
    cy.get('a > img').should('be.visible');
  })

  it('register a new user', () => {
    // Click on 'Signup / Login' button
    cy.get('.shop-menu > .nav > :nth-child(4)').click();

    // Verify 'New User Signup!' is visible
    cy.get('.signup-form > h2').should('be.visible');
    
    // Enter name and email address
    cy.get('[data-qa="signup-name"]').type("New user");
    cy.get('[data-qa="signup-email"]').type("new_user@user.com");

    // Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click();

    // Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.get(':nth-child(1) > b').should('be.visible');

    // Fill details: Title, Name, Email, Password, Date of birth
    cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click();
    cy.get('[data-qa="email"]').should("have.value", "new_user@user.com");
    cy.get('[data-qa="name"]').should("have.value", "New user");
    cy.get('[data-qa="password"]').type("password");
    cy.get('[data-qa="days"]').select("12");
    cy.get('[data-qa="months"]').select("June");
    cy.get('[data-qa="years"]').select("1926");

    // Select checkbox 'Sign up for our newsletter!'
    cy.get('[name="newsletter"]').click();

    // Select checkbox 'Receive special offers from our partners!'
    cy.get('[name="optin"]').click();

    //Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.get('[data-qa="first_name"]').type("Company ABCD");
    cy.get('[data-qa="last_name"]').type("Enterprises");
    cy.get('[data-qa="company"]').type("Engeneering");
    cy.get('[data-qa="address"]').type("ABCDEFG Street");
    cy.get('[data-qa="country"]').select("Israel");
    cy.get('[data-qa="state"]').type("State 1");
    cy.get('[data-qa="city"]').type("Tel Aviv");
    cy.get('[data-qa="zipcode"]').type("12345678");
    cy.get('[data-qa="mobile_number"]').type("11121212");

    // Click 'Create Account button'
    cy.get('[data-qa="create-account"]').click()

    // Verify that 'ACCOUNT CREATED!' is visible
    cy.get('[data-qa="account-created"]').should('be.visible');

    // Click 'Continue' button
    cy.get('[data-qa="continue-button"]').click();

    // Verify that 'Logged in as username' is visible
    cy.get('b').should('have.text', 'New user');

    // Click 'Delete Account' button
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click()

    // Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    cy.get('[data-qa="account-deleted"]').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
  })
})