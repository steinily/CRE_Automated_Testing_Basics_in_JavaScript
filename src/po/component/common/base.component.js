/**
 * Represents a base component that provides common functionality for interacting with DOM elements.
 *
 * @class BaseComponent
 */
const {customClick} = require('../function/custom-commands.function')


class BaseComponent {
    /**
     * Creates an instance of BaseComponent.
     *
     * @param {string} rootSelector - The CSS selector for the root element of the component.
     */
    constructor(rootSelector) {
        this.rootSelector = rootSelector;
        this.customClickFunc = customClick
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

    async customClicker(element){
       await this.customClickFunc(element);
    }

}

module.exports = BaseComponent;
