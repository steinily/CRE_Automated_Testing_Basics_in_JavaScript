const BaseComponent = require('../common/base.component');

/**
 * Represents a component for displaying day events.
 *
 * @class DayEventsComponent
 * @extends {BaseComponent}
 */
class DayEventsComponent extends BaseComponent {
  /**
     * Creates an instance of DayEventsComponent.
     * @constructor
     */
  constructor() {
    super('div[class=\'e-card card day-events-container\']');
  }
  /**
     * Get the title element of the day events container.
     *
     * @readonly
     * @type {WebdriverIO.Element}
     */
  get containerTitle() {
    return this.rootElement.$('span[class=\'card-text label-text\']');
  }
  /**
     * Get the count of today's events displayed in the day events container.
     *
     * @readonly
     * @type {string}
     */
  get todayEventsCount() {
    return this.rootElement.$('span[class=\'day-event-count\']').getText();
  }
}

module.exports = DayEventsComponent;
