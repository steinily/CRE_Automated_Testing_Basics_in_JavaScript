const { pages } = require('./../PO');

describe('Task 2 Add new scenarios', () => {
    beforeEach(async () => {
        await pages('patients').open();
    });

    it('Its should show red message when name is missing when clicking the save button ', async () => {
        await pages('patients').patientList.addPatientBtn.click();
        await expect(pages('patients').addNewPatient.rootElement).toBeDisplayed();
        await pages('patients').addNewPatient.saveBtn.click();
        await expect(pages('patients').addNewPatient.nameMissingError).toHaveTextContaining('Enter valid name');
    });

    it('Its should show red message when mobil is missing when clicking the save button ', async () => {
        await pages('patients').patientList.addPatientBtn.click();
        await expect(pages('patients').addNewPatient.rootElement).toBeDisplayed();
        await pages('patients').addNewPatient.saveBtn.click();
        await expect(pages('patients').addNewPatient.mobilMissingError).toBeDisplayed();
    });
    it('Its should show red message when email is missing when clicking the save button ', async () => {
        await pages('patients').patientList.addPatientBtn.click();
        await expect(pages('patients').addNewPatient.rootElement).toBeDisplayed();
        await pages('patients').addNewPatient.saveBtn.click();
        await expect(pages('patients').addNewPatient.emailMissingError).toBeExisting();
    });

    it('Its should show red message when email address is not appropriate ', async () => {
        await pages('patients').patientList.addPatientBtn.click();
        await expect(pages('patients').addNewPatient.rootElement).toBeDisplayed();
        await pages('patients').addNewPatient.inputNewPatient('email').setValue('testEmalAddress');
        await pages('patients').addNewPatient.saveBtn.click();
        await expect(pages('patients').addNewPatient.emailMissingError).toHaveTextContaining('Email address is invalid');
    });
    it('Red message should disappear when one char added to input field ', async () => {
        await pages('patients').patientList.addPatientBtn.click();
        await expect(pages('patients').addNewPatient.rootElement).toBeDisplayed();
        await pages('patients').addNewPatient.saveBtn.click();
        await expect(pages('patients').addNewPatient.nameMissingError).toHaveTextContaining('Enter valid name');
        await pages('patients').addNewPatient.inputNewPatient('name').setValue('J');
        await expect(pages('patients').addNewPatient.nameMissingError).not.toBeDisplayed('Enter valid name');
    });
    it('Red message should disappear when email address is appropriate ', async () => {
        await pages('patients').patientList.addPatientBtn.click();
        await expect(pages('patients').addNewPatient.rootElement).toBeDisplayed();
        await pages('patients').addNewPatient.saveBtn.click();
        await expect(pages('patients').addNewPatient.emailMissingError).toBeExisting();
        await pages('patients').addNewPatient.inputNewPatient('email').setValue('testEmalAddress@test.com');
        await expect(pages('patients').addNewPatient.emailMissingError).not.toBeDisplayed();
    });
    it('Red message should not show when mobil number is 10 number long', async () => {
        await pages('patients').patientList.addPatientBtn.click();
        await expect(pages('patients').addNewPatient.rootElement).toBeDisplayed();
        await pages('patients').addNewPatient.saveBtn.click();
        await pages('patients').addNewPatient.inputNewPatient('mobil').setValue('06201112233');
        await expect(pages('patients').addNewPatient.mobilMissingError).not.toBeDisplayed();
    });

    it('SearchBar should have placeholder text ', async () => {
        const placeholderValue = (await pages('patients').patientList.searchInputField).getAttribute('placeholder');
        expect(await placeholderValue).toHaveText('Search Patient');
    });

    it('SearchBar clear button should clear input field', async () => {
        await pages('patients').patientList.searchInputField.setValue('Mercy');
        await pages('patients').patientList.searchInputFieldClear.click();
        await expect(pages('patients').patientList.searchInputField).toHaveText('');
    });

    it('SearchBar should filter patient list if name (Mercy) is entered', async () => {
        await pages('patients').patientList.searchInputField.setValue('Mercy');
        expect(pages('patients').getPatienInfo.getPatientByRow(0, 'name')).toHaveText('Mercy');
    });

    it('SearchBar should return empty list  if non existing name is entered.', async () => {
        await pages('patients').patientList.searchInputField.setValue('NOName');
        await expect(pages('patients').patientList.emptyRow).toBeExisting();
        await expect(pages('patients').patientList.emptyRow).toHaveText('No records to display');
    });
});

describe('Task 2 create custom click function ', () => {
    beforeEach(async () => {
        await pages('patients').open();
    });

    it('Custom ClickAndWait function Test', async () => {
        await pages('patients').clickAndWait(await pages('patients').patientList.addPatientBtn);
        await expect(pages('patients').addNewPatient.rootElement).toBeDisplayed();
    });
});
