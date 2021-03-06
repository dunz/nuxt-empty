module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended'
    ],
    plugins: [],
    // add your custom rules here
    rules: {
        indent: ['error', 4, {SwitchCase: 1, ignoreComments: true}],
        'vue/html-indent': ['warn', 4],
        semi: ['error', 'always'],
        'object-curly-spacing': ['error', 'never']
    }
};
