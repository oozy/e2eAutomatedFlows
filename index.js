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
    pageUrl: 'http://localhost:3001/search',
    tests: [
      {
        element: 'a',
        action: 'click',
        dataHook: '',
        value: 'Collections',
        time: 1625425607196,
        pageUrl: 'http://localhost:3001/collections',
      },
      {
        element: 'a',
        action: 'click',
        dataHook: '',
        value: 'Search Books',
        time: 1625425608381,
        pageUrl: 'http://localhost:3001/search',
      },
      {
        element: 'a',
        action: 'click',
        dataHook: '',
        value: 'Collections',
        time: 1625425609490,
        pageUrl: 'http://localhost:3001/collections',
      },
      {
        element: 'a',
        action: 'click',
        dataHook: '',
        value: 'Search Books',
        time: 1625425610339,
        pageUrl: 'http://localhost:3001/search',
      },
    ],
  };
};

(async function() {
  const { pageUrl = '', tests = [] } = await getTestJson();
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 250,
    args: [
      '--no-sandbox', // I needed these args for it to run on my machine, you probably don't need them.
      '--disable-setuid-sandbox',
    ],
  });
  try {
    console.log('Start', new Date());
    const page = await browser.newPage();
    await forLoop(tests, page, pageUrl);
    await browser.close();
    console.log('End', new Date());
  } catch (err) {
    console.log(err);
  }
})();

const forLoop = async (tests, page) => {
  for (let index = 0; index < tests.length; index++) {
    const test = tests[index];
    const nextTest = tests[index] || null;

    if (nextTest) {
      console.time('start waiting ...');
      const timeToWait =
        new Date(nextTest.time - test.time).getSeconds() * 1000;
      await delay(timeToWait);
      console.timeEnd('start waiting ...');
    }
    // if (page.url() !== test.pageUrl)
    //   await page.goto(test.pageUrl, { waitUntil: 'networkidle0' });
    if (index === 0)
      await page.goto(test.pageUrl, { waitUntil: 'networkidle0' });
    const data = { page, ...test };
    await generateTestAction({ ...data });
  }
};

export const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};
