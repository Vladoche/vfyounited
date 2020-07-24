/* 
______          _      _     _____                                   
| ___ \        (_)    | |   /  __ \                                _ 
| |_/ / __ ___  _  ___| |_  | /  \/_   _ _ __  _ __ ___  ___ ___  (_)
|  __/ '__/ _ \| |/ _ \ __| | |   | | | | '_ \| '__/ _ \/ __/ __|    
| |  | | | (_) | |  __/ |_  | \__/\ |_| | |_) | | |  __/\__ \__ \  _ 
\_|  |_|  \___/| |\___|\__|  \____/\__, | .__/|_|  \___||___/___/ (_)
              _/ |                  __/ | |                          
             |__/                  |___/|_|                          
__   __                _ _           _                               
\ \ / /               (_) |         | |                              
 \ V /___  _   _ _ __  _| |_ ___  __| |                              
  \ // _ \| | | | '_ \| | __/ _ \/ _` |                              
  | | (_) | |_| | | | | | ||  __/ (_| |                              
  \_/\___/ \__,_|_| |_|_|\__\___|\__,_|                              
                                                                     
                                                                     
 _____              _ _ _                                            
/  __ \            | (_) |                                           
| /  \/_ __ ___  __| |_| |_                                          
| |   | '__/ _ \/ _` | | __|                                         
| \__/\ | |  __/ (_| | | |_                                          
 \____/_|  \___|\__,_|_|\__|                                         
                                                                     
                                                                    
 *** BIENVENUE SUR MA PRESENTATION D'AUTOMATISATION DE TEST AVEC CYPRESS ***     */

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

    it('ETAPE 6 : Renseignement des revenus mensuels',() => {                 
        cy.get('#mainIncome-input').type(jddCelib.revenuNet).should('have.value', jddCelib.revenuNet)
        cy.wait(1000)
        cy.get('#housingAssistance-input').type(jddCelib.housingAssistance).should('have.value',jddCelib.housingAssistance)
        cy.get('#additionalIncome-input').type(jddCelib.additionalIncome).should('have.value', jddCelib.additionalIncome)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/outcomes')
        cy.get("h2").should('contain', 'Vos charges mensuelles')
    })

    it('ETAPE 7 : Renseignement des charges mensuelles',() => {                 
        cy.get('#rentAmount-input').type(jddCelib.emprunt).should('have.value', jddCelib.emprunt)
        cy.wait(1000)
        cy.get('#loanCount-input').select(jddCelib.loanCount).should('have.value',jddCelib.loanCount)
        cy.get('#type-input').select(jddCelib.creditOne).should('have.class', 'ng-valid')
        cy.get('#loanAmount-input').type(jddCelib.loanAmount).should('have.value', jddCelib.loanAmount)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/bank')
        cy.get("h2").should('contain', 'Votre banque')
    })

    it('ETAPE 8 : Renseignement de la banque',() => {                 
        cy.get('#bankCode-input').select(jddCelib.bank).should('have.value', jddCelib.bank)
        cy.wait(1000)
        cy.get('#bankFrom-input-year').type(jddCelib.bankFromYear).should('have.value',jddCelib.bankFromYear)
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/identity')
        cy.get("h2").should('contain', 'Vos informations')
    })

    it('ETAPE 9 : Détails identité',() => {                 
        cy.get('[data-di-id="di-id-bf89a9dc-e017ffb1"] > label').click()
        cy.get('#lastName-input').type(jddCelib.lastName).should('have.value',jddCelib.lastName)
        cy.get('#firstName-input').type(jddCelib.firstName).should('have.value',jddCelib.firstName)
        cy.get('#dateOfBirth-input-day').type(jddCelib.dayBirth).should('have.value',jddCelib.dayBirth)
        cy.get('#dateOfBirth-input-month').type(jddCelib.monthBirth).should('have.value',jddCelib.monthBirth)
        cy.get('#dateOfBirth-input-year').type(jddCelib.yearBirth).should('have.value',jddCelib.yearBirth)
        cy.get('#postalCode-input').type(jddCelib.postalCode).should('have.value',jddCelib.postalCode)
        cy.get('#city-input').select(jddCelib.city).should('have.class', 'ng-valid')
        cy.get('[data-test=navigator-compact-forward]').click()
        cy.url().should('include', '/contact')
        cy.get("h2").should('contain', 'Vos coordonnées')
    })
    it('ETAPE 10 : Page Contact',() => {                 
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