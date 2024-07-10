describe('check UI elements', ()=>{

    it('Checking the radio buttons', ()=>{

        cy.visit("https://demowebshop.tricentis.com/build-your-cheap-own-computer")

        cy.get('input#product_attribute_72_5_18_52').should('be.visible')
        cy.get('input#product_attribute_72_5_18_53').should('be.visible')
        cy.get('input#product_attribute_72_5_18_65').should('be.visible')

        //selecting radio buttons
        cy.get('input#product_attribute_72_5_18_53').check().should('be.checked')
        cy.get('input#product_attribute_72_5_18_65').should('not.be.checked')
        cy.get('input#product_attribute_72_5_18_52').should('not.be.checked')

     
    })

    it('Checking the checkboxes', ()=>{

        cy.visit("https://demowebshop.tricentis.com/build-your-cheap-own-computer")

        //checking visbility of the elements
        // cy.get('#product_attribute_72_8_30_93').should('be.visible')
        // cy.get('#product_attribute_72_8_30_95').should('be.visible')
        // cy.get('#product_attribute_72_8_30_94').should('be.visible')

        // cy.get('#product_attribute_72_8_30_93').check().should('be.checked')
        // cy.get('#product_attribute_72_8_30_93').uncheck().should('not.be.checked')

        //to select all the checkboxes

        // cy.get("input[type='checkbox']").check().should('be.checked')
        // //to unselect all the checkboxes
        // cy.get("input[type='checkbox']").uncheck().should('not.be.checked')

        //select the first checkboxes
        cy.get("input[type='checkbox']").first().check().should('be.checked')
        
        cy.get("input[type='checkbox']").last().check().should('be.checked')
    })

})