const BasePage = require('./basePage.page');
const {DynamicElementPage} = require('../component') 
/**
 *
 * @class DynamicLoading
 * @extends {BasePage}
 */
class DynamicLoading extends BasePage {
    /**
     * Creates an instance of DynamicLoading.
     * The page is accessed using the URL '/dynamic_loading/1'.
     */
    constructor() {
        super('dynamic_loading/1');
        this.dynamicelement = new DynamicElementPage()

    }
}

module.exports = DynamicLoading;
