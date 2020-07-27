/*        
  /\/\   __ _ _ __(_) ___  ___ 
 /    \ / _` | '__| |/ _ \/ __|
/ /\/\ \ (_| | |  | |  __/\__ \
\/    \/\__,_|_|  |_|\___||___/
                                 */

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

    it('ETAPE 6 : Renseignement de la profession du conjoint',() => {      
        cy.activityPartner(jddMarie.partnerActivitySector, jddMarie.partnerProfession, jddMarie.partnerContractType, jddMarie.partnerEmployedFromMonth, jddMarie.partnerEmployedFromYear)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/incomes')
        cy.get("h2").should('contain', 'Vos revenus mensuels')
    })

    it('ETAPE 7 : Renseignement des revenus mensuels',() => {                 
        cy.revenusMensuelsMarie(jddMarie.mainIncome, jddMarie.coIncome, jddMarie.housingAssistance, jddMarie.additionalIncome)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/outcomes')
        cy.get("h2").should('contain', 'Vos charges mensuelles')
    })

    it('ETAPE 8 : Renseignement des charges mensuelles',() => {                 
        cy.chargesMensuellesMarie(jddMarie.mortgageAmount, jddMarie.loanCount)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/bank')
        cy.get("h2").should('contain', 'Votre banque')
    })

    it('ETAPE 9 : Renseignement de la banque',() => {                 
        cy.banque(jddMarie.bank, jddMarie.bankFromYear)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/identity')
        cy.get("h2").should('contain', 'Vos informations')
    })

    it('ETAPE 10 : Détails identité',() => {                 
        cy.identite(jddMarie.gender, jddMarie.lastName, jddMarie.firstName, jddMarie.dayBirth, jddMarie.monthBirth, jddMarie.yearBirth, jddMarie.postalCode, jddMarie.city)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/partneridentity')
        cy.get("h2").should('contain', 'Les informations de votre conjoint')
    })

    it('ETAPE 11 : Détails identité du conjoint',() => {                 
        cy.partnerIdentity(jddMarie.gender2, jddMarie.lastName2, jddMarie.maidenName, jddMarie.firstName2, jddMarie.dayBirth2, jddMarie.monthBirth2, jddMarie.yearBirth2, jddMarie.postalCode2, jddMarie.city2)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/contact')
        cy.get("h2").should('contain', 'Vos coordonnées')
    })

    it('ETAPE 12 : Page Contact',() => {
        cy.contact(jddMarie.cellPhoneNumber, jddMarie.adress, jddMarie.postalCode, jddMarie.city, jddMarie.countryZone)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.wait(3000)
        cy.url().should('include', '/offers')
        
    })

    
    
        
})