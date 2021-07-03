import puppeteer from 'puppeteer';
import fetch from 'node-fetch';
import { generateTestAction } from './actionUtils/utils.js';

const getTestJson = async () => {
  const data = await fetch(
    'https://danielad37.wixsite.com/oozy-test/_functions/oozy_the_king',
  )
    .then((response) => response.json())
    .then((data) => data);
  // return data;
  console.log(12313213213213213132132132);
  return {
    pageUrl: 'http://localhost:3000/search',
    tests: [
      {
        element: 'input',
        action: 'click',
        dataHook: 'search-input',
        value: '',
        time: 1625346434955,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'input',
        action: 'click',
        dataHook: 'search-input',
        value: '',
        time: 1625346434955,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'input',
        action: 'change',
        dataHook: 'search-input',
        value: 'gogo',
        time: 1625346437159,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'svg',
        action: 'click',
        dataHook: 'imageIcon-book-0',
        time: 1625346443191,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'svg',
        action: 'click',
        dataHook: 'imageIcon-book-0',
        time: 1625346443191,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'select',
        action: 'click',
        dataHook: 'select-book-0',
        value: '123',
        time: 1625346443859,
        pageUrl: 'http://localhost:3001/search',
      },
      // {
      //   element: 'select',
      //   action: 'click',
      //   dataHook: 'select-book-0',
      //   value: '123',
      //   time: 1625346443859,
      //   pageUrl: 'http://localhost:3001/search',
      // },
      // {
      //   element: 'select',
      //   action: 'change',
      //   dataHook: 'select-book-0',
      //   value: '321',
      //   time: 1625346445093,
      //   pageUrl: 'http://localhost:3001/search',
      // },
      // {
      //   element: 'svg',
      //   action: 'click',
      //   dataHook: 'imageIcon-book-1',
      //   time: 1625346446018,
      //   pageUrl: 'http://localhost:3001/search',
      // },
      // {
      //   element: 'svg',
      //   action: 'click',
      //   dataHook: 'imageIcon-book-1',
      //   time: 1625346446018,
      //   pageUrl: 'http://localhost:3001/search',
      // },
      // {
      //   element: 'select',
      //   action: 'click',
      //   dataHook: 'select-book-1',
      //   value: '123',
      //   time: 1625346446549,
      //   pageUrl: 'http://localhost:3001/search',
      // },
      // {
      //   element: 'select',
      //   action: 'click',
      //   dataHook: 'select-book-1',
      //   value: '123',
      //   time: 1625346446549,
      //   pageUrl: 'http://localhost:3001/search',
      // },
      // {
      //   element: 'select',
      //   action: 'change',
      //   dataHook: 'select-book-1',
      //   value: '321',
      //   time: 1625346447769,
      //   pageUrl: 'http://localhost:3001/search',
      // },
    ],
  };
};

(async function() {
  const { pageUrl = '', tests = [] } = await getTestJson();
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 200,
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
  await page.goto(pageUrl, { waitUntil: 'networkidle0' });
  for (let index = 0; index < tests.length; index++) {
    const test = tests[index];
    const data = { page, ...test };
    await generateTestAction({ ...data });
  }
};
