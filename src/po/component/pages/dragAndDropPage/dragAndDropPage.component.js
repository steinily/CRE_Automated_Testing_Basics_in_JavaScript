const BaseComponent = require('./../../common/base.component.js');
/**
 * Represents a component for displaying day events.
 *
 * @class DragAndDrop
 * @extends {BaseComponent}
 */
class DragAndDrop extends BaseComponent {
    /**
     * Creates an instance of DragAndDrop.
     * @constructor
     */
    constructor() {
        super('#content');
    }
 /** @public */
    get aRectangle(){
        return this.rootElement.$('#column-a')
    }
 /** @public */
    get bRectangle(){
        return this.rootElement.$('#column-b')
    }

}

module.exports = DragAndDrop;
