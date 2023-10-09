const BasePage = require('./basePage.page');
const { SecurePage } = require('../component');
/**
 *
 * @class Secure
 * @extends {BasePage}
 */
class Secure extends BasePage {
    /**
     * Creates an instance of Secure.
     * The page is accessed using the URL '/login'.
     */
    constructor() {
        super('/login');
        this.securePage = new SecurePage();
    }
}

module.exports = Secure;
