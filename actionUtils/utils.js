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
    await page.waitForSelector(dataHookBuilder(dataHook));
    const selector = `${dataHookBuilder(dataHook)}`;
    await page.waitForSelector(selector);
    const element = await page.$(selector);
    return element;
  } catch (error) {
    console.log('typeOnInputError', error);
  }
};

export const generateTestAction = async (data) => {
  const { element, action, dataHook, value, page } = data;
  const testAction = element + '_' + action;
  switch (testAction.trim()) {
    case 'input_type':
      return await typeOnInput(dataHook, value, page);
    case 'input_delete':
      return await deleteInputVal(dataHook, value, page);
    case 'div_exists':
      return await getElementByDataHook(page, dataHook);
    default:
      console.log('whattt???!?!?!?!?');
      break;
  }
};

export const typeOnInput = async (dataHook, value, page) => {
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

// export const showFragment = async (dataHook, value, page) => {
//   console.log(123456, dataHook);
//   try {
//     const fragment = await getElementByDataHook(page, dataHook);
//     console.log(`img`, fragment);
//     console.log(`test for deleteInputVal passed `);
//     return;
//     // if (input) {
//     //   await input.focus();
//     //   await input.press('Backspace');
//     // }
//     // const newInput = await page.evaluate((el) => el.value, input);
//     // assert.strictEqual(value, newInput);
//   } catch (error) {
//     console.log('typeOnInputError', error);
//   }
// };
