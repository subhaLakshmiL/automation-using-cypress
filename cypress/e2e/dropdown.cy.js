describe('Handling dropdown', () => {

    // Test case for dropdown with the <select> element
    it.skip('dropdown with select', () => {
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country')
          .select('Spain')  // Selects "Spain" from the dropdown
          .should('have.value', 'Spain')  // Verifies that the selected value is "Spain"
    })

    // Test case for dropdown without the <select> element
    it.skip('dropdown without select', () => {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()  // Opens the dropdown
        cy.get('.select2-search__field').type('Spain').type('{enter}')  // Types "Spain" and selects it
        cy.get('#select2-billing_country-container').should('have.text', 'Spain ')  // Verifies that the selected value is "Spain"
    })

    // Test case for auto-suggest dropdown
    it.skip('Auto suggest dropdown', () => {
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Delhi')  // Types "Delhi" into the search box
        cy.get('.suggestion-title').contains('Delhi University').click()  // Clicks on the suggestion "Delhi University"
    })

    
    it('Dynamic dropdown', () => {
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').type('cypress automation')  // Types "cypress automation" into the search box
        cy.get('div.wM6W7d>span').should('have.length', 13)  // Checks that there are 13 suggestions displayed

        cy.get('div.wM6W7d>span').each(($el, index, $list) => {
            if ($el.text() === 'cypress automation tool') {  // Checks if the text of the suggestion is "Cypress Automation tutorial"
                cy.wrap($el).click()  // Clicks on the suggestion
            }
        })  // Closing parenthesis for `each` method

        cy.get('#APjFqb').should('have.value', 'cypress automation tool')  // Verifies that the search box has the selected value
    })
})
