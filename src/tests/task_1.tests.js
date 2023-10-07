const { targetPage } = require('./../po');

describe('Homepage testing with different Css , Xpath selectors, and with Different assertions ', () => {
    beforeEach(async () => {
        await targetPage('homepage').open();
    });

    it('Target page homepage should be opening', async () => {
        await expect(browser).toHaveTitle('The Internet');
    });

    it('Target page heading should be visible', async () => {
        await expect(targetPage('homepage').indexpage.getHeading).toHaveText('Welcome to the-internet');
    });

    it('Target page sub heading should be visible', async () => {
        await expect(targetPage('homepage').indexpage.getSubHeading).toHaveText('Available Examples');
    });

    it(' "Fork me on Github" picture should be visible', async () => {
        await expect(targetPage('homepage').indexpage.gitHubImage).toBeDisplayed();
    });

    it('There should be 44 available examples in the page', async () => {
        const availableLinks = await targetPage('homepage').indexpage.availableExapmles;
        expect(availableLinks).toBe(44);
    });
    it('Footer should be visible', async () => {
        await expect(targetPage('homePage').indexpage.footer).toBeDisplayed();
    });
    it('Footer should have link to Elemental Selenium', async () => {
        await expect(targetPage('homePage').indexpage.footerLink).toHaveAttribute('href', 'http://elementalselenium.com/');
    });
});

describe('Typos site testing with different Css , Xpath selectors, and with Different assertions', () => {
    beforeEach(async () => {
        await targetPage('typo').open();
    });

    it('Typos page should be opened', async () => {
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/typos');
    });

    it('Title Typos should be visible', async () => {
        await expect(targetPage('typo').typosPage.getHeading).toHaveText('Typos');
    });

    it('The second paragraph element should not have a typo', async () => {
        const paragraph = "Sometimes you'll see a typo, other times you won't.";
        let text = await targetPage('typo').typosPage.typosParagraph.getText();
        while (text !== paragraph) {
            browser.refresh();
            browser.waitUntil(
                () => {
                    return targetPage('typo').typosParagraph.isDisplayed();
                },
                {
                    timeout: 10000,
                    timeoutMsg: 'Element did not appear after page refresh',
                },
            );
            text = await targetPage('typo').typosPage.typosParagraph.getText();
        }
        await expect(targetPage('typo').typosPage.typosParagraph).toHaveText(paragraph);
    });
    
    it('The second paragraph element should have typo after a page refresh', async () => {
        const paragraphTypo = "Sometimes you'll see a typo, other times you won,t.";
        let text = await targetPage('typo').typosPage.typosParagraph.getText();
        while (text !== paragraphTypo) {
            browser.refresh();
            browser.waitUntil(
                () => {
                    return targetPage('typo').typosParagraph.isDisplayed();
                },
                {
                    timeout: 10000,
                    timeoutMsg: 'Element did not appear after page refresh',
                },
            );
            text = await targetPage('typo').typosPage.typosParagraph.getText();
        }
        await expect(targetPage('typo').typosPage.typosParagraph).toHaveText(paragraphTypo);
    });
});
