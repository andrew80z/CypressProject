   const cityName = "Odessa";
   const countryName = "Germany";
   // Example list of items from top panel
let pageList = ['WEATHER', 'VIDEOS', 'ALERTS', 'RADAR', 'MAPS', 'SATELLITES', 'MODELS', 'WORLD'];
var mapMenuList = ['WIND', 'SYMBOLS', 'TEMPERATURE', 'ALL'];

describe('My front page checkups ', () => {
  it('Opens main page and verifies the elements ', () => {
    cy.visit('/')
    // Accept cookies
    cy.get('#sendOpGdpr').click()
    cy.get('#h1Ul>h1').should('have.text', "Weather - 14 days")
      // check Temperature, sybmos, wind menu  
      cy.get('.navmapa>li').should(($els) => {
          const mapMenuListPageTest = $els.toArray().map(el => el.innerText);
          expect(mapMenuListPageTest).to.deep.eq(mapMenuList);

      })
  
    // Get list of items from top panel
    cy.get('.ulMove>li>a').should(($els) => {
    // map jquery elements to array of their innerText

        const elsText = $els.toArray().map(el => el.innerText)
     //temp solution Need to define the to obtain Alerts number from API request
    pageList[2] = elsText[2];
    expect(elsText).to.deep.eq(pageList)
        })
    })
})
/*
describe('Select city and open map', () => {
  it('Select city and opens maps for a country', () => {

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
    //check Maps header
    cy.get('h1').should('have.text','Rain and snow map ')
    // Enter test city #2
    cy.get('.mapDefName').click()
    cy.contains('Germany').click()
    cy.get('h1').should('have.text', 'Rain and snow map for ' + countryName)

    //Check Videos header text
    cy.contains('Videos').click()
    cy.get('.titulo-portada').should('have.text', 'Weather Videos - Latest')
  })
})

*/