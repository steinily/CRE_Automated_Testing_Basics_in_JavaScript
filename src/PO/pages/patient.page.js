const BasePage = require('./basePage.page')
const {PatiensList} = require('../component')

class Patient extends BasePage {
    constructor(){
        super('/showcase/angular/appointmentplanner/#/patients')
        this.patientList = new PatiensList()
    }
}

module.exports = Patient