const BasePage = require('./basePage.page')

class DoctorPage extends BasePage {
    constructor(){
        super('/showcase/angular/appointmentplanner/#/doctors')
    }
}

module.exports = DoctorPage