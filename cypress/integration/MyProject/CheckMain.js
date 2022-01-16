
import MainPage from '../../support/PageObjects/MedCasePageMain';
const mainPage = new MainPage();
const testEmail = 'testUser@testmail9991234.com';
const testPass = 'MyTestPass#123$%r';

describe('My front page checkups ', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()

    })

    it('Opens main page and verifies the elements text', () => {
        mainPage.navigateToMain()
        // Check non active labels

        //mainPage.checkTextAbstractLocation('Create account')
        mainPage.checkTextAbstractLocation('Create account')
        mainPage.checkTextAbstractLocation('Join the global marketplace for clinicians and healthcare professionals')
        mainPage.checkTextAbstractLocation('Or Sign In With')
        mainPage.checkTextAbstractLocation('Already have an account?')
        // check text of buttons and inputs
        mainPage.approveTncBtn().should('not.be.disabled')
        mainPage.inputEmailInp().should('not.be.disabled')
        mainPage.inputPassInp().should('not.be.disabled')
        mainPage.signUpBtn().should('be.disabled')
        mainPage.signInBtn().should('not.be.disabled')
        mainPage.joinWgoogleBtn()
        mainPage.joinWfbBtn()
        mainPage.loginBtn().should('not.be.disabled').should('have.text', 'Log In')
    }) 
    it('Creates a new user account', () => {
        // Test data
        
        const fName = 'testFName';
        const lName = 'testLName';
        const country = 'Poland';
        const natLang = 'Polish';
        const phNum = '456345234';
        const specialization = 'Anesthesiology';
        const expYrs = '5 years';
        const licCountry = 'Poland';
        const licNum = '333444555';
        const cvUpload = 'testCV.txt'

        mainPage.navigateToMain()
        // Input email and password, agree to TnC and submit
        mainPage.signUpBtn().should('be.disabled')
        mainPage.inputEmailInp().type(testEmail)
        mainPage.inputPassInp().type(testPass)
        mainPage.agreeTncChbx().click()
        mainPage.signUpBtn().should('not.be.disabled')
        mainPage.revealPassBtn().click()
        mainPage.signUpBtn().click()
        // Input first and last name
        mainPage.firstNameInp().type(fName)
        mainPage.lastNameInp().type(lName)
        mainPage.regNextBtn().click()
        // Input coountry and native language
        mainPage.regSelectCountryInp().click().type(`${country}{enter}`)
        mainPage.regSelectLangInp().click().type(`${natLang}{enter}`)
        mainPage.regNextBtn().click()
        // Input phone number
        mainPage.regPhoneNumInp().click().type(phNum)
        mainPage.regNextBtn().click()
        // Yes, i know wait that is not a best practice for Cypress but this is a workaround due to issues on page
        cy.wait(2000)
        // Input specialilzation and experience        
        mainPage.regSpecInp().click().type(`${specialization}{enter}`)
        mainPage.regYrsOfPrInp().click().type(`${expYrs}{enter}`)
        mainPage.regNextBtn().click()
        cy.wait(2000)
        // Input license country and lic number
        mainPage.countryOfLicInp().click().type(`${licCountry}{enter}`)
        mainPage.regCountryRegNumInp().click().type(`${licNum}`)
        mainPage.regNextBtn().click()
        cy.wait(2000)
        mainPage.uploadFile(cvUpload)
        mainPage.regNextBtn().click()
        // Go to market page after finishing registration
        mainPage.marktplaceBtn().should('not.be.disabled').click()
        // Check data which was input during registration
        mainPage.checkTextAbstractLocation(country)
        mainPage.checkTextAbstractLocation(natLang)
        mainPage.checkTextAbstractLocation(specialization)
        mainPage.checkTextAbstractLocation(expYrs)
        mainPage.checkTextAbstractLocation(licCountry)
        mainPage.checkTextAbstractLocation(licNum)
        mainPage.checkTextAbstractLocation(cvUpload)
        // This is currently failing
        mainPage.checkTextAbstractLocation(testEmail)
        mainPage.checkTextAbstractLocation(fName)
        mainPage.checkTextAbstractLocation(lName)
        mainPage.checkTextAbstractLocation(phNum)
        

    })
   
    it('Login test user', () => {
        mainPage.navigateToMain()
        // Input existing credentials
        mainPage.loginBtn().click()
        mainPage.inputEmailInp().type(testEmail)
        mainPage.inputPassInp().type(testPass)
        // added to enable the login button
        mainPage.revealPassBtn().click()
        mainPage.signUpBtn().click()
        // Check that user is on the main page
        mainPage.checkTextAbstractLocation('This is your profile')

    }) 

});
