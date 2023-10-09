/**
 * Custom function to click on an element after waiting for it to be displayed and enabled.
 *
 * @param {WebdriverIO.Element} element - The element to click.
 * @return {Promise<void>} - A promise that resolves after the click operation.
 */
async function customClick(element) {
    await element.waitForDisplayed();
    await element.waitForEnabled();
    await element.click();
}

module.exports = {
    customClick,
};
