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
        return this.rootElement.$(`//button[contains(text(), "Add")]`)
    }
    /** @public */
    get removeBtn(){
        return this.rootElement.$(`//button[contains(text(), "Remove")]`)
    }

    /** @public */
    get enableBtn(){
        return this.rootElement.$(`//button[contains(text(), "Enable")]`)
    }
    /** @public */
    get disableBtn(){
        return this.rootElement.$(`//button[contains(text(), "Disable")]`)
    }

    /** @public */
    get loading(){
        return this.rootElement.$('#checkbox-example').$('[id="loading"]')
    }
     /** @public */
    get message(){
        return this.rootElement.$('#message')
    }
    get inputText(){
        return this.rootElement.$('input[type="text"]')
    }
    
}

module.exports = DynamicControlPage;
