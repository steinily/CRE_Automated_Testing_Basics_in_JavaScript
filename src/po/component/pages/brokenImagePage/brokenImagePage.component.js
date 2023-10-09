const BaseComponent = require('./../../common/base.component.js');
/**
 * Represents a component for displaying day events.
 *
 * @class BrokenImage
 * @extends {BaseComponent}
 */
class BrokenImage extends BaseComponent {
    /**
     * Creates an instance of BrokenImage.
     * @constructor
     */
    constructor() {
        super('.example');
    }
 /** @public */
    getImgByNum(num){
        return this.rootElement.$$('img')[num]

    }
 /** @public */  
    get getImg(){
        return this.rootElement.$$('img')

    }

}

module.exports = BrokenImage;