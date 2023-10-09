const BaseComponent = require('./../../common/base.component.js');
/**
 * Represents a component for displaying day events.
 *
 * @class DynamicLoading
 * @extends {BaseComponent}
 */
class DynamicLoading extends BaseComponent {
    /**
     * Creates an instance of DynamicLoading.
     * @constructor
     */
    constructor() {
        super('.example');
    }
 /** @public */
    get startBtn(){
        return this.rootElement.$(`//button[contains(text(), "Start")]`)
    }
    /** @public */
    get hiddenText(){
        return this.rootElement.$('#finish h4')
    }
}

module.exports = DynamicLoading;
