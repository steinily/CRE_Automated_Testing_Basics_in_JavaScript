const BaseComponent = require('../common/base.component');
/**
 * Represents a component for managing today's appointments.
 *
 * @class TodaysAppointments
 * @extends {BaseComponent}
 */
class TodaysAppointments extends BaseComponent {
    /**
     * Creates an instance of TodaysAppointments.
     * @constructor
     */
    constructor() {
        super('.e-card.grid-container');
    }
    /**
     * Get the list of today's appointments.
     *
     * @readonly
     * @type {WebdriverIO.ElementArray}
     */
    get patientCount() {
        return this.rootElement.$('.e-gridcontent').$$('tr');
    }
}

module.exports = TodaysAppointments;
