import testUtils from "../support/test-utils";

describe("Main Panel", () => {
    beforeEach(() => testUtils.visitMainPage());

    context("when page is loaded", () => {
        it("should show landing Page", () => {
            cy.get(".message-header .message-header__title")
                .should("contain", "Inbox");
        });

        it("should show inbox data", () => {
            cy.get(".message-container .messages")
                .should("not.be.empty");
        });
    });
    context("when click on hamburger menu", () => {
        it("should show menu items", () => {
            cy.get(".message-header .message-header__icon")
                .click();
            cy.get(".navigation")
                .should("not.be.empty");
        });
        it("should close menu items when click twice", () => {
            cy.get(".message-header .message-header__icon")
                .click();
            cy.get(".message-header .message-header__icon")
                .click();
        });
    });
});
