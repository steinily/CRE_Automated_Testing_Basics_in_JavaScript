const BasePage = require('./basePage.page');
const {PatiensList, AddNewPatient, GetPatienInfo, clickAndWait, addPatient} = require('../component');

/**
 * Represents a page object for the Patients page of the appointment planner.
 *
 * @class Patient
 * @extends {BasePage}
 */
class Patient extends BasePage {
  /**
     * Creates an instance of Patient.
     * The page is accessed using the URL '/showcase/angular/appointmentplanner/#/patients'.
     */
  constructor() {
    super('/showcase/angular/appointmentplanner/#/patients');
    /**
         * A list of patients on the page.
         * @type {PatiensList}
         */
    this.patientList = new PatiensList();
    /**
         * A component for adding a new patient.
         * @type {AddNewPatient}
         */
    this.addNewPatient = new AddNewPatient();
    /**
         * A component for retrieving patient information.
         * @type {GetPatienInfo}
         */
    this.getPatienInfo = new GetPatienInfo();
  }
  /**
     * Clicks an element specified by the selector and waits for an action to complete.
     *
     * @param {string} selector - The CSS selector of the element to click.
     */
  clickAndWait(selector) {
    clickAndWait(selector);
  }
  /**
     * Adds a new patient with the provided data.
     *
     * @param {object} data - The patient information to add.
     */
  addPatient(data) {
    addPatient(data);
  }
}

module.exports = Patient;
