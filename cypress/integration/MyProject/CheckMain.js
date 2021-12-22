describe('My front page checkups ', () => {
  it('Opens main page and verifies the elements ', () => {
   const cityName = "Odessa";
   const countryName = "Germany"
    cy.visit('/')
    // Accept cookies
    cy.get('#sendOpGdpr').click()
    // Example list of items from top panel
    let pageList = [ 'WEATHER', 'VIDEOS', 'ALERTS\n29', 'RADAR', 'MAPS', 'SATELLITES', 'MODELS', 'WORLD']
    // Get list of items from top panel
    cy.get('.ulMove>li').should(($els) => {
     // map jquery elements to array of their innerText
     const elsText = $els.toArray().map(el => el.innerText)
     expect(elsText).to.deep.eq(pageList)

        })
    })
})


