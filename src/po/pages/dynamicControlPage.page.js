const BasePage = require('./basePage.page');
const {DynamicControlPage} = require('../component') 
/**
 *
 * @class DynamicControls
 * @extends {BasePage}
 */
class DynamicControls extends BasePage {
    /**
     * Creates an instance of DynamicControls.
     * The page is accessed using the URL '/dynamic_controls'.
     */
    constructor() {
        super('/dynamic_controls');
        this.dynamicControlPage = new DynamicControlPage()
    }
}

module.exports = DynamicControls;
