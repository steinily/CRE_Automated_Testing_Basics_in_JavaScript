const BaseComponent = require('./../../common/base.component.js');

/**
 * Represents a component for displaying day events.
 *
 * @class DynamicControlPage
 * @extends {BaseComponent}
 */
class DynamicControlPage extends BaseComponent {
    /**
     * Creates an instance of DynamicControlPage.
     * @constructor
     */
    constructor() {
        super('.example');
    }
    /** @public */
    get getHeading() {
        return this.rootElement.$('h4');
    }
    /** @public */
    get checkBox() {
        return this.rootElement.$("input[type='checkbox']");
    }
    /** @public */
    get addBtn(){
        return this.rootElement.$(`button:contains(Add)`)
    }
    /** @public */
    get removeBtn(){
        return this.rootElement.$(`//button[contains(text(), "Remove")]`)
    }
    /** @public */
    get loading(){
        return this.rootElement.$('#checkbox-example').$('[id="loading"]')
    }

    waitAndClick(){
        this.addBtn.waitForClickable()
        this.addBtn.click()
    }
}

module.exports = DynamicControlPage;
