/**
 * Clicks an element identified by the given CSS selector and waits for it to become clickable.
 *
 * @async
 * @function
 * @param {string} selector - The CSS selector of the element to click.
 * @throws {Error} Throws an error if the element is not found or cannot be clicked.
 */
async function clickAndWait(selector) {
    await browser.$(selector).waitForClickable({ reverse: false });
    await browser.$(selector).click();
}

module.exports = { clickAndWait };
