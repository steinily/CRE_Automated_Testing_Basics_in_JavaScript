/**
 * Represents a base component that provides common functionality for interacting with DOM elements.
 *
 * @class BaseComponent
 */
const { customClick } = require('../function/custom-commands.function');

class BaseComponent {
    /**
     * Creates an instance of BaseComponent.
     *
     * @param {string} rootSelector - The CSS selector for the root element of the component.
     */
    constructor(rootSelector) {
        this.rootSelector = rootSelector;
        this.customClickFunc = customClick;
    }
    /**
     * Gets the root DOM element of the component using the specified root selector.
     *
     * @readonly
     * @type {jQuery.Element} - The jQuery-wrapped root element.
     */
    get rootElement() {
        return $(this.rootSelector);
    }
    /**
     * Custom function to click on an element after waiting for it to be displayed and enabled.
     *
     * @param {WebdriverIO.Element} element - The element to click.
     * @return {Promise<void>} - A promise that resolves after the click operation.
     */
    async customClicker(element) {
        await this.customClickFunc(element);
    }
}

module.exports = BaseComponent;
