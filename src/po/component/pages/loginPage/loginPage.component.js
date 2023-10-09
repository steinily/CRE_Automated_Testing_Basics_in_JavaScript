const BaseComponent = require('./../../common/base.component.js');

/**
 * Represents a component for displaying day events.
 *
 * @class LoginPage
 * @extends {BaseComponent}
 */
class LoginPage extends BaseComponent {
    /**
     * Creates an instance of LoginPage.
     * @constructor
     */
    constructor() {
        super('body');
    }
    /** @public */
    get loginBtn() {
        return this.rootElement.$('button.radius');
    }
    /** @public */
    get userNameInput() {
        return this.rootElement.$('#username');
    }
    /** @public */
    get passwordInput() {
        return this.rootElement.$('#password');
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

module.exports = LoginPage;
