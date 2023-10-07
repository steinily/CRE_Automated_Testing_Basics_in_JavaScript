const BasePage = require('./basePage.page');
/**
 *
 * @class InputPage
 * @extends {BasePage}
 */
class AddRemovePage extends BasePage {
    /**
     * Creates an instance of AddRemovePage.
     * The page is accessed using the URL '/add_remove_elements/'.
     */
    constructor() {
        super('/add_remove_elements/');
    }
}

module.exports = AddRemovePage;
