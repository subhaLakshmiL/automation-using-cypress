describe('CssLocators', () => {

    it("registerUser", () => {
        cy.visit("https://demowebshop.tricentis.com/");

        cy.get(".ico-register").click();  

        cy.get('#gender-female').click();

        cy.get("#FirstName").type("subha");  
        cy.get("#LastName").type("Lakshmi");
        cy.get("#Email").type("1asubha@gmail.com");
        cy.get("#Password").type("123@subha");
        cy.get("#ConfirmPassword").type("123@subha");

        cy.get('#register-button').click();

        // Assertion to verify registration success by checking the presence of the account email
        cy.get('.account').should('contain', '1asubha@gmail.com');
    });

    it('verifyTitleNegativeTest', () => {
        // Assuming you are still on the same page or a different URL
        // that you want to verify the title after the registration

        // Visit the site again if needed
        // cy.visit("https://demowebshop.tricentis.com/");
        
        // This is a negative test to check that the account email should not be present if not logged in
        // Ensure you are on a page where this condition makes sense, like a logout page or home page
        cy.get('.account').should('not.contain', '1subha@gmail.com');
    });
});
