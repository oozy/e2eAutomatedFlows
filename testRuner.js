import puppeteer from 'puppeteer';
import axios from 'axios';
import { generateTestAction } from './actionUtils/utils.js';
// import { testObject } from './mockTest';

const getTestJson = async (taskId) => {
	const result = await axios.get(
		`https://danielad37.wixsite.com/dive-tech/_functions/task_object_by_id/${taskId}`,
		{},
		{
			headers: {
				'Content-type': 'text/plain',
			},
		}
	);
	return result.data.testObject;
};

export const runTest = async (taskId, pageUrl) => {
	const { tests = [], height, width } = await getTestJson(taskId);

	const browser = await puppeteer.launch({
		headless: true,
		args: ['--no-sandbox'],
	});
	try {
		console.log('Start', new Date());
		const page = await browser.newPage();
		await page.setViewport({
			width,
			height,
		});
		await forLoop(tests, page, pageUrl);
		await page.close();
		await browser.close();
		console.log('End', new Date());
	} catch (err) {
		console.log(err);
	}
};

const forLoop = async (tests, page, pageUrl) => {
	for (let index = 0; index < tests.length; index++) {
		const test = tests[index];
		const nextTest = tests[index + 1] || null;

		if (nextTest) {
			console.time('start waiting ...');
			const timeToWait =
				new Date(nextTest.time - test.time).getSeconds() * 1000;
			await delay(timeToWait);
			console.timeEnd('start waiting ...');
		}

		if (index === 0) {
			try {
				await page.goto(pageUrl, { waitUntil: 'networkidle0' });
			} catch (error) {
				page.close();
			}
		}
		const data = { page, ...test };
		await generateTestAction({ ...data });
	}
};

export const delay = (ms) => {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
};
