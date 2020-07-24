/*    _____                                          _           
  / ____|                                        | |          
 | |     ___  _ __ ___  _ __ ___   __ _ _ __   __| | ___  ___ 
 | |    / _ \| '_ ` _ \| '_ ` _ \ / _` | '_ \ / _` |/ _ \/ __|
 | |___| (_) | | | | | | | | | | | (_| | | | | (_| |  __/\__ \
  \_____\___/|_| |_| |_|_| |_| |_|\__,_|_| |_|\__,_|\___||___/
 LISTE DES COMMANDES DU PROJET                                                             */

//ETAPE 1
Cypress.Commands.add('selectionProjet', (projectSelect, amount, creditMaturity) => {
    cy.get('#projectSelect').select(projectSelect).should('contain','Déménagement')
    cy.get('#amount').select(amount).should('contain','3500 €')
    cy.get('#creditMaturity').select(creditMaturity).should('contain','24 mois')   })

//ETAPE 2
Cypress.Commands.add("renseignementMail", (mail) => {
    cy.get('#email-input').type(mail).should('have.value', mail)   })

//ETAPE 3

Cypress.Commands.add("statutMarital", (maritalStatus, childNumberPropal) => {
    cy.get('#maritalStatus-input').select(maritalStatus).should('contain', 'Célibataire')
    cy.get('#childNumberPropal-input').select(childNumberPropal).should('have.value', childNumberPropal) })
    
//ETAPE 4
Cypress.Commands.add("statutLogement", (housingStatus, housingStatusFromMonth, housingStatusFromYear) => {
    cy.get('#housingStatus-input').select(housingStatus).should('contain', 'Locataire')
    cy.wait(1000)
    cy.get('#housingStatusFrom-input-month').type(housingStatusFromMonth).should('have.class', 'ng-valid')
    cy.get('#housingStatusFrom-input-year').type(housingStatusFromYear).should('have.class', 'ng-valid') })

//ETAPE 5
Cypress.Commands.add("activity", (activitySector, profession, businessActivityStartDateMonth, businessActivityStartDateYear ) => {
    cy.get('#activitySector-input').select(activitySector).should('contain', 'Indépendants')
    cy.wait(1000)
    cy.get('#profession-input').select(profession).should('have.value', profession)
    cy.get('#businessActivityStartDate-input-month').type(businessActivityStartDateMonth).should('have.value', businessActivityStartDateMonth)
    cy.get('#businessActivityStartDate-input-year').type(businessActivityStartDateYear).should('have.value', businessActivityStartDateYear) })

//ETAPE 6

//ETAPE 7

//ETAPE 8

//ETAPE 9

//ETAPE 10