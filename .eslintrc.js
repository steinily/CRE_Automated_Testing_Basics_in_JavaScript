module.exports = {
    extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:wdio/recommended'],
    plugins: ['prettier', 'wdio'],
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: 'google',
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    ignorePatterns: ['node_modules/*', 'out/*', 'allure-report/*', 'allure-results/*', 'src/config/*'],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'max-len': [
            'error',
            {
                code: 250,
            },
        ],
    },
};
