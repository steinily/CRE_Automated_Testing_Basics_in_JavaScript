module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
        mocha: true,
    },
    extends: 'airbnb-base',
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'class-methods-use-this': 'off',
        'arrow-parens': 'off',
        'prefer-arrow-callback': 'off',
        'func-names': 'off',
        'object-curly-newline': 'off',
    },
    ignorePatterns: ['node_modules/', 'mochawesome-report/', 'coverage/' , 'allure-report/' , 'allure-results/'],
};
