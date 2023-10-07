const BaseComponent = require('./../../common/base.component.js');

/**
 * Represents a component for displaying day events.
 *
 * @class IndexPage
 * @extends {BaseComponent}
 */
class IndexPage extends BaseComponent {
    /**
     * Creates an instance of IndexPage.
     * @constructor
     */
    constructor() {
        super('body');
    }

    /** @public */
    get getHeading() {
        return this.rootElement.$('.heading');
    }
    /** @public */
    get getSubHeading() {
        return this.rootElement.$('div[id="content"] h2');
    }
    /** @public */
    get gitHubImage() {
        return this.rootElement.$('//img[@alt="Fork me on GitHub"]');
    }
    /**
     * Get the number of available examples.
     *
     * @return {number} The count of available examples.
     */
    get availableExapmles() {
        return this.rootElement.$$('li').length;
    }
    /** @public */
    get footer() {
        return this.rootElement.$('#page-footer');
    }
    /** @public */
    get footerLink() {
        return this.footer.$('a[target="_blank"]');
    }
}

module.exports = IndexPage;
