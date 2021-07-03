/**
 * @name Google search
 * @desc Searches Google.com for a term and checks if the first link matches. This check should fail.
 */

const puppeteer = require('puppeteer')
const fetch = require('node-fetch')

let browser
let page
let data

const getTestJson = async () => {
  const data = await fetch(
    'https://danielad37.wixsite.com/oozy-test/_functions/oozy_the_king'
  )
    .then((response) => response.json())
    .then((data) => data)
  return data
}

beforeAll(async () => {
  browser = await puppeteer.launch()
  page = await browser.newPage()
})

describe('Google Homepage', async () => {
  test('Dummy Test', () => {
    expect(true).toBeTruthy()
  })
});
(async () => {
  data = await getTestJson()
  describe('Google Homepage', async () => {
    test('Dummy Test', () => {
      expect(true).toBeTruthy()
    });

    [1, 2].forEach(async () =>
      test('has title "Google"', async () => {
        console.log('Google', data)
        await page.goto('https://google.com', { waitUntil: 'networkidle0' })
        const title = await page.title()
        expect(title).toBe('Google')
      })
    )

    afterAll(async () => {
      await browser.close()
    })
  })
})()
