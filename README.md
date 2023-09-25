# CRE_Automated_Testing_Basics_in_JavaScript
[CRE]  Automated Testing Basics in JavaScript  

## Test runers should always be installed as DEV dependencies.

# Unit Test Course Lecture 
    -Git Init => Initialize Git
    -NPM init => Initialize NPM
    -npm i eslint => Initialize EsLint
    -npx eslint --init  => Initialize EsLint
    -npm i mocha  => Mocha package install
    -npm i mochaawesome => Mocha reports package install
    -npm i c8 => Code coverage package install
    -npm i husky => Creating Githooks

Important notice :
    - We need to add the "type":"module", because the Import/Export usage. => dont need rename the js files

Creating the app => ./app/numbers_validator.js
Creating the mocha init file  => .mocharc.json =>
    
 ```    {
    "spec": "test/**/*.spec.js",
    "reporter":"mochawesome"
    }
```

Creating C8 code coverage init file:
      
 ```{
    "check-coverage": true,
    "branches" : 80,
    "lines" : 80,
    "functions": 100,
    "statements": 80,
    "reporter": ["html","text"]
} 
 ```    

Add coverage runner to package.json file
    
    ``` "coverage": "c8 npm test"
     ```

Eslint configuration:
    add .eslintignore
        node_modules/*.*
        coverage/*.*
        mochawsome-report/*.*