const BasePage = require('./basePage.page');
const { TyposPage } = require('../component');
/**
 *
 * @class TypoPage
 * @extends {BasePage}
 */
class TypoPage extends BasePage {
    /**
     * Creates an instance of TypoPage.
     * The page is accessed using the URL '/typos'.
     */
    constructor() {
        super('/typos');
        this.typosPage = new TyposPage();
    }
}

module.exports = TypoPage;
