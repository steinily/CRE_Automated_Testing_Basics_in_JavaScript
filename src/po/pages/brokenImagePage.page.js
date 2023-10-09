const BasePage = require('./basePage.page');
const {BrokenImagePage} = require('../component') 
/**
 *
 * @class BrokenImage
 * @extends {BasePage}
 */
class BrokenImage extends BasePage {
    /**
     * Creates an instance of BrokenImage.
     * The page is accessed using the URL '/broken_images'.
     */
    constructor() {
        super('/broken_images');
        this.brokenImage = new BrokenImagePage()
    }
}

module.exports = BrokenImage;
