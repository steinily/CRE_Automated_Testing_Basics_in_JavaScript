const {pages} = require('./../PO') 

describe('Dashboard Page  ', () => {

    beforeEach( async () => {
        await pages('dashboard').open()

    })
    
    it('Check page title', async () => {
        const expectedTitle = 'Appointment Planner - Syncfusion Angular Components Showcase App'
        await expect(browser).toHaveTitle(expectedTitle)
    })

    it('Check Today Appointment Container Title' , async () => {
        const expectedTitle = 'Total Appointments - Today'
        await expect(pages('dashboard').dayEventsComponent.containerTitle).toHaveText(expectedTitle , {ignoreCase: true})
    });

    it("The number of today's patients must be the same as the sum of the rows in the table.", async() =>{
        const todayPatientsTableCount = await pages('dashboard').todaysAppointments.patientCount.length
        const todayDayEventPatiensCount = await pages('dashboard').dayEventsComponent.todayEventsCount
        await expect(todayDayEventPatiensCount).toBe(todayPatientsTableCount.toString())
    })

    
});

describe('Patients List Page', () => {
    beforeEach( async () => {
        await pages('patients').open()
    })
    it('Add new Patient button is visible', async ()=> {
        await expect(pages('patients').patientList.addPatientBtn).toBeDisplayed()
    })
    it('Patient List title is visible', async () => {
        const expectedTitle = "PATIENT LIST"
        await expect(pages('patients').patientList.getTitle).toHaveText(expectedTitle , {ignoreCase: true})
    })

})
