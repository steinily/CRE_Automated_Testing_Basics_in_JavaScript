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
        let lastPatient = (await pages('patients').getPatienInfo.patientListLength()) - 1;
        await expect(pages('patients').getPatienInfo.getPatientByRow(lastPatient, 'name')).toHaveText('Varga');
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
        await expect(pages('patients').getPatienInfo.getPatientByRow(lastPatient, 'name')).toHaveText('Varga');

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
        await expect(pages('patients').getPatienInfo.getPatientByRow(lastPatient, 'name')).toHaveText('Maud Oliver');
    });

    it('Add new patient and check if it added', async () => {
        await pages('patients').patientList.addPatientBtn.click();
        await pages('patients').patientList.rootElement.waitForDisplayed();
        await pages('patients').addNewPatient.inputNewPatient('name').setValue('John Doe');
        await pages('patients').addNewPatient.inputNewPatient('genderfemale').click();
        await pages('patients').addNewPatient.inputNewPatient('dob').setValue('02/03/1999');
        await pages('patients').addNewPatient.dropdownBtn.click();
        await pages('patients').addNewPatient.dropdownBtn.waitForDisplayed();
        await pages('patients').addNewPatient.dropdownList('O-');
        await pages('patients').addNewPatient.inputNewPatient('mobil').setValue('06201112233');
        await pages('patients').addNewPatient.inputNewPatient('email').setValue('testEmalAddress@testing.com');
        await pages('patients').addNewPatient.inputNewPatient('symptoms').setValue('Fever , Stress , Pale Face');
        await pages('patients').addNewPatient.saveBtn.click();
        await browser.saveScreenshot('./src/Artifact/Add_new_patient_and_check_if_it_added.png');
        await expect(pages('patients').addNewPatient.rootElement).not.toBeDisplayed();

        lastPatient = (await pages('patients').getPatienInfo.patientListLength()) - 1;
        await expect(pages('patients').getPatienInfo.getPatientByRow(lastPatient, 'name')).toHaveText('John Doe');
        await expect(pages('patients').getPatienInfo.getPatientByRow(lastPatient, 'gender')).toHaveText('Female');
        await expect(pages('patients').getPatienInfo.getPatientByRow(lastPatient, 'bloodGroup')).toHaveText('O-');
        await expect(pages('patients').getPatienInfo.getPatientByRow(lastPatient, 'mobil')).toHaveText('(062) 011-1223');
        await expect(pages('patients').getPatienInfo.getPatientByRow(lastPatient, 'email')).toHaveText('testEmalAddress@testing.com');
        await expect(pages('patients').getPatienInfo.getPatientByRow(lastPatient, 'symptoms')).toHaveText('Fever , Stress , Pale Face');
    });

});
