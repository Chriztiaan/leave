module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: ['eslint:recommended', '@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', 'plugin:prettier/recommended', 'prettier', '@vue/prettier'],
	plugins: [],
	// add your custom rules here
	rules: { 'vue/multi-word-component-names': 0, eqeqeq: 'off', 'no-return-assign': 'off' },
};
