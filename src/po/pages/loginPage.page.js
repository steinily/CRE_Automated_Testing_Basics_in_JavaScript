const BasePage = require('./basePage.page');
const { LoginPage } = require('../component');
/**
 *
 * @class Login
 * @extends {BasePage}
 */
class Login extends BasePage {
    /**
     * Creates an instance of Login.
     * The page is accessed using the URL '/login'.
     */
    constructor() {
        super('/login');
        this.loginPage = new LoginPage();
    }
}

module.exports = Login;
