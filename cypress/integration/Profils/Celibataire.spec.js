describe('Parcours du célibataire', () => {
    beforeEach(() => {
        cy.fixture('jdd').as('infosUser')
    })
    

    before(() => {
        cy.visit('https://www.younited-credit.com/')
        cy.title()
            .should('include','Crédit')
    })
    
    it('Etape 1 : Sélection du type de crédit',() => {
    cy.get('@infosUser').then( jdd => {
        //cy.log(jdd.url) 
        cy.get('#projectSelect')
            .select('NEWCAR')
            .should('contain','Véhicule neuf')
        cy.get('#amount')
            .select('2K')
            .should('contain','2000 €')
        cy.get('#creditMaturity')
            .select('M24')
            .should('contain','24 mois')
        cy.get('#simulator_1 > .simulator > .simulator-select > .btn')
            .click()
        cy.url()
            .should('include', '/email')
        cy.get("h2")
            .should('contain', 'Découvrez votre offre de prêt de')
        })
    })
    it('Etape 2 : Renseignement du mail',() => { 
          
        cy.get('#email-input')  
            .type('dpunk@hotmail.com')
            .should('have.value', 'dpunk@hotmail.com')
        cy.wait(3000)
        cy.get('[data-di-id="di-id-8c30ab93-a687b9f3"]')
            .click()
        cy.url()
            .should('include', '/familysituation')
        cy.get("h2")
            .should('contain', 'Votre situation familiale')
    })
    
        
})