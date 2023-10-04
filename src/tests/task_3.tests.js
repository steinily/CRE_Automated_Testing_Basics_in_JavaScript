const { pages } = require('./../PO');

describe('Task 3 tasks', () => {
    beforeEach(async () => {
        await pages('patients').open();
    });
    it('It should add a patient whit the execute() function', async () => {
        const data = {
            id: 9,
            patientName: 'Varga ',
            gender: 'Male',
            bloodtype: 'O-',
            sympthoms: 'Fever, caught flu',
            phone: '(062) 011-1223',
            email: 'test@test.com',
        };

        await browser.saveScreenshot('./src/Artifact/ExecuteBefore.png');
        await pages('patients').addPatient(data);
        await browser.saveScreenshot('./src/Artifact/ExecuteAfter.png');
        await expect(pages('patients').getPatienInfo.lastAddedPatient(7, 'name')).toHaveText('Varga');
    });

    it('After adding patient whit execute function , then refresh , last added patient should be gone', async () => {
        const data = {
            id: 9,
            patientName: 'Varga',
            gender: 'Male',
            bloodtype: 'O-',
            sympthoms: 'Fever, caught flu',
            phone: '(062) 011-1223',
            email: 'test@test.com',
        };

        await browser.saveScreenshot('./src/Artifact/WaitUntil_1.png');
        await pages('patients').addPatient(data);
        await browser.saveScreenshot('./src/Artifact/WaitUntil_2.png');
        let lastPatient = (await pages('patients').getPatienInfo.patientListLength()) - 1;
        await expect(pages('patients').getPatienInfo.lastAddedPatient(lastPatient, 'name')).toHaveText('Varga');

        browser.refresh();
        browser.waitUntil(
            () => {
                return $('.title').isDisplayed();
            },
            {
                timeout: 10000,
                timeoutMsg: 'Element did not appear after page refresh',
            },
        );

        await browser.saveScreenshot('./src/Artifact/WaitUntil_3.png');
        lastPatient = (await pages('patients').getPatienInfo.patientListLength()) - 1;
        await expect(pages('patients').getPatienInfo.lastAddedPatient(lastPatient, 'name')).toHaveText('Maud Oliver');
    });
});
