# CRE_Automated_Testing_Basics_in_JavaScript
[CRE]  Automated Testing Basics in JavaScript  


# Webdriver Lesson

## Install Node 
### How to Install NVM on Linux and Mac
-In your terminal, run the nvm installer like this:


```console
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
     or
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
-Update your profile configuration

```console
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

```

-Reload the shell configuration

```console
source ~/.bashrc

```

-Wrapping up

```console
nvm install latest
```

## Init NPM and WDIO

```console
npm init -y
npm init wdio
```

### Wdio 8.14+
    After Wdio 8.14 changes , there is no need to download browser , and browser driver , we need to add to the following spec to the config file:

```JavaScript
capabilities: [{
        browserName: 'chrome',
        browserVersion: 'stable',
        'goog:chromeOptions': {
            args: ['headless', 'disable-gpu','no-sandbox']
        }

    }],
```
    browserName: browsername -> firefox ,edge , etc.
    browserVersion -> stable -> last version or give the desired version
    goog chrome args -> desired capabilities like headles (no window application), disable-gpu (less resource), no-sandbox (root user @ linux)




## If you use in remote , use :

```javascript
browser.setWindowSize(1980, 1020)
```
to make fullscreen the browser.


## Make screenshots

```javascript
wait browser.saveScreenshot('./some/path/screenshot.png');
```

## Make screenshott @ failure hook -> add to wdio.conf.js

```javascript

  afterTest: async (test, context, result) => {

    // take a screenshot anytime a test fails and throws an error

    if (result.error) {

      console.log(`Screenshot for the failed test ${test.title} is saved`);

      const filename = test.title + '.png';

      const dirPath = './artifacts/screenshots/';

      if (!existsSync(dirPath)) {

        mkdirSync(dirPath, {

          recursive: true,

        });

      }

      await browser.saveScreenshot(dirPath + filename);

    }

  },

```


## Allure reporter 

### To install Allure Reporter, follow the below steps:

```
 npm install @wdio/allure-reporter --save-dev
```

Configure wdio.conf.js to use allure reports. Then, update “reporters” with allure and configure the output directory.

```javascript


exports.config = {

  // ...

    reporters: [

      ['allure', {

        outputDir: 'allure-results',

        disableWebdriverStepsReporting: true,

        disableWebdriverScreenshotsReporting: true,

        }

      ]

    ],

  // ...

}
```

This will generate the XML file once the test execution is done as shown below (along with multiple JSON files) at the location given in outputDir

 To generate HTML  we need another dependency allure-commandline that can be installed using the below command:

 ```
 npm install -g allure-commandline --save-dev
 ```


 Execute the below command manually:

 ```
 allure generate && allure open
 ```

 This command will generate an HTML report and open it on the browser.


 ### Report autogeneration

 One can also auto generate the report by using the Allure command line tool programmatically. Add or extend your onComplete hook or create a custom service for this:

 ```javascript


// wdio.conf.js

const allure = require('allure-commandline');

exports.config = {

  // ...

  onComplete: function () {

    const reportError = new Error('Could not generate Allure report');

    const generation = allure(['generate', 'allure-results', '--clean']);

    return new Promise((resolve, reject) => {

      const generationTimeout = setTimeout(() => reject(reportError), 5000);

      generation.on('exit', function (exitCode) {

        clearTimeout(generationTimeout);

 

        if (exitCode !== 0) {

          return reject(reportError);

        }

        console.log('Allure report successfully generated');

        resolve();

      });

    });

  },

  // ...

};


 ```