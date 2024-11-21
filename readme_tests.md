Before starting, ensure that Cypress is installed in your project. If not, run:

npm install cypress --save-dev

Explanation
1. beforeEach: Sets up initial conditions: clears localStorage and navigates to the page before each test.

2. Login Tests: Verifies different scenarios:
- The login form is visible when the user is not authenticated.
- Successful login with valid credentials.
- Unsuccessful login with invalid credentials.

3. Logout Test: Ensures that clicking the logout button returns the user to the login screen.

4. showUser Test: Validates the functionality of toggling the visibility of the "logout" menu.

Notes
- Make sure the IDs of the elements on your page match those specified in the code (#email, #password, #logout, #logoutButton, etc.).
- If your buttons have different texts (e.g., "Log In", "Log Out"), replace them accordingly in the tests.
- The path to your HTML file is specified in cy.visit(). This can be a local file (file://...) or a URL on a server.
