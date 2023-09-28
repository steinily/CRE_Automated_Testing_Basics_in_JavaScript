const {pages} = require('./../po')

describe( 'Doctor page', () => {
    beforeEach( async () => {
        await pages('dashboard').open()
    })

    it('Check page title', async () => {
        const expectedTitle = 'Appointment Planner - Syncfusion Angular Components Showcase App'
        await expect(browser).toHaveTitle(expectedTitle)
    
    })

    it('Open modal window for adding a new doctor', async () => {
        await pages('dashboard').sideMenu.item('doctors').click()
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click()      
        await expect(pages('doctors').addDoctorModal.rootEl).toBeDisplayed()
    })

    it('Add a new doctor' , async () => {
        await pages('dashboard').sideMenu.item('doctors').click()
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click() 
        await pages('doctors').addDoctorModal.rootEl.waitForDisplayed();

        await $('[name="Name"]').setValue('John Doe');
        await $('#DoctorMobile').setValue('1111111111111');
        await $('[name="Email"').setValue('test@test.com');
        await $('[name="Education"').setValue('Basic');
        await $('[name="Designation"').setValue('Test');
        await browser.saveScreenshot('./pic/screenshot_dialog.png');
        await $('.e-footer-content button.e-primary').click();
        await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();
        await browser.saveScreenshot('./pic/doctors.png');
        expect($('#Specialist_8').$('.name')).toHaveText('John Doe');
        expect($('#Specialist_8').$('.education')).toHaveText('Basic' , {ignoreCase: true});
    })

    it('Close a modal window for adding a new doctor', async () => {
        await pages('dashboard').sideMenu.item('doctors').click()
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click()  
        await pages('doctors').addDoctorModal.rootEl.waitForDisplayed();
        await $('.new-doctor-dialog .e-dlg-closeicon-btn').click();
        await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();
    })
})