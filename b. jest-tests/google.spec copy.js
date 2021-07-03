/**
 * @name Google search
 * @desc Searches Google.com for a term and checks if the first link matches. This check should fail.
 */

const fs = require('fs')
const util = require('util')
let obj
// var test;
// const getTests = fs.readFile(`${__dirname}/googleTest.json`, 'utf8', function(
//   err,
//   data,
// ) {
//   if (err) throw err;
//   return JSON.parse(data);
// });
const readFile = util.promisify(fs.readFile)
async function getStuff () {
  return readFile(`${__dirname}/googleTest.json`, 'utf8')
}
const getWeather = async () => {
  await getStuff().then((data) => data)
}
console.log('test', getWeather())
const puppeteer = require('puppeteer')

let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: true
  })
  page = await browser.newPage()
})

// describe('Google Homepage', () => {
//   test('has title "Google"', async () => {
//     await page.goto(obj.pageUrl, { waitUntil: 'networkidle0' });
//     const title = await testCaseByElement(suite.element);
//     expect(title).toBe(suite.value);
//   });

//   afterAll(async () => {
//     await browser.close();
//   });
// });
// test &&
//   test.map((suite) =>

//   );

const testCaseByElement = async (data) => {
  switch (data) {
    case 'title':
      return await page.title()
  }
}
