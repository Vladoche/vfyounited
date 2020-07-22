describe('Parcours du célibataire', () => {
    beforeEach(() => {
        cy.fixture('jdd').as('infosUser')
    })
    

    before(() => {
        cy.visit('https://www.younited-credit.com/')
        cy.url().should('contain', 'younited-credit.com')
        cy.title().should('include','Crédit')
    })
    
    it('Etape 1 : Sélection du type de crédit',() => {
    cy.get('@infosUser').then( jdd => {
        
        cy.get('#projectSelect').select(jdd[0].projet).should('contain','Déménagement')
        cy.get('#amount').select(jdd[0].montantPrêt).should('contain','3500 €')
        cy.get('#creditMaturity').select(jdd[0].maturitéCrédit).should('contain','24 mois')
        cy.get('#simulator_1 > .simulator > .simulator-select > .btn').click()
        cy.url().should('include', '/email')
        cy.get("h2").should('contain', 'Découvrez votre offre de prêt de')
        })
    })

    it('Etape 2 : Renseignement du mail',() => {
    cy.get('@infosUser').then( jdd => {
          
        cy.get('#email-input').type(jdd[0].mail).should('have.value', jdd[0].mail)
        cy.wait(2000)
        cy.get('[data-di-id="di-id-8c30ab93-a687b9f3"]').click()
        cy.url().should('include', '/familysituation')
        cy.get("h2").should('contain', 'Votre situation familiale')
        })
    })

    it('Etape 3 : Renseignement de la situation familiale',() => {
    cy.get('@infosUser').then( jdd => {
          
        cy.get('#maritalStatus-input').select(jdd[0].statut).should('contain', 'Célibataire')
        cy.wait(2000)
        cy.get('#childNumberPropal-input').select(jdd[0].nbreEnfants).should('contain', jdd[0].nbreEnfants)
        cy.get('#yucOptin').click()
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/housing')
        cy.get("h2").should('contain', 'Votre logement')
        })
    })

    it('Etape 4 : Renseignement du logement',() => {
    cy.get('@infosUser').then( jdd => {
              
        cy.get('#housingStatus-input').select(jdd[0].statutLogement).should('contain', 'Locataire')
        cy.wait(1000)
        cy.get('#housingStatusFrom-input-month').type(jdd[0].moisLogement).should('have.value', jdd[0].moisLogement)
        cy.get('#housingStatusFrom-input-year').type(jdd[0].anneeLogement).should('have.value', jdd[0].anneeLogement)
        cy.get('#yucPartnerOptin').click()
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/professionalsituation')
        cy.get("h2").should('contain', 'Votre situation professionnelle')
            })
    })
    it('Etape 5 : Renseignement de la situation professionnelle',() => {
    cy.get('@infosUser').then( jdd => {
                      
        cy.get('#activitySector-input').select(jdd[0].secteurActivite).should('contain', 'Indépendants')
        cy.wait(1000)
        cy.get('#profession-input').select(jdd[0].metier).should('have.value',jdd[0].metier)
        cy.get('#businessActivityStartDate-input-month').type(jdd[0].metierDebutMois).should('have.value', jdd[0].metierDebutMois)
        cy.get('#businessActivityStartDate-input-year').type(jdd[0].metierDebutAnnee).should('have.value', jdd[0].metierDebutAnnee)
        cy.get('[data-di-id="di-id-d838032c-320c79b9"] > label').click()
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/incomes')
        cy.get("h2").should('contain', 'Vos revenus mensuels')
            })
    })
    
        
})