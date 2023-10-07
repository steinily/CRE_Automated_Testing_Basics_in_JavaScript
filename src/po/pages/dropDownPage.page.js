const BasePage = require('./basePage.page');
/**
 *
 * @class DropDown
 * @extends {BasePage}
 */
class DropDown extends BasePage {
    /**
     * Creates an instance of DropDown.
     * The page is accessed using the URL '/dropdown'.
     */
    constructor() {
        super('/dropdown');
    }
}

module.exports = DropDown;
