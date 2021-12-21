describe('My First Test', () => {
  it('clicking "type" shows the right headings', () => {
   const cityName = "Odessa";
   const countryName = "Germany"
    cy.visit('/')
    // Accept cookies
    cy.get('#sendOpGdpr').click()
    // Enter test city #1
    cy.get('#buscador').type('Odessa')
    cy.contains('Ukraine').click()
    cy.contains('Odessa Weather')
    cy.get('a[title="Odessa"]').should('have.text', `${cityName}`)
    //Open Maps page
    cy.contains('Maps').click()
    cy.get('h1').should('have.text','Rain and snow map ')
    // Enter test city #2
    cy.get('.mapDefName').click()
    cy.contains('Germany').click()
    cy.get('h1').should('have.text', 'Rain and snow map for ' + countryName)
  })
})
