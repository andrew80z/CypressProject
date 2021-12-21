describe('My First Test', () => {
  it('clicking "type" shows the right headings', () => {
    cy.visit('/')

    cy.get('#sendOpGdpr').click()
    cy.get('#buscador').type('Odessa')
    cy.contains('Ukraine').click()
    cy.contains('Odessa Weather')
    cy.get('a[title="Odessa"]').should('have.text', 'Odessa')
    //OPe Maps page
    cy.contains('Maps').click()
    cy.get('h1').should('have.text','Rain and snow map ')
    cy.get('.mapDefName').click()
    cy.contains('Germany').click()
    cy.get('h1').should('have.text', 'Rain and snow map for Germany')
  })
})
