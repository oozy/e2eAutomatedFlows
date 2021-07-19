import assert from 'assert';
let failedTests = 0;

const dataHookBuilder = (dataHook) => {
  if (dataHook?.value != '')
    return dataHook.type === 'id'
      ? `[id='${dataHook.value}']`
      : `[data-hook='${dataHook.value}']`;
  return;
};

const getElementByDataHook = async (page, dataHook) => {
  try {
    const selector = `${dataHookBuilder(dataHook)}`;
    const elementPromise = await promiseWrapper(
      async () => page.$(selector),
      page,
      dataHook,
    );
    return elementPromise;
  } catch (error) {
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
  const { element, action, dataHook, value, page, x, y } = data;
  const attribute = getAttribute(data);
  const testAction = element + '_' + action;
  console.log('lalalalalala', dataHook);
  console.log('action', action);
  console.log('element', element);

  if (!dataHook) return;
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
        `not found this data-hook ===>${attribute.value}, testAction ===>${testAction}`,
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
    const input = await promiseWrapper(
      async () => getElementByDataHook(page, dataHook),
      page,
      dataHook,
    );
    if (input) {
      await input.focus();
      await input.press('Backspace');
      await input.type(`${value}`);
      await input.type(String.fromCharCode(13), { delay: 1000 });
    }

    const newInput = await promiseWrapper(
      async () => page.evaluate((el) => el.value, input),
      page,
      dataHook,
    );
    assert.strictEqual(value, newInput);
    console.log('test for typeOnInput passed ');
    return;
  } catch (error) {
    console.log('typeOnInputError', error);
  }
};

export const clickOnElement = async (dataHook, page) => {
  try {
    const element = await getElementByDataHook(page, dataHook);
    if (element) {
      try {
        await element.evaluate((e) => e.click());
      } catch (e) {
        await element.click();
      }
      return element;
    }
    return;
  } catch (error) {
    console.log(`clickOnElement datahook: ${dataHook}`, error);
  }
};

export const clickOnElementWithValue = async (dataHook, page, value) => {
  try {
    await promiseWrapper(
      async () => clickOnElement(dataHook, page),
      page,
      dataHook,
    );
    const selector = `${dataHookBuilder(dataHook)}`;
    await promiseWrapper(
      async () => page.waitForSelector(selector),
      page,
      dataHook,
    );

    await promiseWrapper(
      async () => page.select(`select${selector}`, value),
      page,
      dataHook,
    );

    const option = await promiseWrapper(
      async () => page.$eval(`select${selector}`, (node) => node.value),
      page,
      dataHook,
    );

    assert.strictEqual(value, option);
  } catch (error) {
    console.log('clickOnElementWithValue', error);
  }
};

const clickOnLink = async (page, element, text) => {
  const [button] = await promiseWrapper(
    async () => page.$x(`//${element}[contains(text(), "${text}")]`),
    page,
    'clickOnLink',
  );

  if (button) {
    await button.click();
  }
};

const hoverOnElement = async (dataHook, page) => {
  try {
    const selector = dataHookBuilder(dataHook);
    await promiseWrapper(
      async () => await page.waitForSelector(selector, 600),
      page,
      dataHook,
    );
    await promiseWrapper(
      async () => await page.hover(selector, 600),
      page,
      dataHook,
    );
  } catch (e) {
    console.error(`hoverOnElement datahook:${dataHook}`, e);
  }
};

const promiseWrapper = async (fn, page, dataHook) => {
  failedTests++;
  try {
    return await fn();
  } catch (ex) {
    await page.screenshot({
      path: `Full_screenshot_of_failedTests-dataHook-${dataHook.value ||
        ''}-failedTestsNum-${failedTests}.png`,
      fullPage: true,
    });
    console.log(`will not execute dataHook: ${dataHook?.value}`);
    return;
  }
};

const mouseUpElem = async (dataHook, page, x, y) => {
  try {
    // Move teh drag item to container and release mouse
    const selector = dataHookBuilder(dataHook);
    const container = await page.$(selector);
    if (container) {
      await container.boundingBox();
      await page.mouse.move(x, y);
      await page.waitFor(100);
      await page.mouse.up();
    }
  } catch (e) {
    console.error(`hoverOnElement datahook:${dataHook}`, e);
  }
};

const mouseDownElem = async (dataHook, page, x, y) => {
  try {
    const selector = dataHookBuilder(dataHook);
    const dragItem = await page.$(selector);
    if (dragItem) {
      await dragItem.boundingBox();
      await page.mouse.move(x, y);
      await page.mouse.down();
      await page.waitFor(100);
    }
  } catch (e) {
    console.error(`hoverOnElement datahook:${dataHook}`, e);
  }
};
