const BaseComponent = require('./../../common/base.component.js');
/**
 * Represents a component for displaying day events.
 *
 * @class AddRemoveElementPage
 * @extends {BaseComponent}
 */
class AddRemoveElementPage extends BaseComponent {
    /**
     * Creates an instance of AddRemoveElementPage.
     * @constructor
     */
    constructor() {
        super('#content');
    }
    /** @public */
    get addElementBtn() {
        return this.rootElement.$(`//button[contains(text(), "Add Element")]`);
    }
    /**
     * Get a delete button element by its index within the collection of delete buttons.
     *
     * @param {number} num - The index of the delete button to retrieve (0-based).
     * @return {WebdriverIO.Element} - The delete button element at the specified index.
     */
    deleteBtn(num) {
        return this.rootElement.$$(`//button[contains(text(), "Delete")]`)[num];
    }
    /** @public */
    get deleteBtnAll() {
        return this.rootElement.$$(`//button[contains(text(), "Delete")]`);
    }
    /** @public */
    get deleteBtCount() {
        return this.rootElement.$$(`//button[contains(text(), "Delete")]`).length;
    }
    /** @public */
    get firsthDeleteBtn() {
        return this.rootElement.$(`//button[contains(text(), "Delete")]`);
    }
}

module.exports = AddRemoveElementPage;
