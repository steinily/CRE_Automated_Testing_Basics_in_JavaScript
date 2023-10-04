const BasePage = require('./basePage.page');

/**
 * Represents a page object for the Preference page of the appointment planner.
 *
 * @class Preference
 * @extends {BasePage}
 */
class Preference extends BasePage {
  /**
     * Creates an instance of Preference.
     * The page is accessed using the URL '/showcase/angular/appointmentplanner/#/preference'.
     */
  constructor() {
    super('/showcase/angular/appointmentplanner/#/preference');
  }
}

module.exports = Preference;
