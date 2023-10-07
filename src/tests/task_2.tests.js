const { targetPage } = require('./../po');

describe('Replace default click method with custom one that will wait for elements before clicking', () => {
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

    it('After clicking the remove buton in te Dynamic Controls page checkbox shoud be removed', async () => {
        await targetPage('dynamiccontrol').dynamicControlPage.removeBtn.click()
        const loading = await targetPage('dynamiccontorl').dynamicControlPage.loading.isDisplayed()
        if (loading) {
            await expect(targetPage('dynamiccontrol').dynamicControlPage.checkBox).not.toBeDisplayed();
        }
         console.log(loading)
    } )
});