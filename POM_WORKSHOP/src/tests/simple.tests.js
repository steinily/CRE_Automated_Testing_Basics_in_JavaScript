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
        await browser.saveScreenshot('./pic/test1.png');
        await pages('doctors').addDoctorModal.input('name').setValue('John Doe');
        await pages('doctors').addDoctorModal.input('phone').setValue('1111111111111');
        await pages('doctors').addDoctorModal.input('email').setValue('test@test.com');
        await pages('doctors').addDoctorModal.input('education').setValue('Basic');
        await pages('doctors').addDoctorModal.input('designation').setValue('Test');
        await browser.saveScreenshot('./pic/screenshot_dialog.png');
        await pages('doctors').addDoctorModal.saveBtn.click();
        await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();
        await browser.saveScreenshot('./pic/doctors.png');

        
        await expect(pages('doctors').specialistCard(8).name).toHaveText('Dr. John Doe');
        await expect(pages('doctors').specialistCard(8).education).toHaveText('Basic' , {ignoreCase: true});
    })

    it('Close a modal window for adding a new doctor', async () => {
        await pages('dashboard').sideMenu.item('doctors').click()
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click()  
        await pages('doctors').addDoctorModal.rootEl.waitForDisplayed();
        await browser.saveScreenshot('./pic/test2.png');
        await pages('doctors').addDoctorModal.closeBtn.click();
        await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();
    })
})