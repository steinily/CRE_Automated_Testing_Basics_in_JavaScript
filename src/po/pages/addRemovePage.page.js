const BasePage = require('./basePage.page');
const { AddRemoveElementPage } = require('../component');
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
        this.addRemoveElement = new AddRemoveElementPage();
    }
}

module.exports = AddRemovePage;
