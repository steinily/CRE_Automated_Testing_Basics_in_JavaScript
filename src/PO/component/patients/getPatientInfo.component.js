const BaseComponent = require('../common/base.component');
/**
 * Represents a component for retrieving patient information.
 *
 * @class GetPatienInfo
 * @extends {BaseComponent}
 */
class GetPatienInfo extends BaseComponent {
    /**
     * Creates an instance of GetPatienInfo.
     * @constructor
     */
    constructor() {
        super('tbody:not(.e-hide)');
    }
    /**
     * Get the number of patients in the patient list.
     *
     * @return {number} The number of patients.
     */
    patientListLength() {
        const patienLength = this.rootElement.$$('tr').length;
        return patienLength;
    }

    /**
     * Get information about the last added patient.
     *
     * @param {number} num - The index of the patient in the list.
     * @param {'name' | 'gender' | 'bloodGroup' | 'symptoms' | 'mobil' | 'email'} name - The information field to retrieve (e.g., 'name', 'gender', 'bloodGroup', etc.).
     * @return {WebdriverIO.Element} The element containing the requested patient information.
     */
    lastAddedPatient(num, name) {
        const selectors = {
            name: '[aria-colindex="1"]',
            gender: '[aria-colindex="2"]',
            bloodgroup: '[aria-colindex="3"]',
            symptoms: '[aria-colindex="4"]',
            mobil: '[aria-colindex="5"]',
            email: '[aria-colindex="6"]',
        };
        return this.rootElement.$$('tr')[num].$(selectors[name.toLocaleLowerCase()]);
    }
}

module.exports = GetPatienInfo;
