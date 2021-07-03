import puppeteer from 'puppeteer';
import fetch from 'node-fetch';
import {
  typeOnInput,
  generateTestStep,
  generateTestAction,
} from './actionUtils/utils.js';

const getTestJson = async () => {
  const data = await fetch(
    'https://danielad37.wixsite.com/oozy-test/_functions/oozy_the_king',
  )
    .then((response) => response.json())
    .then((data) => data);
  // return data;
  return {
    pageUrl: 'http://localhost:3000/search',
    tests: [
      {
        element: 'input',
        action: 'type',
        dataHook: 'search-input',
        value: 'oozy',
      },
      {
        element: 'input',
        action: 'delete',
        dataHook: 'search-input',
        value: '',
      },
      {
        element: 'div',
        action: 'exists',
        dataHook: 'all-books',
        value: 'true',
      },
    ],
  };
};

(async function() {
  const { pageUrl = '', tests = [] } = await getTestJson();
  const browser = await puppeteer.launch({
    headless: true,
    // slowMo: 500,
    args: [
      '--no-sandbox', // I needed these args for it to run on my machine, you probably don't need them.
      '--disable-setuid-sandbox',
    ],
  });
  try {
    console.log('Start');
    const page = await browser.newPage();
    await forLoop(tests, page, pageUrl);
    await browser.close();
    console.log('End');
  } catch (err) {
    console.log(err);
  }
})();

const forLoop = async (tests, page, pageUrl) => {
  for (let index = 0; index < tests.length; index++) {
    const test = tests[index];
    await page.goto(pageUrl, { waitUntil: 'networkidle0' });
    const data = { page, ...test };
    await generateTestAction({ ...data });
  }
};
