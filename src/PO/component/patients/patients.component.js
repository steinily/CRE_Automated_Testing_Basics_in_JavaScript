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

    get searchInputField(){
        return this.rootElement.$('#schedule_searchbar')
    }
    get searchInputFieldClear(){
        return this.rootElement.$("span[aria-label='close']")
    }

    get searchInputFieldBtn(){
        return this.rootElement.$('#schedule_searchbutton')
    }
    get emptyRow(){
        return this.rootElement.$('.e-emptyrow')
    }
}


module.exports = Patients