describe("test suite", () => {
    it("First test", async () => {
        browser.setWindowSize(1980, 1020)
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard");
        const pageTitle = await browser.getTitle();

        expect(pageTitle).toEqual("Appointment Planner - Syncfusion Angular Components Showcase App")
    })
    it("Second Test", async() => {
        await $("div.doctors").click();
        await $("//button[contains(text(),'Add New Doctor')]").click();
        
        await $("input[name='Name']").setValue("John Doe");
        await $("//button[text()='Save']").click();

        const emailError = await $("label#Email-info");
        await browser.saveScreenshot('./pic/SecondTest.png')
        expect(await emailError.getText()).toEqual("Enter valid email");

    })

});


