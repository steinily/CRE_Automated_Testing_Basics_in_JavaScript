const DayEventsComponent = require('./dashboard/day-events.component')
const TodaysAppointments = require('./dashboard/todaysAppointments.components')
const PatiensList = require('./patients/patients.component')
const AddNewPatient = require('./patients/addNewPatient.component')
const GetPatienInfo = require('./patients/getPatientInfo.component')
const {clickAndWait} = require('./common/function/clickAndWait.function') 
const {addPatient} = require('./common/function/addPatientToList.function')

module.exports = {
    DayEventsComponent,
    TodaysAppointments,
    PatiensList,
    AddNewPatient,
    GetPatienInfo,
    clickAndWait,
    addPatient,

}