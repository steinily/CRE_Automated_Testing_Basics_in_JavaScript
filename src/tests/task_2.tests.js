const { targetPage } = require('./../po');

describe('Dynamic Control Page Remove/add testing', () => {
    beforeEach(async () => {

        await targetPage('dynamiccontrol').open();
    });

    it('Dynamic Controls page should be opened', async () => {
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/dynamic_controls');
    });

    it('Check Dynamic Controls page title',async () => {
        await expect(targetPage('dynamiccontrol').dynamicControlPage.getHeading).toHaveText('Dynamic Controls')
    });

    it('Dynamic Controls page checkbox shoud be not selected', async () => {
        const checkbox = await targetPage('dynamiccontrol').dynamicControlPage.checkBox.isSelected()
        await expect(checkbox).toBe(false)
    });

    it('Dynamic Controls page checkbox shoud be selected', async () => {
        await targetPage('dynamiccontrol').dynamicControlPage.checkBox.click()
        const checkbox = await targetPage('dynamiccontrol').dynamicControlPage.checkBox.isSelected()
        await expect(checkbox).toBe(true)
    } )

    it('After clicking the remove button it should appear a loading animation',async () => {
        await targetPage('dynamiccontrol').dynamicControlPage.removeBtn.click()
        await expect(targetPage('dynamiccontrol').dynamicControlPage.loading).toBeDisplayed()
    });

    it('After clicking the remove buton in te Dynamic Controls page checkbox shoud be removed', async () => {
        await targetPage('dynamiccontrol').dynamicControlPage.removeBtn.click()
        await targetPage('dynamiccontrol').dynamicControlPage.message.waitForDisplayed()
        await expect(targetPage('dynamiccontrol').dynamicControlPage.message).toHaveText("It's gone!")
    } )

    it('After clicking the remove button we wait till checkbox is removed then click //CustomClick function//', async () => {
        await targetPage('dynamiccontrol').dynamicControlPage.removeBtn.click()
        await targetPage('dynamiccontrol').dynamicControlPage.customClicker(targetPage('dynamiccontrol').dynamicControlPage.addBtn)
        await targetPage('dynamiccontrol').dynamicControlPage.message.waitForDisplayed()
        await expect(targetPage('dynamiccontrol').dynamicControlPage.message).toHaveText("It's back!")
    });

});

describe('Dynamic Control Page Enable/disable testing', () => {
    beforeEach(async () => {

        await targetPage('dynamiccontrol').open();
    });

    it('The input field should be disabled when page is opened', async () => {
        let inputfied = await targetPage('dynamiccontrol').dynamicControlPage.inputText.isEnabled()
        await expect(inputfied).toBe(false)
    });

    it('The input field should be enabled after we click the enable button', async () => {
        await targetPage('dynamiccontrol').dynamicControlPage.enableBtn.click()
        await targetPage('dynamiccontrol').dynamicControlPage.message.waitForDisplayed()
        let inputfied = await targetPage('dynamiccontrol').dynamicControlPage.inputText.isEnabled()
        await expect(inputfied).toBe(true)
    });

    it('The input field should be disabled after clicking the disable button //CustomClick function//', async () => {
        await targetPage('dynamiccontrol').dynamicControlPage.enableBtn.click()
        await targetPage('dynamiccontrol').dynamicControlPage.customClicker(targetPage('dynamiccontrol').dynamicControlPage.disableBtn)
        await targetPage('dynamiccontrol').dynamicControlPage.message.waitForDisplayed()
        let inputfied = await targetPage('dynamiccontrol').dynamicControlPage.inputText.isEnabled()
        await expect(inputfied).toBe(false)
    });
});