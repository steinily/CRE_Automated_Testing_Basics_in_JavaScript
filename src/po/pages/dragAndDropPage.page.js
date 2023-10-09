const BasePage = require('./basePage.page');
const {DragAndDropPage} = require('../component') 
/**
 *
 * @class DragAndDrop
 * @extends {BasePage}
 */
class DragAndDrop extends BasePage {
    /**
     * Creates an instance of DragAndDrop.
     * The page is accessed using the URL '/disappearing_elements'.
     */
    constructor() {
        super('/drag_and_drop');
        this.dragAndDrop = new DragAndDropPage()
    }
}

module.exports = DragAndDrop;
