import colors from 'vuetify/es5/util/colors';

export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,

	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		titleTemplate: '%s - leave',
		title: 'leave',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~/assets/flex.css', '~/assets/font.css'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: {
		dirs: [
			'~/components',
			'~/components/text',
			'~/components/input',
			'~/components/pages/admin',
			'~/components/pages/admin/workSetup',
			'~/components/pages/admin/employees',
			'~/components/pages/admin/leaveRequests',
			'~/components/chips',
		],
	},

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		// https://go.nuxtjs.dev/vuetify
		'@nuxtjs/vuetify',
		// Nuxt 2 only:
		// https://composition-api.nuxtjs.org/getting-started/setup#quick-start
		'@nuxtjs/composition-api/module',
		'@pinia/nuxt',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: '/',
	},
	router: {
		base: '/leave/',
	},

	// Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
	vuetify: {
		treeShake: true,

		customVariables: ['~/assets/variables.scss'],
		theme: {
			dark: false,
			themes: {
				light: {
					primary: '#998FC7',
					secondary: '#B3EFB2',
					tertiary: '#D4C2FC',
					accent: '#B2C7EF',

					background: '#F9F5FF',

					error: '#EFB2B2',
					success: '#B3EFB2',
					text: '#28262C',
					subtext: '#ACA8BD',
					warning: colors.amber.base,
					info: '#B2C7EF',
				},
			},
			options: { customProperties: true }, // this line
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
};
