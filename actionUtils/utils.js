import assert from 'assert';

export const generateTestStep = (element, page, dataHook) => {
  switch (element) {
    case 'title':
      return page.title();
    case 'input':
      return typeOnInput(dataHook, value, page);
    default:
      return page.title();
  }
};

const dataHookBuilder = (dataHook) => {
  return `[data-hook='${dataHook}']`;
};

const getElementByDataHook = async (page, dataHook) => {
  try {
    await page.waitForSelector(dataHookBuilder(dataHook), 3000);
    const selector = `${dataHookBuilder(dataHook)}`;
    await page.waitForSelector(selector);
    const element = await page.$(selector);
    console.log('getElementByDataHook:/*/*/* Pass');
    return element;
  } catch (error) {
    console.log('typeOnInputError', error);
  }
};

export const generateTestAction = async (data) => {
  const { element, action, dataHook, value, page } = data;
  const testAction = element + '_' + action;
  console.log('\n\n\n\n\n\n');
  console.log('testAction', testAction);
  switch (testAction.trim()) {
    case 'input_change':
      return await OnChangeInput(dataHook, value, page);
    case 'svg_click':
    case 'input_click':
      return await clickOnElement(dataHook, page);
    case 'select_click':
      return await clickOnElementWithValue(dataHook, page, value);
    // case 'div_exists':
    //   return await getElementByDataHook(page, dataHook);
    default:
      console.log('whattt???!?!?!?!?');
      break;
  }
};

export const OnChangeInput = async (dataHook, value, page) => {
  try {
    const input = await getElementByDataHook(page, dataHook);
    if (input) {
      await input.focus();
      await input.press('Backspace');
      await input.type(`${value}`);
      await input.type(String.fromCharCode(13), { delay: 1000 });
    }

    const newInput = await page.evaluate((el) => el.value, input);
    assert.strictEqual(value, newInput);
    console.log(`test for typeOnInput passed `);
    return;
  } catch (error) {
    console.log('typeOnInputError', error);
  }
};

export const deleteInputVal = async (dataHook, value, page) => {
  try {
    const input = await getElementByDataHook(page, dataHook);
    if (input) {
      await input.focus();
      await input.press('Backspace');
    }
    const newInput = await page.evaluate((el) => el.value, input);
    assert.strictEqual(value, newInput);
    console.log(`test for deleteInputVal passed `);
    return;
  } catch (error) {
    console.log('typeOnInputError', error);
  }
};
export const clickOnElement = async (dataHook, page) => {
  try {
    const element = await getElementByDataHook(page, dataHook);
    if (element) {
      // await element.click();
      await element.evaluate((e) => e.click());
      return element;
    }
    return;
  } catch (error) {
    console.log('clickOnElement', error);
  }
};

export const clickOnElementWithValue = async (dataHook, page, value) => {
  try {
    const element = await clickOnElement(dataHook, page);
    // const option = await element.$$eval("", node =>
    // node.value);

    console.log('option', element);
    // const option = await page.$eval(
    //   '#tst_quantity_dropdown',
    //   (node) => node.value,
    // );
    const newElementVal = await page.evaluate((el) => el.value, element);
    assert.strictEqual(value, newElementVal);
    console.log(`test for deleteInputVal passed `);
  } catch (error) {
    console.log('clickOnElementWithValue', error);
  }
};
