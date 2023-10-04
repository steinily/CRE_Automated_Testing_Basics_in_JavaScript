/**
 * Represents a base component that provides common functionality for interacting with DOM elements.
 *
 * @class BaseComponent
 */
class BaseComponent {
  /**
     * Creates an instance of BaseComponent.
     *
     * @param {string} rootSelector - The CSS selector for the root element of the component.
     */
  constructor(rootSelector) {
    this.rootSelector = rootSelector;
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
}

module.exports = BaseComponent;
