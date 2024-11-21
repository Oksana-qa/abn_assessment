describe('Authentication and UI Tests', () => {
    beforeEach(() => {
        // Set up initial conditions before each test
        cy.visit('path/to/your/html/file'); // Replace with the path to your HTML file
        localStorage.clear(); // Clear localStorage before each test
    });

    it('should display login form by default', () => {
        // Check that the login form is displayed by default
        cy.get('#login').should('be.visible');
        cy.get('#content').should('not.be.visible');
        cy.get('#navigation').should('not.be.visible');
    });

    it('should log in a user with valid credentials', () => {
        // Enter login credentials
        cy.get('#email').type('admin@admin.com');
        cy.get('#password').type('2020');
        cy.contains('Log In').click(); // Assuming the login button has the text "Log In"

        // Verify that the user is logged in
        cy.get('#login').should('not.be.visible');
        cy.get('#content').should('be.visible');
        cy.get('#navigation').should('be.visible');
        cy.wrap(localStorage.getItem('logged')).should('eq', 'admin@admin.com');
    });

    it('should not log in with invalid credentials', () => {
        // Enter invalid credentials
        cy.get('#email').type('wrong@admin.com');
        cy.get('#password').type('wrongpassword');
        cy.contains('Log In').click();

        // Verify that the user is not logged in
        cy.get('#login').should('be.visible');
        cy.get('#content').should('not.be.visible');
        cy.get('#navigation').should('not.be.visible');
        cy.wrap(localStorage.getItem('logged')).should('be.null');
    });

    it('should log out a user', () => {
        // Log in first
        cy.get('#email').type('admin@admin.com');
        cy.get('#password').type('2020');
        cy.contains('Log In').click();

        // Log out
        cy.contains('Log Out').click(); // Assuming the logout button has the text "Log Out"

        // Verify that the user is logged out
        cy.get('#login').should('be.visible');
        cy.get('#content').should('not.be.visible');
        cy.get('#navigation').should('not.be.visible');
        cy.wrap(localStorage.getItem('logged')).should('be.null');
    });

    it('should toggle visibility of logout menu', () => {
        // Check that the "logout" menu is initially hidden
        cy.get('#logout').should('have.css', 'display', 'none');

        // Click to show the "logout" menu
        cy.get('#logoutButton').click(); // Replace with the ID or selector of the element that triggers `showUser`
        cy.get('#logout').should('have.css', 'display', 'flex');
        cy.get('#logout').should('have.css', 'align-items', 'flex-end');
        cy.get('#logout').should('have.css', 'height', '50px');

        // Click to hide the "logout" menu
        cy.get('#logoutButton').click();
        cy.get('#logout').should('have.css', 'display', 'none');
    });
});