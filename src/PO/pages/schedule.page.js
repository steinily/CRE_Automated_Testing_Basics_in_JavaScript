const BasePage = require('./basePage.page')

class SchedulePage extends BasePage{
    constructor(){
        super('/showcase/angular/appointmentplanner/#/calendar')
    }
}

module.exports = SchedulePage
