const BasePage = require('./basePage.page')
const {DayEventsComponent, TodaysAppointments} = require('../component')

class Dashboard extends BasePage{

    constructor(){
        super('/showcase/angular/appointmentplanner/#/dashboard')
        this.dayEventsComponent = new DayEventsComponent()
        this.todaysAppointments = new TodaysAppointments()
    }   
}

module.exports = Dashboard