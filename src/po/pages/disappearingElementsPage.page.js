const BasePage = require('./basePage.page');
/**
 *
 * @class DisappearingElements
 * @extends {BasePage}
 */
class DisappearingElements extends BasePage {
    /**
     * Creates an instance of DisappearingElements.
     * The page is accessed using the URL '/disappearing_elements'.
     */
    constructor() {
        super('/disappearing_elements');
    }
}

module.exports = DisappearingElements;
