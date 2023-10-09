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
    /**
     * Get an image element by its index within the collection of images.
     *
     * @param {number} num - The index of the image to retrieve (0-based).
     * @return {WebdriverIO.Element} - The image element at the specified index.
     */
    getImgByNum(num) {
        return this.rootElement.$$('img')[num];
    }
    /** @public */
    get getImg() {
        return this.rootElement.$$('img');
    }
}

module.exports = BrokenImage;
