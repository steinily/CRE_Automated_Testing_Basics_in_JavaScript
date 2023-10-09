const { targetPage } = require('./../po');

describe('Drag and Drop Page testing', () => {
    beforeEach(async () => {
        await targetPage('draganddrop').open();
    });

    it('Should get and verify the current URL', async () => {
        // Use browser.execute to get the current URL
        const currentURL = await browser.execute(() => {
            return window.location.href;
        });
        await expect(currentURL).toBe('https://the-internet.herokuapp.com/drag_and_drop');
    });
    it('In the page there should be a rectangle whit an "A" char in it', async () => {
        await targetPage('draganddrop').dragAndDrop.aRectangle.isDisplayed();
        await expect(targetPage('draganddrop').dragAndDrop.aRectangle).toHaveText('A');
    });

    it('In the page there should be a rectangle whit an "B" char in it', async () => {
        await targetPage('draganddrop').dragAndDrop.bRectangle.isDisplayed();
        await expect(targetPage('draganddrop').dragAndDrop.bRectangle).toHaveText('B');
    });

    it('Whit execute() function we should be able change A rectangle , with B rectangele', async () => {
        const sourceElement = await targetPage('draganddrop').dragAndDrop.aRectangle;
        const targetElement = await targetPage('draganddrop').dragAndDrop.bRectangle;
        await browser.execute(
            (source, target) => {
                const simulateDragAndDrop = (source, target) => {
                    const dataTransfer = new DataTransfer();

                    source.dispatchEvent(new DragEvent('dragstart', { dataTransfer, bubbles: true }));
                    target.dispatchEvent(new DragEvent('dragenter', { dataTransfer, bubbles: true }));
                    target.dispatchEvent(new DragEvent('dragover', { dataTransfer, bubbles: true }));
                    target.dispatchEvent(new DragEvent('drop', { dataTransfer, bubbles: true }));
                    source.dispatchEvent(new DragEvent('dragend', { dataTransfer, bubbles: true }));
                };

                simulateDragAndDrop(source, target);
            },
            sourceElement,
            targetElement,
        );

        await expect(targetPage('draganddrop').dragAndDrop.aRectangle).toHaveText('B');
    });

    it('Whit execute() function we should be able change B rectangle , with A rectangele', async () => {
        const targetElement = await targetPage('draganddrop').dragAndDrop.aRectangle;
        const sourceElement = await targetPage('draganddrop').dragAndDrop.bRectangle;
        await browser.execute(
            (source, target) => {
                const simulateDragAndDrop = (source, target) => {
                    const dataTransfer = new DataTransfer();

                    source.dispatchEvent(new DragEvent('dragstart', { dataTransfer, bubbles: true }));
                    target.dispatchEvent(new DragEvent('dragenter', { dataTransfer, bubbles: true }));
                    target.dispatchEvent(new DragEvent('dragover', { dataTransfer, bubbles: true }));
                    target.dispatchEvent(new DragEvent('drop', { dataTransfer, bubbles: true }));
                    source.dispatchEvent(new DragEvent('dragend', { dataTransfer, bubbles: true }));
                };

                simulateDragAndDrop(source, target);
            },
            sourceElement,
            targetElement,
        );

        await expect(targetPage('draganddrop').dragAndDrop.bRectangle).toHaveText('A');
    });
});

describe('Dynamically Loaded Page Elements Page testing', () => {
    beforeEach(async () => {
        await targetPage('dynamicloading').open();
    });

    it('Element on page that is hidden , after pressing start button hidden element should be visible', async () => {
        await targetPage('dynamicloading').dynamicelement.startBtn.click();
        browser.waitUntil(
            () => {
                return $('#loading').isDisplayed() === false;
            },
            {
                timeout: 10000, // Maximum wait time in milliseconds
                timeoutMsg: 'Loading element did not disappear within 10 seconds',
            },
        );
        await expect(await targetPage('dynamicloading').dynamicelement.hiddenText).toHaveText('Hello World!');
    });
});

describe('Dynamically Loaded Page Elements Page testing', () => {
    beforeEach(async () => {
        await targetPage('brokenimage').open();
    });

    it('Should verify the presence of broken images', async () => {
        const brokenImages = await targetPage('brokenimage').brokenImage.getImg;
        browser.waitUntil(
            () => {
                return brokenImages.length === 3;
            },
            {
                timeout: 10000, //
                timeoutMsg: 'Broken images did not load within 10 seconds',
            },
        );
        expect(brokenImages).toHaveLength(3);
    });
});

describe('Add/Remove Elements page testing ', () => {
    beforeEach(async () => {
        await targetPage('addremove').open();
    });
    it('Add element should be visible ', async () => {
        await expect(targetPage('addremove').addRemoveElement.addElementBtn).toBeDisplayed();
    });
    it('When Clicking the add element button there should be added a new button whit Delete text', async () => {
        await targetPage('addremove').addRemoveElement.addElementBtn.click();
        await expect(targetPage('addremove').addRemoveElement.firsthDeleteBtn).toHaveText('Delete');
    });

    it('When we clicking multiple times in the add button , then according the clicking count there should be the same amount of delete button added', async () => {
        const clickAmunt = 5;
        for (let i = 0; i < clickAmunt; i++) {
            await targetPage('addremove').addRemoveElement.addElementBtn.click();
        }
        const deleteBtCount = await targetPage('addremove').addRemoveElement.deleteBtCount;
        await expect(deleteBtCount).toBe(clickAmunt);
    });

    it('When with browser action we clicking the delete button , the clicked delete button should dissappear', async () => {
        const clickAmunt = 10;
        for (let i = 0; i < clickAmunt; i++) {
            await targetPage('addremove').addRemoveElement.addElementBtn.click();
        }
        const button = await targetPage('addremove').addRemoveElement.deleteBtn(5);

        const location = await button.getLocation();
        const x = parseInt(location.x, 10);
        const y = parseInt(location.y, 10);

        await browser.performActions([
            {
                type: 'pointer',
                id: 'mouse',
                parameters: { pointerType: 'mouse' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: 0, y: 0, origin: 'pointer' },
                    { type: 'pointerMove', duration: 1000, x, y, origin: 'viewport' },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pointerUp', button: 0 },
                ],
            },
        ]);

        const deleteBtCount = await targetPage('addremove').addRemoveElement.deleteBtCount;
        await expect(deleteBtCount).toBe(9);
    });

    it('When with browser action we clicking the all visible delete button , all the clicked delete button should dissappear', async () => {
        const clickAmunt = 10;
        for (let i = 0; i < clickAmunt; i++) {
            await targetPage('addremove').addRemoveElement.addElementBtn.click();
        }
        const buttons = await targetPage('addremove').addRemoveElement.deleteBtnAll;
        for (const button of buttons) {
            const location = await button.getLocation();
            const x = parseInt(location.x, 10);
            const y = parseInt(location.y, 10);
            browser.performActions([
                {
                    type: 'pointer',
                    id: 'mouse',
                    parameters: { pointerType: 'mouse' },
                    actions: [
                        { type: 'pointerMove', duration: 0, x: 0, y: 0, origin: 'pointer' },
                        { type: 'pointerMove', duration: 1000, x, y, origin: 'viewport' },
                        { type: 'pointerDown', button: 0 },
                        { type: 'pointerUp', button: 0 },
                    ],
                },
            ]);
        }

        const deleteBtCount = await targetPage('addremove').addRemoveElement.deleteBtCount;
        await expect(deleteBtCount).toBe(0);
    });
});

describe('Login page testing ', () => {
    beforeEach(async () => {
        await targetPage('loginpage').open();
    });

    it('It should show Title', async () => {
        await expect(targetPage('loginpage').loginPage.getTitle).toHaveText('Login Page');
    });

    it('Page should have a login button', async () => {
        await expect(targetPage('loginpage').loginPage.loginBtn).toBeDisplayed();
    });

    it('Page should have an input field whit username name', async () => {
        const name = await targetPage('loginpage').loginPage.userNameInput.getAttribute('name');
        await expect(name).toBe('username');
    });

    it('Page should have an input field whit password name', async () => {
        const name = await targetPage('loginpage').loginPage.passwordInput.getAttribute('name');
        await expect(name).toBe('password');
    });

    it('Page should show an error message if we try to login with nonexistent credentials', async () => {
        await targetPage('loginpage').loginPage.userNameInput.setValue('wrong');
        await targetPage('loginpage').loginPage.passwordInput.setValue('worng');
        await targetPage('loginpage').loginPage.loginBtn.click();
        await expect(targetPage('loginpage').loginPage.loginResponse).toBeDisplayed();
    });
    it('Page should move to /secure page when we login whit existing credentials', async () => {
        await targetPage('loginpage').loginPage.userNameInput.setValue('tomsmith');
        await targetPage('loginpage').loginPage.passwordInput.setValue('SuperSecretPassword!');
        await targetPage('loginpage').loginPage.loginBtn.click();
        browser.waitUntil(
            () => {
                return browser.getUrl() === 'https://the-internet.herokuapp.com/secure';
            },
            {
                timeout: 10000, // Maximum wait time in milliseconds
                timeoutMsg: 'Navigation did not complete within 10 seconds',
            },
        );
        const currentUrl = await browser.getUrl();
        await expect(currentUrl).toBe('https://the-internet.herokuapp.com/secure');
    });
    it('When we click the log out button , page should move back the /login site and show a green message  ', async () => {
        await targetPage('loginpage').loginPage.userNameInput.setValue('tomsmith');
        await targetPage('loginpage').loginPage.passwordInput.setValue('SuperSecretPassword!');
        await targetPage('loginpage').loginPage.loginBtn.click();
        browser.waitUntil(
            () => {
                return browser.getUrl() === 'https://the-internet.herokuapp.com/secure';
            },
            {
                timeout: 10000, // Maximum wait time in milliseconds
                timeoutMsg: 'Navigation did not complete within 10 seconds',
            },
        );
        await targetPage('secure').securePage.logoutBtn.click();
        browser.waitUntil(
            () => {
                return browser.getUrl() === 'https://the-internet.herokuapp.com/login';
            },
            {
                timeout: 10000, // Maximum wait time in milliseconds
                timeoutMsg: 'Navigation did not complete within 10 seconds',
            },
        );

        await expect(targetPage('loginpage').loginPage.loginResponse).toBeDisplayed();
    });
});
