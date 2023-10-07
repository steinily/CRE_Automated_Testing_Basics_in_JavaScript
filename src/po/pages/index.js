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
/**
 *
 * @param  {'add_remove' | 'broken_image' | 'check_boxes'| 'disappearing_elements'| 'drag_and_drop'| 'dropdown'| 'dynamiccontrol'| 'input_page' | 'homePage' | 'typo'} name
 * @return {AddRemovePage | BrokenImagePage | CheckBoxesPage | DisappearingElementsPage | DragAndDropPage | DropDownPage | DynamicControlPage | InputPage | HomePage | TypoPage}
 */
function targetPage(name) {
    const page = {
        add_remove: new AddRemovePage(),
        broken_image: new BrokenImagePage(),
        check_boxes: new CheckBoxesPage(),
        disappearing_elements: new DisappearingElementsPage(),
        drag_and_drop: new DragAndDropPage(),
        dropdown: new DropDownPage(),
        dynamiccontrol: new DynamicControlPage(),
        input_page: new InputPage(),
        homepage: new HomePage(),
        typo: new TypoPage(),
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
};
