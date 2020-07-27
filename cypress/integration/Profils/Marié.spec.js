describe('Parcours des mariés', () => {
    let jddMarie = require('../../fixtures/jddMarie')
    
    before(() => {
        cy.visit('https://www.younited-credit.com/')
        cy.url().should('contain', 'younited-credit.com')
        cy.title().should('include','Crédit')
    })
    
    it('ETAPE 1 : Sélection du projet',() => {
        cy.selectionProjet(jddMarie.projectSelect, jddMarie.amount, jddMarie.creditMaturity)
        cy.get('[data-di-id=di-id-bca9a80c-4fc29f73]').click()
        cy.url().should('include', '/email')
        cy.get("h2").should('contain', 'Découvrez votre offre de prêt de')
    })

    it('ETAPE 2 : Renseignement du mail',() => {
        cy.renseignementMail(jddMarie.mail)
        cy.wait(2000)
        cy.get('[data-di-id="di-id-8c30ab93-a687b9f3"]').click()
        cy.url().should('include', '/familysituation')
        cy.get("h2").should('contain', 'Votre situation familiale')
    })

    it('ETAPE 3 : Renseignement de la situation familiale',() => {
        cy.statutMarital(jddMarie.maritalStatus, jddMarie.childNumberPropal)
        cy.get('#yucOptin').click()
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/housing')
        cy.get("h2").should('contain', 'Votre logement')
    })

    it('ETAPE 4 : Renseignement du logement',() => {
        cy.statutLogement(jddMarie.housingStatus, jddMarie.housingStatusFromMonth, jddMarie.housingStatusFromYear)
        cy.get('#yucPartnerOptin').click()
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/professionalsituation')
        cy.get("h2").should('contain', 'Votre situation professionnelle')
    })

    it('ETAPE 5 : Renseignement de la situation professionnelle',() => {      
        cy.activityMarried(jddMarie.activitySector, jddMarie.profession, jddMarie.contractType, jddMarie.employedFrominputmonth, jddMarie.employedFrominputyear)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/partnerprofession')
        cy.get("h2").should('contain', 'Profession de votre conjoint')
    })

    

    
    
        
})