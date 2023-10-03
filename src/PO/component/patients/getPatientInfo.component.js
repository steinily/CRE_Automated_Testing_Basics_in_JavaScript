const BaseComponent = require("../common/base.component");

class GetPatienInfo extends BaseComponent {

    constructor(){
        super('tbody:not(.e-hide)')
    }

    patientListLength(){
       let patienLength =  this.rootElement.$$('tr').length
       return patienLength
    }

/**
 * 
 * @param num {int}  
 * @param name {'name' | 'gender' | 'bloodGroup' | 'symptoms' | 'mobil' | 'email'}  
 */
    lastAddedPatient (num , name){ 
        const selectors = {
            name : '[aria-colindex="1"]',
            gender: '[aria-colindex="2"]',
            bloodgroup: '[aria-colindex="3"]',
            symptoms: '[aria-colindex="4"]',
            mobil: '[aria-colindex="5"]',
            email: '[aria-colindex="6"]',
        }
        return this.rootElement.$$('tr')[num].$(selectors[name.toLocaleLowerCase()])
    }

}

module.exports = GetPatienInfo