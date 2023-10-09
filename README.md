# CRE_Automated_Testing_Basics_in_JavaScript
[CRE]  Automated Testing Basics in JavaScript  


# Task 1 

## HOME TASK _Introduction to WebdriverIO
1. Create new branch in your empty repository and call it e.g. /ui_tests
2. Install and configure WebdriverIO
3. Write at least 4 scenarios trying to use both XPath and CSS selectors
 

./src/tests/task_1.tests.js


## ACCEPTANCE CRITERIA 
1.  WebdriverIO is installed
2.  At least 4 scenarios are prepared. 
3.  XPath and CSS Selectors are used
4.  Different assertions are used


# Task 2

## HOME TASK_WebdriverIO's Basic commands 

1.    Add 4-5 new scenarios using basic WDIO Commands
2.    *Replace default click method with custom one that will wait for elements before clicking. 


./src/tests/task_2.tests.js

## ACCEPTANCE CRITERIA 
1.    4-5 new scenarios are created
2.    Basic WDIO commands are used
3. *Custom click method is created


# Task 3

## HOME TASK_WebdriverIO's Advanced commands
1.    Add scenario that utilizes execute() command
2.    Add scenario that utilizes waitUntil() command
3.    Add scenario that utilizes browser actions


./src/tests/task_3.tests.js

## BONUS
4.    Add scenario that works with cookies and/or local storage



## ACCEPTANCE CRITERIA
1.    execute() scenario is implemented
2.    waitUntil() scenario is implemented
3.    Browser actions scenario is implemented


## NPM Scripts

Here are the npm scripts available in this project:

- `npm run test`: Run WebdriverIO test using the configuration file located at `./src/config/wdio.conf.js`.
- `npm run test:headless`: Run WebdriverIO test using the configuration file located at `./src/config/wdio.conf.headles.js`.
- `npm run lint`: Run ESLint to check and fix code style issues in the project.
- `npm run format`: Use Prettier to automatically format JavaScript files in the project.
- `npm run report`: Generate and open an Allure report for the test results.