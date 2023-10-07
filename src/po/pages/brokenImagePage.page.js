const BasePage = require('./basePage.page');
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
    }
}

module.exports = BrokenImage;
