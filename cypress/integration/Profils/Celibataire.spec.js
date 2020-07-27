/* 
   ___     _ _ _           _        _               
  / __\___| (_) |__   __ _| |_ __ _(_)_ __ ___  ___ 
 / /  / _ \ | | '_ \ / _` | __/ _` | | '__/ _ \/ __|
/ /__|  __/ | | |_) | (_| | || (_| | | | |  __/\__ \
\____/\___|_|_|_.__/ \__,_|\__\__,_|_|_|  \___||___/
                                                        */

describe('Parcours du célibataire', () => {
    let jddCelib = require('../../fixtures/jddCelib')

    before(() => {
        cy.visit('https://www.younited-credit.com/')
        cy.url().should('contain', 'younited-credit.com')
        cy.title().should('include','Crédit')
    })
    
//COMMANDE FAITE
    it('ETAPE 1 : Sélection du projet',() => {
        cy.selectionProjet(jddCelib.projectSelect, jddCelib.amount, jddCelib.creditMaturity)
        cy.get('[data-di-id=di-id-bca9a80c-4fc29f73]').click()
        cy.url().should('include', '/email')
        cy.get("h2").should('contain', 'Découvrez votre offre de prêt de')
    })
//COMMANDE FAITE
    it('ETAPE 2 : Renseignement du mail',() => {
        cy.renseignementMail(jddCelib.mail)
        cy.wait(2000)
        cy.get('[data-di-id="di-id-8c30ab93-a687b9f3"]').click()
        cy.url().should('include', '/familysituation')
        cy.get("h2").should('contain', 'Votre situation familiale')
    })
//COMMANDE FAITE
    it('ETAPE 3 : Renseignement de la situation familiale',() => {
        cy.statutMarital(jddCelib.maritalStatus, jddCelib.childNumberPropal)
        cy.get('#yucOptin').click()
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/housing')
        cy.get("h2").should('contain', 'Votre logement')
    })
//COMMANDE FAITE
    it('ETAPE 4 : Renseignement du logement',() => {
        cy.statutLogement(jddCelib.housingStatus, jddCelib.housingStatusFromMonth, jddCelib.housingStatusFromYear)
        cy.get('#yucPartnerOptin').click()
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/professionalsituation')
        cy.get("h2").should('contain', 'Votre situation professionnelle')
    })
//COMMANDE FAITE
    it('ETAPE 5 : Renseignement de la situation professionnelle',() => {      
        cy.activity(jddCelib.activitySector, jddCelib.profession, jddCelib.businessActivityStartDateMonth, jddCelib.businessActivityStartDateYear)
        cy.get('[data-di-id="di-id-d838032c-320c79b9"] > label').click()
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/incomes')
        cy.get("h2").should('contain', 'Vos revenus mensuels')
    })

    
//COMMANDE FAITE
    it('ETAPE 6 : Renseignement des revenus mensuels',() => {                 
        cy.revenusMensuels(jddCelib.mainIncome, jddCelib.housingAssistance, jddCelib.additionalIncome)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/outcomes')
        cy.get("h2").should('contain', 'Vos charges mensuelles')
    })

//COMMANDE FAITE
    it('ETAPE 7 : Renseignement des charges mensuelles',() => {                 
        cy.chargesMensuelles(jddCelib.rentAmount, jddCelib.loanCount, jddCelib.creditOne, jddCelib.loanAmount)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/bank')
        cy.get("h2").should('contain', 'Votre banque')
    })

//COMMANDE FAITE
    it('ETAPE 8 : Renseignement de la banque',() => {                 
        cy.banque(jddCelib.bank, jddCelib.bankFromYear)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/identity')
        cy.get("h2").should('contain', 'Vos informations')
    })

//COMMANDE FAITE
    it('ETAPE 9 : Détails identité',() => {                 
        cy.identite(jddCelib.gender, jddCelib.lastName, jddCelib.firstName, jddCelib.dayBirth, jddCelib.monthBirth, jddCelib.yearBirth, jddCelib.postalCode, jddCelib.city)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/contact')
        cy.get("h2").should('contain', 'Vos coordonnées')
    })

//COMMANDE FAITE
    it('ETAPE 10 : Page Contact',() => {
        cy.contact(jddCelib.cellPhoneNumber, jddCelib.adress, jddCelib.postalCode, jddCelib.city, jddCelib.countryZone)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.wait(8000)
        cy.url().should('include', '/offers')
        cy.get("body").should('contain', jddCelib.firstName)
    })

    
    
        
})