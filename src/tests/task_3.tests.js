const { targetPage } = require('./../po');

describe('Drag and Drop Page testing', () => {
    beforeEach(async () => {

        await targetPage('draganddrop').open();
    });

    it('Should get and verify the current URL', async () => {    
        // Use browser.execute to get the current URL
        const currentURL =await browser.execute(() => {
          return window.location.href;
        });
        await expect(currentURL).toBe('https://the-internet.herokuapp.com/drag_and_drop')
    });  
    it('In the page there should be a rectangle whit an "A" char in it', async () => {
        await targetPage('draganddrop').dragAndDrop.aRectangle.isDisplayed()
        await expect(targetPage('draganddrop').dragAndDrop.aRectangle).toHaveText("A")
    });

    it('In the page there should be a rectangle whit an "B" char in it', async () => {
        await targetPage('draganddrop').dragAndDrop.bRectangle.isDisplayed()
        await expect(targetPage('draganddrop').dragAndDrop.bRectangle).toHaveText("B")
    });

    it('Whit execute() function we should be able change A rectangle , with B rectangele', async () => {
        const sourceElement  = await targetPage('draganddrop').dragAndDrop.aRectangle
        const targetElement  = await targetPage('draganddrop').dragAndDrop.bRectangle
        await browser.execute((source, target) => {
            const simulateDragAndDrop = (source, target) => {
              const dataTransfer = new DataTransfer();
          
              source.dispatchEvent(new DragEvent('dragstart', { dataTransfer, bubbles: true }));
              target.dispatchEvent(new DragEvent('dragenter', { dataTransfer, bubbles: true }));
              target.dispatchEvent(new DragEvent('dragover', { dataTransfer, bubbles: true }));
              target.dispatchEvent(new DragEvent('drop', { dataTransfer, bubbles: true }));
              source.dispatchEvent(new DragEvent('dragend', { dataTransfer, bubbles: true }));
            };
          
            simulateDragAndDrop(source, target);
          }, sourceElement, targetElement);
          
        await expect(targetPage('draganddrop').dragAndDrop.aRectangle).toHaveText("B")
    });

    it('Whit execute() function we should be able change B rectangle , with A rectangele', async () => {
        const targetElement  = await targetPage('draganddrop').dragAndDrop.aRectangle
        const sourceElement  = await targetPage('draganddrop').dragAndDrop.bRectangle
        await browser.execute((source, target) => {
            const simulateDragAndDrop = (source, target) => {
              const dataTransfer = new DataTransfer();
          
              source.dispatchEvent(new DragEvent('dragstart', { dataTransfer, bubbles: true }));
              target.dispatchEvent(new DragEvent('dragenter', { dataTransfer, bubbles: true }));
              target.dispatchEvent(new DragEvent('dragover', { dataTransfer, bubbles: true }));
              target.dispatchEvent(new DragEvent('drop', { dataTransfer, bubbles: true }));
              source.dispatchEvent(new DragEvent('dragend', { dataTransfer, bubbles: true }));
            };
          
            simulateDragAndDrop(source, target);
          }, sourceElement, targetElement);
          
        await expect(targetPage('draganddrop').dragAndDrop.bRectangle).toHaveText("A")
    });
});

describe('Dynamically Loaded Page Elements Page testing', () => {
    beforeEach(async () => {

        await targetPage('dynamicloading').open();
    });

    it('Element on page that is hidden , after pressing start button hidden element should be visible', async () => {
        await targetPage('dynamicloading').dynamicelement.startBtn.click()
        browser.waitUntil(() => {
            return $('#loading').isDisplayed() === false;
          }, {
            timeout: 10000, // Maximum wait time in milliseconds
            timeoutMsg: 'Loading element did not disappear within 10 seconds',
          });
        await expect(await targetPage('dynamicloading').dynamicelement.hiddenText).toHaveText('Hello World!')
    });
});

describe('Dynamically Loaded Page Elements Page testing', () => {
    beforeEach(async () => {

        await targetPage('brokenimage').open();
    });

    it('Should verify the presence of broken images', async () => {
        let brokenImages = await targetPage('brokenimage').brokenImage.getImg
        browser.waitUntil(() => {
          return brokenImages.length === 3;
        }, {
          timeout: 10000, // 
          timeoutMsg: 'Broken images did not load within 10 seconds',
        });
    
        // Verify that all three images are present
        expect(brokenImages).toHaveLength(3);
      });
    });

