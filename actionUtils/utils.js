import assert from 'assert';
import { errorsFormat } from './errorConfig';

const dataHookBuilder = (dataHook) => {
	if (dataHook?.value != '')
		return dataHook.type === 'id'
			? `[id='${dataHook.value}']`
			: `[data-hook='${dataHook.value}']`;
	return;
};

const getElementByDataHook = async (page, dataHook) => {
	totalTests++;
	try {
		const selector = `${dataHookBuilder(dataHook)}`;
		const elementPromise = await page.$(selector);
		succededTests++;
		return elementPromise;
	} catch (error) {
		testErrors = [...testErrors, `typeOnInputError: ${error}`];
		console.log('typeOnInputError', error);
	}
};

const getAttribute = (data) => {
	const { dataHook = '', id = '' } = data;
	return {
		type: Boolean(id) ? 'id' : 'data-hook',
		value: Boolean(id) ? id : dataHook,
	};
};

export const generateTestAction = async (data) => {
	const { element, action, dataHook = '', value, page, x, y } = data;

	const attribute = getAttribute(data);
	const testAction = element + '_' + action;
	console.log('dataHook', dataHook);
	console.log('testAction', testAction);

	switch (testAction.trim()) {
		case 'input_change':
			return OnChangeInput(attribute, value, page);
		case 'svg_click':
		case 'input_click':
		case 'button_click':
			return clickOnElement(attribute, page);
		case 'select_click':
			return clickOnElementWithValue(attribute, page, value);
		case 'select_change':
			return clickOnElementWithValue(attribute, page, value);
		case 'a_click':
			return clickOnLink(page, element, value);
		default:
			if (action || ''.includes('mouse')) {
				return mouseEventsHandler(action, attribute, page, x, y);
			}
			console.log(
				`not found this data-hook ===>${attribute.value}, testAction ===>${testAction}`
			);
			break;
	}
};

const mouseEventsHandler = (action, attribute, page, x, y) => {
	switch (action) {
		case 'mouseup':
			return mouseUpElem(attribute, page, x, y);
		case 'mousedown':
			return mouseDownElem(attribute, page, x, y);
		default:
			return hoverOnElement(attribute, page);
	}
};

export const OnChangeInput = async (dataHook, value, page) => {
	try {
		const input = await getElementByDataHook(page, dataHook);
		let newValue = '';
		if (input) {
			await input.focus();
			await input.press('Backspace');
			await input.type(`${value}`);
			newValue = await page.evaluate((el) => el.value, input);
			// need to add it it to the chrom exstantion.
			// await input.type(String.fromCharCode(13), { delay: 1000 });
		}
		if (newValue === '') {
			newValue = await page.evaluate((el) => el.value, input);
		}
		console.log({ newValue });
		assertNewVal(value, newValue, page, dataHook?.value || '');
		console.log('test for typeOnInput passed');
		return;
	} catch (error) {
		console.log('typeOnInputError', error);
	}
};

const assertNewVal = async (value, newValue, page, dataHook) => {
	totalTests++;
	try {
		assert.strictEqual(value, newValue);
		succededTests++;
	} catch (error) {
		console.log('assertNewVal==========>', error);
		testErrors = [...testErrors, errorsFormat(dataHook, error)];
	}
};

export const clickOnElement = async (dataHook, page) => {
	totalTests++;
	try {
		const element = await getElementByDataHook(page, dataHook);
		if (element) {
			try {
				await element.evaluate((e) => e.click());
			} catch (e) {
				await element.click();
			}
			succededTests++;
			return element;
		}
		return;
	} catch (error) {
		testErrors = [...testErrors, `clickOnElement datahook: ${dataHook.value}`];
		console.log(`clickOnElement datahook: ${dataHook.value}`, error);
	}
};

export const clickOnElementWithValue = async (dataHook, page, value) => {
	try {
		await clickOnElement(dataHook, page);
		const selector = `${dataHookBuilder(dataHook)}`;
		await page.waitForSelector(selector, {
			timeout: 1000,
		});

		// await page.$x(`//${element}[contains(text(), "${text}")]`);
		const option = (
			await page.$x(`//select${selector}/option[text() = ${value}]`)
		)[0];
		const value = await (await option.getProperty('value')).jsonValue();
		// await page.select('#selectId', value);
		await page.select(`select${selector}`, value);

		const newOption = await page.$eval(
			`select${selector}`,
			(node) => node.value
		);
		assertNewVal(value, newOption, page, dataHook?.value || '');
	} catch (error) {
		testErrors = [
			...testErrors,
			`click On Element With Value datahook: ${dataHook.value}`,
		];

		console.log('clickOnElementWithValue', error);
	}
};

const clickOnLink = async (page, element, text) => {
	totalTests++;
	try {
		const [button] = await page.$x(`//${element}[contains(text(), "${text}")]`);
		if (button) {
			await button.click();
			succededTests++;
		}
	} catch (error) {
		testErrors = [...testErrors, `click On Link: ${error}`];
		console.error(`hoverOnElement datahook:${dataHook.value}`, e);
	}
};

const hoverOnElement = async (dataHook, page) => {
	totalTests++;
	try {
		const selector = dataHookBuilder(dataHook);
		await page.waitForSelector(selector, {
			timeout: 3000,
		});
		await page.hover(selector);
		succededTests++;
	} catch (e) {
		testErrors = [
			...testErrors,
			`hover On Element datahook: ${dataHook.value}`,
		];
		console.error(`hoverOnElement datahook:${dataHook.value}`, e);
	}
};

const promiseWrapper = async (fn, page, dataHook) => {
	try {
		return await fn();
	} catch (ex) {
		testErrors = [
			...testErrors,
			`will not execute dataHook: ${dataHook.value}`,
		];

		console.log(`will not execute dataHook: ${dataHook?.value}`);
	}
};

const mouseUpElem = async (dataHook, page, x, y) => {
	totalTests++;
	try {
		// Move teh drag item to container and release mouse
		const selector = dataHookBuilder(dataHook);
		const container = await page.$(selector);
		if (container) {
			await container.boundingBox();
			await page.mouse.move(x, y);
			await page.waitFor(100);
			await page.mouse.up();
			succededTests++;
		}
	} catch (e) {
		testErrors = [...testErrors, `mouseUp hover On Element: ${dataHook.value}`];

		console.error(`hoverOnElement datahook:${dataHook.value}`, e);
	}
};

const mouseDownElem = async (dataHook, page, x, y) => {
	totalTests++;
	try {
		const selector = dataHookBuilder(dataHook);
		const dragItem = await page.$(selector);
		if (dragItem) {
			await dragItem.boundingBox();
			await page.mouse.move(x, y);
			await page.mouse.down();
			await page.waitFor(100);
			succededTests++;
		}
	} catch (e) {
		testErrors = [
			...testErrors,
			`mouse Down hover On Element: ${dataHook.value}`,
		];
		console.error(`hoverOnElement datahook:${dataHook.value}`, e);
	}
};
