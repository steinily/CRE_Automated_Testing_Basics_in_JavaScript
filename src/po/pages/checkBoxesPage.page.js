const BasePage = require('./basePage.page');
/**
 *
 * @class CheckBoxes
 * @extends {BasePage}
 */
class CheckBoxes extends BasePage {
    /**
     * Creates an instance of CheckBoxes.
     * The page is accessed using the URL '/checkboxes'.
     */
    constructor() {
        super('/checkboxes');
    }
}

module.exports = CheckBoxes;
