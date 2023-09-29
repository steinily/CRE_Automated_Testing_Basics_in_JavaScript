const BaseComponent = require("../common/base.component")

class TodaysAppointments extends BaseComponent{
    constructor(){
        super(".e-card.grid-container")
    }

    get patientCount(){
        return this.rootElement.$('.e-gridcontent').$$('tr')
    }

}

module.exports = TodaysAppointments