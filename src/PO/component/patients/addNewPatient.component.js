const BaseComponent = require("../common/base.component");

class AddNewPatient extends BaseComponent {
    
    constructor(){
        super('ejs-dialog')
    }

    get closeBtn(){
        return this.rootElement.$('.e-dlg-closeicon-btn')
    }

    get cancelBtn(){
        return this.rootElement.$('[cssclass=e-normal]')
    }

    get saveBtn(){
        return this.rootElement.$("button[class='e-control e-btn e-lib e-normal e-primary']")
    }

    get dropdownBtn(){
        return this.rootElement.$('#BloodGroup')
    }

    get nameMissingError(){
        return this.rootElement.$('#Name-info')
    }

    get mobilMissingError(){
        return this.rootElement.$('#undefined-info')
    }

    get emailMissingError(){
        return this.rootElement.$('#Email-info')
    }
    /**
     * 
     * @param  bloodtype {"AB+" | "A+" | "B+" | "O+" | "A-" | "B-" | "O-" | "AB-"} 
     */
    dropdownList(bloodtype){
        try {
            browser.$('.e-ddl#BloodGroup_popup')
            browser.$(`[data-value="${bloodtype}"]`).waitForClickable()
            browser.$(`[data-value="${bloodtype}"]`).click()
        }
        catch (error) {
            console.error(`Custom click failed: ${error.message}`);
        }
        
        
    }

    /**
    * 
    * @param name {'name' | 'genderFemale' | 'genderMale' | 'dob' | 'bloodGroup' | 'mobil' | 'email' | 'symptoms'}   
    * @returns 
    *
    */
    inputNewPatient(name){
        let selectors = {
            name:'[name="Name"]',
            genderfemale:'[for="doctorCheckFemale"]',
            gendermale:'[for="doctorCheckMale"]' ,
            dob:'[name="DOB"]',
            bloodgroup:() => this.dropdownList("0-"),
            mobil:'#PatientMobile',
            email:'[name="Email"]',
            symptoms:'[name="Symptoms"]',
        }
        return this.rootElement.$(selectors[name.toLowerCase()])

    }

    

}

module.exports = AddNewPatient