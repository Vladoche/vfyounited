/* 

   _____                                          _           
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
    cy.get('#businessActivityStartDate-input-month').type(businessActivityStartDateMonth).should('have.class', 'ng-valid')
    cy.get('#businessActivityStartDate-input-year').type(businessActivityStartDateYear).should('have.class', 'ng-valid') })

    ////ETAPE 5 MARIE
    Cypress.Commands.add("activityMarried", (activitySector, profession, contractType, employedFrominputmonth, employedFrominputyear ) => {
        cy.get('#activitySector-input').select(activitySector).should('contain', 'Indépendants')
        cy.wait(1000)
        cy.get('#profession-input').select(profession).should('have.class', 'ng-valid')
        cy.get('#contractType-input').select(contractType).should('have.class', 'ng-valid')
        cy.get('#employedFrom-input-month').type(employedFrominputmonth,).should('have.class', 'ng-valid')
        cy.get('#employedFrom-input-year').type(employedFrominputyear).should('have.class', 'ng-valid') })

        //////ETAPE 5 PACSE
        Cypress.Commands.add("activityPacse", (activitySector, profession, pensionFromMonth, pensionFromyear ) => {
            cy.get('#activitySector-input').select(activitySector).should('contain', 'Indépendants')
            cy.wait(1000)
            cy.get('#profession-input').select(profession).should('have.class', 'ng-valid')
            cy.get('#pensionFrom-input-month').type(pensionFromMonth).should('have.class', 'ng-valid')
            cy.get('#pensionFrom-input-year').type(pensionFromyear).should('have.class', 'ng-valid') })

    ////ETAPE 6 MARIE
    Cypress.Commands.add("activityPartner", (partnerActivitySector, partnerProfession, partnerContractType, partnerEmployedFromMonth, partnerEmployedFromYear ) => {
        cy.get('#partnerActivitySector-input').select(partnerActivitySector).should('have.class', 'ng-valid')
        cy.wait(1000)
        cy.get('#partnerProfession-input').select(partnerProfession).should('have.class', 'ng-valid')
        cy.get('#partnerContractType-input').select(partnerContractType).should('have.class', 'ng-valid')
        cy.get('#partnerEmployedFrom-input-month').type(partnerEmployedFromMonth,).should('have.class', 'ng-valid')
        cy.get('#partnerEmployedFrom-input-year').type(partnerEmployedFromYear).should('have.class', 'ng-valid') })

    ////ETAPE 7 MARIE
    Cypress.Commands.add("revenusMensuelsMarie", (mainIncome, coIncome, housingAssistance, additionalIncome) => {
        cy.get('#mainIncome-input').type(mainIncome).should('have.class', 'ng-valid')
        cy.get('#coIncome-input').type(coIncome).should('have.class', 'ng-valid')
        cy.get('#housingAssistance-input').type(housingAssistance).should('have.class', 'ng-valid')
        cy.get('#additionalIncome-input').type(additionalIncome).should('have.class', 'ng-valid') })
    
    ////ETAPE 8 MARIE
    Cypress.Commands.add("chargesMensuellesMarie", (mortgageAmount, loanCount) => {
        cy.get('#mortgageAmount-input').type(mortgageAmount).should('have.class', 'ng-valid')
        cy.get('#loanCount-input').select(loanCount).should('have.class', 'ng-valid') })
        
    ////ETAPE 8 MARIE
    Cypress.Commands.add("banque", (bank, bankFromYear) => {
        cy.get('#bankCode-input').select(bank).should('have.class', 'ng-valid')
        cy.wait(1000)
        cy.get('#bankFrom-input-year').type(bankFromYear).should('have.class','ng-valid') })

//ETAPE 6
Cypress.Commands.add("revenusMensuels", (mainIncome, housingAssistance, additionalIncome) => {
    cy.get('#mainIncome-input').type(mainIncome).should('have.class', 'ng-valid')
    //cy.wait(1000)
    cy.get('#housingAssistance-input').type(housingAssistance).should('have.class', 'ng-valid')
    cy.get('#additionalIncome-input').type(additionalIncome).should('have.class', 'ng-valid') })

//ETAPE 7
Cypress.Commands.add("chargesMensuelles", (rentAmount, loanCount, creditOne, loanAmount) => {
    cy.get('#rentAmount-input').type(rentAmount).should('have.class', 'ng-valid')
    //cy.wait(1000)
    cy.get('#loanCount-input').select(loanCount).should('have.class', 'ng-valid')
    cy.get('#type-input').select(creditOne).should('have.class', 'ng-valid')
    cy.get('#loanAmount-input').type(loanAmount).should('have.class', 'ng-valid') })

    ////ETAPE 8 PACSE
    Cypress.Commands.add("chargesMensuellesPacse", (rentAmount, loanCount) => {
        cy.get('#rentAmount-input').type(rentAmount).should('have.class', 'ng-valid')
        cy.get('#loanCount-input').select(loanCount).should('have.class', 'ng-valid') })

//ETAPE 8 (9 pour MARIE)
Cypress.Commands.add("banque", (bank, bankFromYear) => {
    cy.get('#bankCode-input').select(bank).should('have.class', 'ng-valid')
    cy.wait(1000)
    cy.get('#bankFrom-input-year').type(bankFromYear).should('have.class','ng-valid') })
    
//ETAPE 9 (10 pour MARIE)
Cypress.Commands.add("identite", (gender, lastName, firstName, dayBirth, monthBirth, yearBirth, postalCode, city) => {
    cy.get('[data-di-id="di-id-bf89a9dc-e017ffb1"] > label').click()
    cy.get('#lastName-input').type(lastName).should('have.class', 'ng-valid')
    cy.get('#firstName-input').type(firstName).should('have.class', 'ng-valid')
    cy.get('#dateOfBirth-input-day').type(dayBirth).should('have.class', 'ng-valid')
    cy.get('#dateOfBirth-input-month').type(monthBirth).should('have.class', 'ng-valid')
    cy.get('#dateOfBirth-input-year').type(yearBirth).should('have.class', 'ng-valid')
    cy.get('#postalCode-input').type(postalCode).should('have.class', 'ng-valid')
    cy.get('#city-input').select(city).should('have.class', 'ng-valid') })

    ////ETAPE 11 MARIE

    Cypress.Commands.add("partnerIdentity", (gender, lastName2, maidenName, firstName2, dayBirth2, monthBirth2, yearBirth2, postalCode2, city2) => {
        cy.get(gender).check({ force: true }).should('be.checked')
        cy.get('#lastName-input').type(lastName2).should('have.class', 'ng-valid')
        cy.get('#maidenName-input').type(maidenName).should('have.class', 'ng-valid')
        cy.get('#firstName-input').type(firstName2).should('have.class', 'ng-valid')
        cy.get('#dateOfBirth-input-day').type(dayBirth2).should('have.class', 'ng-valid')
        cy.get('#dateOfBirth-input-month').type(monthBirth2).should('have.class', 'ng-valid')
        cy.get('#dateOfBirth-input-year').type(yearBirth2).should('have.class', 'ng-valid')
        cy.get('#postalCode-input').type(postalCode2).should('have.class', 'ng-valid')
        cy.get('#city-input').select(city2).should('have.class', 'ng-valid') })

//ETAPE 10
Cypress.Commands.add("contact", (cellPhoneNumber, adress, postalCode, city, countryZone) => {
    cy.get('#cellPhoneNumber-input').type(cellPhoneNumber).should('have.class', 'ng-valid')
    cy.get('#address-input').type(adress).should('have.class', 'ng-valid')
    cy.get('#postalCode-input').type(postalCode).should('have.class', 'ng-valid')
    cy.get('#city-input').select(city).should('have.class', 'ng-valid')
    cy.get('#countryZone-input').select(countryZone).should('have.value', 'FR') })