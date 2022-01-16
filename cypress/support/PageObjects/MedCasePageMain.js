class MedCasePageMain {
    /// <reference types="cypress" />
   

    checkTextAbstractLocation(myIput) {
        return cy.contains(myIput)
    }
    navigateToMain() {
        cy.visit('/')
    }
    agreeTncChbx() {
        return cy.get('input[id="terms&conditions"]')
    }
    approveTncBtn() {
        return cy.get('label[class="form-check-label"]')
    }

    inputEmailInp() {
        return cy.get('input[id="email"]')
    }
    inputPassInp() {
        return cy.get('input[id="password"]').should('have.attr', 'placeholder', 'Create your password')
    }
    revealPassBtn() {
        return cy.get('svg[viewBox = "64 64 896 896"]')
    }
    signUpBtn() {
        return cy.get('button[id="btn-auth"]')//.should('have.text', 'Sign Up')
    }
    signInBtn() {
        return cy.get('button[id="btn-switch"]').should('have.text', 'Sign In')
    }
    joinWgoogleBtn() {
        return cy.get('span[id="google-txt"]').should('have.text', 'Join with Google')
    }
    joinWfbBtn() {
        return cy.get('span[id="facebook-txt"]').should('have.text', 'Join with Facebook')
    }
    loginBtn() {
        return cy.get('button[id="goto-sign-up"]')
    }
    // Login flow elements
    //first name
    firstNameInp() {
        return cy.get('input[placeholder="First Name"]')
    }
    //last name
    lastNameInp() {
        return cy.get('input[placeholder="Last Name"]')
    }
    //next button
    regNextBtn() {
        return cy.get('button').contains('Next')
    }
    regSelectCountryInp() {
        //Select Country
        return cy.get('div').contains('Select Country')
    }
    regSelectLangInp() {
        //Select Native Language
        return cy.get('div').contains('Select Native Language')
    }
    regPhoneNumInp() {
        return cy.get('input[name="phone.phoneNumber"]')
    }
    regSpecInp() {
        //Select Speciality
        return cy.get('div').contains('Select Speciality')
    }
    regYrsOfPrInp() {
        //How many years?
        return cy.get('div').contains('How many years?')
    }
    countryOfLicInp() {
        //Country of license
        return cy.get('div').contains('Country of license')
    }
    regCountryRegNumInp() {
        //placeholder="Medical License or Registration Number"
        return cy.get('input[placeholder="Medical License or Registration Number"]')
    }
    regSkipBtn() {
        return cy.get('a').contains('Skip for now')
    }
    uploadFile(filepath) {
        cy.get('input[type="file"]').attachFile(filepath);
       
    }

    marktplaceBtn() {
        return cy.get('button').contains('Go to marketplace')
    }

}

export default MedCasePageMain