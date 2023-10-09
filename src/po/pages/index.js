const AddRemovePage = require('./addRemovePage.page');
const BrokenImagePage = require('./brokenImagePage.page');
const CheckBoxesPage = require('./checkBoxesPage.page');
const DisappearingElementsPage = require('./disappearingElementsPage.page');
const DragAndDropPage = require('./dragAndDropPage.page');
const DropDownPage = require('./dropDownPage.page');
const DynamicControlPage = require('./dynamicControlPage.page');
const InputPage = require('./inputPage.page');
const HomePage = require('./homePage.page');
const TypoPage = require('./typoPage.page');
const DynamicLoadingPage = require('./dynamicLoadingPage.page')
/**
 *
 * @param  {'add_remove' | 'brokenimage' | 'check_boxes'| 'disappearing_elements'| 'draganddrop'| 'dropdown'| 'dynamiccontrol'| 'input_page' | 'homePage' | 'typo' | 'dynamicloading'} name
 * @return {AddRemovePage | BrokenImagePage | CheckBoxesPage | DisappearingElementsPage | DragAndDropPage | DropDownPage | DynamicControlPage | InputPage | HomePage | TypoPage | DynamicLoadingPage}
 */
function targetPage(name) {
    const page = {
        add_remove: new AddRemovePage(),
        brokenimage: new BrokenImagePage(),
        check_boxes: new CheckBoxesPage(),
        disappearing_elements: new DisappearingElementsPage(),
        draganddrop: new DragAndDropPage(),
        dropdown: new DropDownPage(),
        dynamiccontrol: new DynamicControlPage(),
        input_page: new InputPage(),
        homepage: new HomePage(),
        typo: new TypoPage(),
        dynamicloading: new DynamicLoadingPage()
    };

    return page[name.toLowerCase()];
}

module.exports = {
    AddRemovePage,
    BrokenImagePage,
    CheckBoxesPage,
    DisappearingElementsPage,
    DragAndDropPage,
    DropDownPage,
    DynamicControlPage,
    InputPage,
    targetPage,
    HomePage,
    TypoPage,
    DynamicLoadingPage,
};
