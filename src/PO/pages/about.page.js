const BasePage = require('./basePage.page');
/**
 * Represents a page object for the About page of the appointment planner.
 *
 * @class Abouth
 * @extends {BasePage}
 */
class Abouth extends BasePage {
    /**
     * Creates an instance of Abouth.
     * The page is accessed using the URL '/showcase/angular/appointmentplanner/#/about'.
     */
    constructor() {
        super('/showcase/angular/appointmentplanner/#/about');
    }
}

module.exports = Abouth;
