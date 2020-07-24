describe('Parcours des pacsés', () => {
    let jddCelib = require('../../fixtures/jddPacse')
    

    before(() => {
        cy.visit('https://www.younited-credit.com/')
        cy.url().should('contain', 'younited-credit.com')
        cy.title().should('include','Crédit')
    })
    
    it('Etape 1 : Sélection du type de crédit',() => {
        cy.get('#projectSelect').select(jddCelib.projet).should('contain','Déménagement')
        cy.get('#amount').select(jddCelib.montantPrêt).should('contain','3500 €')
        cy.get('#creditMaturity').select(jddCelib.maturitéCrédit).should('contain','24 mois')
        cy.get('#simulator_1 > .simulator > .simulator-select  > .btn').click()
        cy.url().should('include', '/email')
        cy.get("h2").should('contain', 'Découvrez votre offre de prêt de')
    })

    it('Etape 2 : Renseignement du mail',() => {
        cy.get('#email-input').type(jddCelib.mail).should('have.value', jddCelib.mail)
        cy.wait(2000)
        cy.get('[data-di-id="di-id-8c30ab93-a687b9f3"]').click()
        cy.url().should('include', '/familysituation')
        cy.get("h2").should('contain', 'Votre situation familiale')
    })

    it('Etape 3 : Renseignement de la situation familiale',() => {
        cy.get('#maritalStatus-input').select(jddCelib.statut).should('contain', 'Célibataire')
        cy.wait(2000)
        cy.get('#childNumberPropal-input').select(jddCelib.nbreEnfants).should('contain', jddCelib.nbreEnfants)
        cy.get('#yucOptin').click()
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/housing')
        cy.get("h2").should('contain', 'Votre logement')
    })

    it('Etape 4 : Renseignement du logement',() => {
        cy.get('#housingStatus-input').select(jddCelib.statutLogement).should('contain', 'Locataire')
        cy.wait(1000)
        cy.get('#housingStatusFrom-input-month').type(jddCelib.moisLogement).should('have.value', jddCelib.moisLogement)
        cy.get('#housingStatusFrom-input-year').type(jddCelib.anneeLogement).should('have.value', jddCelib.anneeLogement)
        cy.get('#yucPartnerOptin').click()
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/professionalsituation')
        cy.get("h2").should('contain', 'Votre situation professionnelle')
    })

    it('Etape 5 : Renseignement de la situation professionnelle',() => {      
        cy.get('#activitySector-input').select(jddCelib.secteurActivite).should('contain', 'Indépendants')
        cy.wait(1000)
        cy.get('#profession-input').select(jddCelib.metier).should('have.value',jddCelib.metier)
        cy.get('#businessActivityStartDate-input-month').type(jddCelib.metierDebutMois).should('have.value', jddCelib.metierDebutMois)
        cy.get('#businessActivityStartDate-input-year').type(jddCelib.metierDebutAnnee).should('have.value', jddCelib.metierDebutAnnee)
        cy.get('[data-di-id="di-id-d838032c-320c79b9"] > label').click()
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/incomes')
        cy.get("h2").should('contain', 'Vos revenus mensuels')
    })

    it('Etape 6 : Renseignement des revenus mensuels',() => {                 
        cy.get('#mainIncome-input').type(jddCelib.revenuNet).should('have.value', jddCelib.revenuNet)
        cy.wait(1000)
        cy.get('#housingAssistance-input').type(jddCelib.housingAssistance).should('have.value',jddCelib.housingAssistance)
        cy.get('#additionalIncome-input').type(jddCelib.additionalIncome).should('have.value', jddCelib.additionalIncome)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/outcomes')
        cy.get("h2").should('contain', 'Vos charges mensuelles')
    })

    it('Etape 7 : Renseignement des charges mensuelles',() => {                 
        cy.get('#rentAmount-input').type(jddCelib.emprunt).should('have.value', jddCelib.emprunt)
        cy.wait(1000)
        cy.get('#loanCount-input').select(jddCelib.loanCount).should('have.value',jddCelib.loanCount)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/bank')
        cy.get("h2").should('contain', 'Votre banque')
    })

    it('Etape 8 : Renseignement de la banque',() => {                 
        cy.get('#bankCode-input').select(jddCelib.bank).should('have.value', jddCelib.bank)
        cy.wait(1000)
        cy.get('#bankFrom-input-year').type(jddCelib.bankFromYear).should('have.value',jddCelib.bankFromYear)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/identity')
        cy.get("h2").should('contain', 'Vos informations')
    })

    it('Etape 8 : Détails identité',() => {                 
        cy.get('[data-di-id="di-id-bf89a9dc-e017ffb1"] > label').click()
        cy.get('#lastName-input').type(jddCelib.lastName).should('have.value',jddCelib.lastName)
        cy.get('#firstName-input').type(jddCelib.firstName).should('have.value',jddCelib.firstName)
        cy.get('#dateOfBirth-input-day').type(jddCelib.dayBirth).should('have.value',jddCelib.dayBirth)
        cy.get('#dateOfBirth-input-month').type(jddCelib.monthBirth).should('have.value',jddCelib.monthBirth)
        cy.get('#dateOfBirth-input-year').type(jddCelib.yearBirth).should('have.value',jddCelib.yearBirth)
        cy.get('#postalCode-input').type(jddCelib.postalCode).should('have.value',jddCelib.postalCode)
        cy.get('#city-input').select(jddCelib.city).should('have.value', '1927219000')
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/contact')
        cy.get("h2").should('contain', 'Vos coordonnées')
    })
    it('Etape 9 : Coordonnées',() => {                 
        cy.get('#cellPhoneNumber-input').type(jddCelib.cellPhoneNumber).should('have.value',jddCelib.cellPhoneNumber)
        cy.get('#address-input').type(jddCelib.firstName).should('have.value',jddCelib.firstName)
        cy.get('#postalCode-input').type(jddCelib.postalCode).should('have.value',jddCelib.postalCode)
        cy.get('#city-input').select(jddCelib.city).should('have.value', '1927219000')
        cy.get('#countryZone-input').select(jddCelib.countryZone).should('have.value', 'FR')
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.wait(8000)
        cy.url().should('include', '/offers')
        cy.get("body").should('contain', jddCelib.firstName)
    })

    
    
        
})