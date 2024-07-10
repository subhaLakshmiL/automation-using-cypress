//import 'cypress-xpath';


describe ('XPathLocators', () => {

    it('find the products', () =>{

        cy.visit("https://demowebshop.tricentis.com/desktops")
        cy.xpath('#small-searchterms').type('book');
        cy.xpath('.button-1.search-box-button').click();
        cy.xpath('#Q').should('have.value', 'book');
        
    })

})  /*

/// <reference types="cypress" />

describe('XPath Locators Example', () => {
  before(() => {
    // Visit the page you want to test
    cy.visit('https://example.com');
  });

  it('should find elements using XPath locators', () => {
    // Example 1: Find element by text
    cy.xpath("//button[text()='Submit']").click();

    // Example 2: Find element by attribute
    cy.xpath("//input[@name='username']").type('myUsername');

    // Example 3: Find element by partial text
    cy.xpath("//a[contains(text(), 'Learn more')]").click();

    // Example 4: Find element by class
    cy.xpath("//div[@class='example-class']").should('be.visible');

    // Example 5: Find element by index
    cy.xpath("(//input[@type='checkbox'])[1]").check();

    // Add more tests as needed
  });
});
*/