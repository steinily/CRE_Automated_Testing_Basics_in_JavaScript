const BasePage = require('./basePage.page');
const { IndexPage } = require('../component');
/**
 *
 * @class HomePage
 * @extends {BasePage}
 */
class HomePage extends BasePage {
    /**
     * Creates an instance of HomePage.
     * The page is accessed using the URL '/'.
     */
    constructor() {
        super('');
        this.indexpage = new IndexPage();
    }
}

module.exports = HomePage;
