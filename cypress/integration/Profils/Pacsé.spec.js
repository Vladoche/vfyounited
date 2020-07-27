/* ___                         
  / _ \__ _  ___ ___  ___  ___ 
 / /_)/ _` |/ __/ __|/ _ \/ __|
/ ___/ (_| | (__\__ \  __/\__ \
\/    \__,_|\___|___/\___||___/
                                 */

describe('Parcours des mariés', () => {
    let jddPacse = require('../../fixtures/jddPacse')
    
    before(() => {
        cy.visit('https://www.younited-credit.com/')
        cy.url().should('contain', 'younited-credit.com')
        cy.title().should('include','Crédit')
    })
    
    it('ETAPE 1 : Sélection du projet',() => {
        cy.selectionProjet(jddPacse.projectSelect, jddPacse.amount, jddPacse.creditMaturity)
        cy.get('[data-di-id=di-id-bca9a80c-4fc29f73]').click()
        cy.url().should('include', '/email')
        cy.get("h2").should('contain', 'Découvrez votre offre de prêt de')
    })

    it('ETAPE 2 : Renseignement du mail',() => {
        cy.renseignementMail(jddPacse.mail)
        cy.wait(2000)
        cy.get('[data-di-id="di-id-8c30ab93-a687b9f3"]').click()
        cy.url().should('include', '/familysituation')
        cy.get("h2").should('contain', 'Votre situation familiale')
    })

    it('ETAPE 3 : Renseignement de la situation familiale',() => {
        cy.statutMarital(jddPacse.maritalStatus, jddPacse.childNumberPropal)
        cy.get('#yucOptin').click()
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/housing')
        cy.get("h2").should('contain', 'Votre logement')
    })

    it('ETAPE 4 : Renseignement du logement',() => {
        cy.statutLogement(jddPacse.housingStatus, jddPacse.housingStatusFromMonth, jddPacse.housingStatusFromYear)
        cy.get('#yucPartnerOptin').click()
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/professionalsituation')
        cy.get("h2").should('contain', 'Votre situation professionnelle')
    })

    it('ETAPE 5 : Renseignement de la situation professionnelle',() => {      
        cy.activityPacse(jddPacse.activitySector, jddPacse.profession, jddPacse.pensionFromMonth, jddPacse.pensionFromyear)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/partnerprofession')
        cy.get("h2").should('contain', 'Profession de votre conjoint')
    })

    it('ETAPE 6 : Renseignement de la profession du conjoint',() => {      
        cy.activityPartner(jddPacse.partnerActivitySector, jddPacse.partnerProfession, jddPacse.partnerContractType, jddPacse.partnerEmployedFromMonth, jddPacse.partnerEmployedFromYear)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/incomes')
        cy.get("h2").should('contain', 'Vos revenus mensuels')
    })

    it('ETAPE 7 : Renseignement des revenus mensuels',() => {                 
        cy.revenusMensuelsMarie(jddPacse.mainIncome, jddPacse.coIncome, jddPacse.housingAssistance, jddPacse.additionalIncome)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/outcomes')
        cy.get("h2").should('contain', 'Vos charges mensuelles')
    })

    it('ETAPE 8 : Renseignement des charges mensuelles',() => {                 
        cy.chargesMensuellesPacse(jddPacse.rentAmount, jddPacse.loanCount)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/bank')
        cy.get("h2").should('contain', 'Votre banque')
    })

    it('ETAPE 9 : Renseignement de la banque',() => {                 
        cy.banque(jddPacse.bank, jddPacse.bankFromYear)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/identity')
        cy.get("h2").should('contain', 'Vos informations')
    })

    it('ETAPE 10 : Détails identité',() => {                 
        cy.identite(jddPacse.gender, jddPacse.lastName, jddPacse.firstName, jddPacse.dayBirth, jddPacse.monthBirth, jddPacse.yearBirth, jddPacse.postalCode, jddPacse.city)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/partneridentity')
        cy.get("h2").should('contain', 'Les informations de votre conjoint')
    })

    it('ETAPE 11 : Détails identité du conjoint',() => {                 
        cy.partnerIdentity(jddPacse.gender2, jddPacse.lastName2, jddPacse.maidenName, jddPacse.firstName2, jddPacse.dayBirth2, jddPacse.monthBirth2, jddPacse.yearBirth2, jddPacse.postalCode2, jddPacse.city2)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/contact')
        cy.get("h2").should('contain', 'Vos coordonnées')
    })

    it('ETAPE 12 : Page Contact',() => {
        cy.contact(jddPacse.cellPhoneNumber, jddPacse.adress, jddPacse.postalCode, jddPacse.city, jddPacse.countryZone)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.wait(3000)
        cy.url().should('include', '/offers')
        
    })

    
    
        
})