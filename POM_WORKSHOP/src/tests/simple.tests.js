describe( 'Doctor page', () => {
    beforeEach( async () => {
        await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
        browser.setWindowSize(1980, 1020)
    })

    it('Check page title', async () => {
        const expectedTitle = 'Appointment Planner - Syncfusion Angular Components Showcase App'
        const title = await browser.getTitle()
        await expect(browser).toHaveTitle(expectedTitle)
    
    })

    it('Open modal window for adding a new doctor', async () => {
        // Click on doctors item in the side menu
        await $('[routerlink="/doctors"]').click()
        // cick on add new doctor btn
        await $('.specialization-types button.e-control').click()      
        // check that a modal window is displayed
        await expect($('.new-doctor-dialog')).toBeDisplayed()
    })

    it('Add a new doctor' , async () => {
        // Click on doctors item in the side menu
        await $('[routerlink="/doctors"]').click();
        // cick on add new doctor btn
        await $('.specialization-types button.e-control').click();  
        // wait for visibility of modal window
        await $('.new-doctor-dialog').waitForDisplayed();

        await $('[name="Name"]').setValue('John Doe');
        await $('#DoctorMobile').setValue('1111111111111');
        await $('[name="Email"').setValue('test@test.com');
        await $('[name="Education"').setValue('Basic');
        await $('[name="Designation"').setValue('Test');
        await browser.saveScreenshot('./pic/screenshot_dialog.png');
        await $('.e-footer-content button.e-primary').click();
        await expect($('.new-doctor-dialog')).not.toBeDisplayed();
        await browser.saveScreenshot('./pic/doctors.png');
        expect($('#Specialist_8').$('.name')).toHaveText('John Doe');
        expect($('#Specialist_8').$('.education')).toHaveText('Basic' , {ignoreCase: true});
    })

    it('Close a modal window for adding a new doctor', async () => {
        await $('[routerlink="/doctors"]').click();
        await $('.specialization-types button.e-control').click();  
        await $('.new-doctor-dialog').waitForDisplayed();
        await $('.new-doctor-dialog .e-dlg-closeicon-btn').click();
        await expect($('.new-doctor-dialog')).not.toBeDisplayed();
    })
})