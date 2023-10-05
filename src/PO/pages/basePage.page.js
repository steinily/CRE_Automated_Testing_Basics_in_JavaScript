/**
 * Represents a base page object for the appointment planner application.
 *
 * @class BasePage
 */
class BasePage {
    /**
     * Creates an instance of BasePage with a specified URL.
     *
     * @constructor
     * @param {string} url - The URL associated with the page.
     */
    constructor(url) {
        this.url = url;
    }
    /**
     * Opens the page by navigating to its URL.
     *
     * @return {Promise<void>} A promise that resolves when the page is successfully opened.
     */
    open() {
        return browser.url(this.url);
    }
}

module.exports = BasePage;
