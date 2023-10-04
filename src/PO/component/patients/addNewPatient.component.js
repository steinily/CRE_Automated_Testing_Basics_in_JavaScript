const BaseComponent = require('../common/base.component');

/**
 * Represents a component for adding a new patient.
 *
 * @class AddNewPatient
 * @extends {BaseComponent}
 */
class AddNewPatient extends BaseComponent {
  /**
     * Creates an instance of AddNewPatient.
     * @constructor
     */
  constructor() {
    super('ejs-dialog');
  }
  /**
     * Get the close button element for the dialog.
     *
     * @readonly
     * @type {WebdriverIO.Element}
     */
  get closeBtn() {
    return this.rootElement.$('.e-dlg-closeicon-btn');
  }
  /**
     * Get the cancel button element for the dialog.
     *
     * @readonly
     * @type {WebdriverIO.Element}
     */
  get cancelBtn() {
    return this.rootElement.$('[cssclass=e-normal]');
  }
  /**
     * Get the save button element for the dialog.
     *
     * @readonly
     * @type {WebdriverIO.Element}
     */
  get saveBtn() {
    return this.rootElement.$('button[class=\'e-control e-btn e-lib e-normal e-primary\']');
  }
  /**
     * Get the dropdown button element for selecting blood type.
     *
     * @readonly
     * @type {WebdriverIO.Element}
     */
  get dropdownBtn() {
    return this.rootElement.$('#BloodGroup');
  }
  /**
     * Get the error element for missing patient name.
     *
     * @readonly
     * @type {WebdriverIO.Element}
     */
  get nameMissingError() {
    return this.rootElement.$('#Name-info');
  }
  /**
     * Get the error element for missing patient mobile number.
     *
     * @readonly
     * @type {WebdriverIO.Element}
     */
  get mobilMissingError() {
    return this.rootElement.$('#undefined-info');
  }
  /**
     * Get the error element for missing patient email.
     *
     * @readonly
     * @type {WebdriverIO.Element}
     */
  get emailMissingError() {
    return this.rootElement.$('#Email-info');
  }

  /**
     * Select a blood type from the dropdown list.
     *
     * @param {"AB+" | "A+" | "B+" | "O+" | "A-" | "B-" | "O-" | "AB-"} bloodtype - The blood type to select.
     */
  dropdownList(bloodtype) {
    try {
      browser.$('.e-ddl#BloodGroup_popup');
      browser.$(`[data-value="${bloodtype}"]`).waitForClickable();
      browser.$(`[data-value="${bloodtype}"]`).click();
    } catch (error) {
      console.error(`Custom click failed: ${error.message}`);
    }
  }

  /**
     * Get an input element for entering patient information.
     *
     * @param {'name' | 'genderFemale' | 'genderMale' | 'dob' | 'bloodGroup' | 'mobil' | 'email' | 'symptoms'} name - The information field to retrieve (e.g., 'name', 'gender', 'bloodGroup', etc.).
     * @return {WebdriverIO.Element} The element for the specified patient information.
     */
  inputNewPatient(name) {
    const selectors = {
      name: '[name="Name"]',
      genderfemale: '[for="doctorCheckFemale"]',
      gendermale: '[for="doctorCheckMale"]',
      dob: '[name="DOB"]',
      bloodgroup: () => this.dropdownList('0-'),
      mobil: '#PatientMobile',
      email: '[name="Email"]',
      symptoms: '[name="Symptoms"]',
    };
    return this.rootElement.$(selectors[name.toLowerCase()]);
  }
}

module.exports = AddNewPatient;
