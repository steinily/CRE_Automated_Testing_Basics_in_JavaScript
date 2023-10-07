const BasePage = require('./basePage.page');
/**
 *
 * @class InputPage
 * @extends {BasePage}
 */
class InputPage extends BasePage {
    /**
     * Creates an instance of InputPage.
     * The page is accessed using the URL '/inputs'.
     */
    constructor() {
        super('/inputs');
    }
}

module.exports = InputPage;
