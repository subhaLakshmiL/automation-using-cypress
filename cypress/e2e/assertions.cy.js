import 'cypress-xpath';

describe("Assertion demo", () => {
  
  it("Implicit Assertions", () => {
    // Visit the demo web shop page
    cy.visit("https://demowebshop.tricentis.com");

    // Assert the URL
    cy.url().should('include', 'demowebshop')
      .and('eq', 'https://demowebshop.tricentis.com/')
      .and('contain', 'demowebshop.tricentis.com')
      .and('not.contain', 'notdemowebshop.tricentis.com');

    // Assert the title
    cy.title().should('include', 'Demo Web Shop')
      .and('contain', 'Web')
      .and('not.include', 'tricentis');

    // Assert the visibility and existence of the logo
    cy.get('.header-logo > a > img').should('be.visible')
      .and('exist');

    // Assert the number of links (this number may change, adjust as needed)
    cy.xpath('//a').should('have.length', 95)

    // Click the login link
    cy.xpath("//a[@class='ico-login']").click()

    // Enter email and password
    cy.xpath("//input[@id='Email']").type('1asubha@gmail.com');
    cy.xpath("//input[@id='Email']").should('have.value', '1asubha@gmail.com');
    cy.xpath("//input[@id='Password']").type('123@subha');
    cy.xpath("//input[@id='Password']").should('have.value', '123@subha');

    // Click the login button
    cy.get('form > .buttons > .button-1').click();

    // Assert the email is displayed in the account section
    cy.get('.header-links > ul > :nth-child(1) > .account').should('have.text', '1asubha@gmail.com');
  });

  it("Explicit Assertions", () => {

    cy.visit("https://demowebshop.tricentis.com");
    // Click the login link
    cy.xpath("//a[@class='ico-login']").click()

    //enter email and pwd
    cy.xpath("//input[@id='Email']").type('1asubha@gmail.com');
    cy.xpath("//input[@id='Password']").type('123@subha');
    // Click the login button
    cy.get('form > .buttons > .button-1').click();

    
    // Assert the email is displayed in the account section
    let expectedmail = '1asubha@gmail.com'
    cy.get('.header-links > ul > :nth-child(1) > .account').then( (capturedfromlocator)=>
        {
             let actualmail = capturedfromlocator.text()
            //explicit assertion
            // BDD approach 
             expect(actualmail).to.equal(expectedmail)
             expect(actualmail).to.not.equal(expectedmail)

             //TDD approach
             assert.equal(actualmail,expectedmail)
             assert.not.equal(actualmail,expectedmail)
        })
    
    
    
  });


});
