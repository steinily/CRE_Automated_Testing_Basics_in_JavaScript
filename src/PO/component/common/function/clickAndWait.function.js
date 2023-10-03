async function clickAndWait(selector) {
    await browser.$(selector).waitForClickable({reverse:false}); 
    await browser.$(selector).click(); 
  }
  
  module.exports = { clickAndWait }; 