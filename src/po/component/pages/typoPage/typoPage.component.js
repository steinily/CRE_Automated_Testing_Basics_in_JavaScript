const BaseComponent = require('./../../common/base.component.js');

/**
 * Represents a component for displaying day events.
 *
 * @class TyposPage
 * @extends {BaseComponent}
 */
class TyposPage extends BaseComponent {
    /**
     * Creates an instance of TyposPage.
     * @constructor
     */
    constructor() {
        super('#content');
    }
    /** @public */
    get getHeading() {
        return this.rootElement.$('h3');
    }
    /** @public */
    get typosParagraph() {
        return this.rootElement.$('p:nth-child(3)');
    }
}

module.exports = TyposPage;
