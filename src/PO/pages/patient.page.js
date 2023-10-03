const BasePage = require('./basePage.page')
const {PatiensList, AddNewPatient,GetPatienInfo , clickAndWait , addPatient } = require('../component')

class Patient extends BasePage {
    constructor(){
        super('/showcase/angular/appointmentplanner/#/patients')
        this.patientList = new PatiensList()
        this.addNewPatient = new AddNewPatient()
        this.getPatienInfo = new GetPatienInfo()
    }
    ClickAndWait(selector) {
        clickAndWait(selector);
      }
    AddPatient(data){
        addPatient(data)
    } 
 
}

module.exports = Patient