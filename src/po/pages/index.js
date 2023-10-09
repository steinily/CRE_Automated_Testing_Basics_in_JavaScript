const AddRemovePage = require('./addRemovePage.page');
const BrokenImagePage = require('./brokenImagePage.page');
const DragAndDropPage = require('./dragAndDropPage.page');
const DynamicControlPage = require('./dynamicControlPage.page');
const HomePage = require('./homePage.page');
const TypoPage = require('./typoPage.page');
const DynamicLoadingPage = require('./dynamicLoadingPage.page');
const LoginPage = require('./loginPage.page');
const SecurePage = require('./securePage.page');
/**
 *
 * @param  {'addremove' | 'brokenimage' |'draganddrop'| 'dynamiccontrol'| 'homePage' | 'typo' | 'dynamicloading' | 'loginpage' | 'secure'} name
 * @return {AddRemovePage | BrokenImagePage |  DragAndDropPage | DynamicControlPage | HomePage | TypoPage | DynamicLoadingPage | LoginPage | SecurePage}
 */
function targetPage(name) {
    const page = {
        addremove: new AddRemovePage(),
        brokenimage: new BrokenImagePage(),
        draganddrop: new DragAndDropPage(),
        dynamiccontrol: new DynamicControlPage(),
        dynamicloading: new DynamicLoadingPage(),
        homepage: new HomePage(),
        typo: new TypoPage(),
        loginpage: new LoginPage(),
        secure: new SecurePage(),
    };

    return page[name.toLowerCase()];
}

module.exports = {
    AddRemovePage,
    BrokenImagePage,
    DragAndDropPage,
    DynamicControlPage,
    targetPage,
    HomePage,
    TypoPage,
    DynamicLoadingPage,
    SecurePage,
};
