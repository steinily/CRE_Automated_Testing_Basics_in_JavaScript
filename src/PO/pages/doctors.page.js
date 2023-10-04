const BasePage = require('./basePage.page');
/**
 * Represents a page object for the Doctors page of the appointment planner.
 *
 * @class DoctorPage
 * @extends {BasePage}
 */
class DoctorPage extends BasePage {
  /**
     * Creates an instance of DoctorPage.
     * The page is accessed using the URL '/showcase/angular/appointmentplanner/#/doctors'.
     */
  constructor() {
    super('/showcase/angular/appointmentplanner/#/doctors');
  }
}

module.exports = DoctorPage;
