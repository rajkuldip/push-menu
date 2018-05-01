const visitMainPage = () => {
    cy.server();

    // Cypress doesn't support window.fetch, so this is a temporary workaround.
    // It will be supported soon (https://github.com/cypress-io/cypress/issues/687).
    cy.visit("/", {
        onBeforeLoad: win => {
            win.fetch = null;
        }
    });

};

export default {
    visitMainPage
};
