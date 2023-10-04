const BaseComponent = require('../common/base.component');
/**
 * Represents a component for managing patients.
 *
 * @class Patients
 * @extends {BaseComponent}
 */
class Patients extends BaseComponent {
  /**
     * Creates an instance of Patients.
     * @constructor
     */
  constructor() {
    super('app-patients');
  }
  /**
     * Gets the "Add Patient" button element.
     *
     * @readonly
     * @type {WebdriverIO.Element}
     */
  get addPatientBtn() {
    return this.rootElement.$('button.e-control');
  }
  /**
     * Gets the title element of the patients component.
     *
     * @readonly
     * @type {WebdriverIO.Element}
     */
  get getTitle() {
    return this.rootElement.$('.title');
  }
  /**
     * Gets the search input field element.
     *
     * @readonly
     * @type {WebdriverIO.Element}
     */
  get searchInputField() {
    return this.rootElement.$('#schedule_searchbar');
  }
  /**
     * Gets the clear button element for the search input field.
     *
     * @readonly
     * @type {WebdriverIO.Element}
     */
  get searchInputFieldClear() {
    return this.rootElement.$('span[aria-label=\'close\']');
  }
  /**
     * Gets the search button element for the search input field.
     *
     * @readonly
     * @type {WebdriverIO.Element}
     */
  get searchInputFieldBtn() {
    return this.rootElement.$('#schedule_searchbutton');
  }
  /**
     * Gets the element representing an empty row.
     *
     * @readonly
     * @type {WebdriverIO.Element}
     */
  get emptyRow() {
    return this.rootElement.$('.e-emptyrow');
  }
}

module.exports = Patients;
