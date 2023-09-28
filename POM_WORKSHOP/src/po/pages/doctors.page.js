const {DoctorListHeader , AddDoctorModal , SpecialistCard}= require('./../components')
const BasePage = require('./base.page')

class DoctorsPage extends BasePage{

    constructor(){
        super('/showcase/angular/appointmentplanner/#/doctors')
        this.doctorListHeader = new DoctorListHeader();
        this.addDoctorModal = new AddDoctorModal();

    }

    specialistCard(id){
        return new SpecialistCard(id);
    }
}

module.exports = DoctorsPage;