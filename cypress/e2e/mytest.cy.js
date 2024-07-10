//const cypress = require("cypress")


describe('My First Test', () => {
  
  it('test1-verifying title +ve test', () => {
    
    cy.visit("https://demowebshop.tricentis.com/")

    //capture the title of the page and verifying 
    cy.title().should('eq','Demo Web Shop')

  })

  it('test2-verify title -ve test', () => {
    
    cy.visit("https://demowebshop.tricentis.com/")

    //capture the title of the page and verifying 
    cy.title().should('eq','@1Demo Web Shop')

  })


})