const BasePage = require('./basePage.page');

/**
 * Represents a page object for the Schedule page of the appointment planner.
 *
 * @class SchedulePage
 * @extends {BasePage}
 */
class SchedulePage extends BasePage {
    /**
     * Creates an instance of SchedulePage.
     * The page is accessed using the URL '/showcase/angular/appointmentplanner/#/calendar'.
     */
    constructor() {
        super('/showcase/angular/appointmentplanner/#/calendar');
    }
}

module.exports = SchedulePage;
