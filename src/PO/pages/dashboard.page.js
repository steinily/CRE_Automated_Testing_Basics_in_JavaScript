const BasePage = require('./basePage.page');
const {DayEventsComponent, TodaysAppointments} = require('../component');

/**
 * Represents a page object for the Dashboard page of the appointment planner.
 *
 * @class Dashboard
 * @extends {BasePage}
 */
class Dashboard extends BasePage {
  /**
     * Creates an instance of Dashboard.
     * The page is accessed using the URL '/showcase/angular/appointmentplanner/#/dashboard'.
     */
  constructor() {
    super('/showcase/angular/appointmentplanner/#/dashboard');
    this.dayEventsComponent = new DayEventsComponent();
    this.todaysAppointments = new TodaysAppointments();
  }
}

module.exports = Dashboard;
