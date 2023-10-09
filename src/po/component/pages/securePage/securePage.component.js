const BaseComponent = require('./../../common/base.component.js');

/**
 * Represents a component for displaying day events.
 *
 * @class SecurePage
 * @extends {BaseComponent}
 */
class SecurePage extends BaseComponent {
    /**
     * Creates an instance of SecurePage.
     * @constructor
     */
    constructor() {
        super('body');
    }
    /** @public */
    get logoutBtn() {
        return this.rootElement.$('.button');
    }
    /** @public */
    get getTitle() {
        return this.rootElement.$('h2');
    }
    /** @public */
    get loginResponse() {
        return this.rootElement.$('#flash');
    }
}

module.exports = SecurePage;
