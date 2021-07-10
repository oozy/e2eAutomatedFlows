import assert from 'assert'

export const generateTestStep = (element, page, dataHook) => {
  switch (element) {
    case 'title':
      return page.title()
    case 'input':
      return typeOnInput(dataHook, value, page)
    default:
      return page.title()
  }
}

const dataHookBuilder = (dataHook) => {
  return `[data-hook='${dataHook}']`
}

const getElementByDataHook = async (page, dataHook) => {
  try {
    const selector = `${dataHookBuilder(dataHook)}`
    const element = await page.$(selector)
    console.log('getElementByDataHook:/*/*/* Pass')
    return element
  } catch (error) {
    console.log('typeOnInputError', error)
  }
}

export const generateTestAction = async (data) => {
  const { element, action, dataHook, value, page } = data
  const testAction = element + '_' + action
  switch (testAction.trim()) {
    case 'input_change':
      return OnChangeInput(dataHook, value, page)
    case 'svg_click':
    case 'input_click':
      return clickOnElement(dataHook, page)
    case 'select_click':
      return clickOnElementWithValue(dataHook, page, value)
    case 'select_change':
      return clickOnElementWithValue(dataHook, page, value)
    case 'a_click':
      return clickOnLink(page, element, value)
    default:
      if (action === 'mouseover') {
        return hoverOnElement(dataHook, page)
      }
      console.log('whattt???!?!?!?!?')
      break
  }
}

export const OnChangeInput = async (dataHook, value, page) => {
  try {
    const input = await getElementByDataHook(page, dataHook)
    if (input) {
      await input.focus()
      await input.press('Backspace')
      await input.type(`${value}`)
      await input.type(String.fromCharCode(13), { delay: 1000 })
    }

    const newInput = await page.evaluate((el) => el.value, input)
    assert.strictEqual(value, newInput)
    console.log('test for typeOnInput passed ')
    return
  } catch (error) {
    console.log('typeOnInputError', error)
  }
}

export const deleteInputVal = async (dataHook, value, page) => {
  try {
    const input = await getElementByDataHook(page, dataHook)
    if (input) {
      await input.focus()
      await input.press('Backspace')
    }
    const newInput = await page.evaluate((el) => el.value, input)
    assert.strictEqual(value, newInput)
    console.log('test for deleteInputVal passed ')
    return
  } catch (error) {
    console.log('typeOnInputError', error)
  }
}
export const clickOnElement = async (dataHook, page) => {
  try {
    const element = await getElementByDataHook(page, dataHook)
    if (element) {
      try {
        await element.evaluate((e) => e.click())
      } catch (e) {
        await element.click()
      }
      return element
    }
    return
  } catch (error) {
    console.log(`clickOnElement datahook: ${dataHook}`, error)
  }
}

export const clickOnElementWithValue = async (dataHook, page, value) => {
  try {
    const element = await clickOnElement(dataHook, page)
    const selector = `${dataHookBuilder(dataHook)}`
    await page.select(selector, value)

    const options = await page.$$eval(selector, (options) =>
      options.map((option) => option.textContent)
    )
    console.log({ element, value, selector, options })

    const newElementVal = await page.evaluate((el) => el.selected, element)
    console.log('newElementVal', newElementVal)
    assert.strictEqual(value, newElementVal)
    console.log('test for deleteInputVal passed ')
  } catch (error) {
    console.log('clickOnElementWithValue', error)
  }
}

const clickOnLink = async (page, element, text) => {
  const [button] = await page.$x(`//${element}[contains(text(), "${text}")]`)
  if (button) {
    await button.click()
  }
}

const hoverOnElement = async (dataHook, page) => {
  try {
    const selector = dataHookBuilder(dataHook)
    await page.waitForSelector(selector)
    await page.hover(selector)
  } catch (e) {
    console.error(`hoverOnElement datahook:${dataHook}`, e)
  }
}
