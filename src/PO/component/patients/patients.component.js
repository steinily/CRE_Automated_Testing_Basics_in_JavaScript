const BaseComponent = require("../common/base.component")

class Patients extends BaseComponent{
    constructor(){
        super("app-patients")
    }

    get addPatientBtn(){
        return this.rootElement.$('button.e-control')
    }

    get getTitle(){
        return this.rootElement.$('.title')
    }
}


module.exports = Patients