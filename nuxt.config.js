export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'server',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Eduwise Education',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', integrity: 'sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p', href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css', crossorigin: 'anonymous' },
		],
		script: [
			{
				src: '/vendors/js/vendor.bundle.base.js',
				body: true,
				hid: 'stripe',
				defer: false,
				vmid: 'extscript'
			},
			{
				src: '/vendors/chart.js/Chart.min.js',
				body: true,
				hid: 'stripe',
				defer: false,
				vmid: 'extscript'
			},
			{
				src: '/vendors/datatables.net/jquery.dataTables.js',
				body: true,
				hid: 'stripe',
				defer: false,
				vmid: 'extscript'
			},
			{
				src: '/vendors/datatables.net-bs4/dataTables.bootstrap4.js',
				body: true,
				hid: 'stripe',
				defer: false,
				vmid: 'extscript'
			},
			{
				src: '/js/dataTables.select.min.js',
				body: true,
				hid: 'stripe',
				defer: false,
				vmid: 'extscript'
			},
			{
				src: '/js/off-canvas.js',
				body: true,
				hid: 'stripe',
				defer: false,
				vmid: 'extscript'
			},
			{
				src: '/js/hoverable-collapse.js',
				body: true,
				hid: 'stripe',
				defer: false,
				vmid: 'extscript'
			},
			{
				src: '/js/template.js',
				body: true,
				hid: 'stripe',
				defer: false,
				vmid: 'extscript'
			},
			{
				src: '/js/settings.js',
				body: true,
				hid: 'stripe',
				defer: false,
				vmid: 'extscript'
			},
			{
				src: '/js/todolist.js',
				body: true,
				hid: 'stripe',
				defer: false,
				vmid: 'extscript'
			},
			{
				src: '/js/dashboard.js',
				body: true,
				hid: 'stripe',
				defer: false,
				vmid: 'extscript'
			},
			{
				src: '/js/Chart.roundedBarCharts.js',
				body: true,
				hid: 'stripe',
				defer: false,
				vmid: 'extscript'
			}
		]
	},
	server: {
		port: 8001 // default: 3000
	  },

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/static/vendors/feather/feather.css',
		'~/static/vendors/ti-icons/css/themify-icons.css',
		'~/static/vendors/css/vendor.bundle.base.css',
		'~/static/vendors/datatables.net-bs4/dataTables.bootstrap4.css',
		'~/static/vendors/ti-icons/css/themify-icons.css',
		'~/static/js/select.dataTables.min.css',
		'~/static/css/vertical-layout-light/style.css',
		'~/static/assets/style',
		'~/static/assets/globals.scss',
		'~/static/vendors/mdi/css/materialdesignicons.min.css',
	],

	generate: {
		crawler: true,
	},

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [ '~/plugins/vee-validate', '~/plugins/element-ui', 
		{ src: '~/plugins/vue-google-oauth2', ssr: false },
		{ src: '~/plugins/fb-sdk', ssr: false }
		// { src: '~/plugins/auth', ssr: false },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	ssr: true,
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',
		// https://go.nuxtjs.dev/content
		// '@nuxt/content',
		'@nuxtjs/toast',
		'cookie-universal-nuxt'
	],
	toast: {
		position: 'top-right',
		duration: 3000
	},

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},
	cookies: {},

	router: {
		trailingSlash: true
	},

	// PWA module configuration: https://go.nuxtjs.dev/pwa

	// Content module configuration: https://go.nuxtjs.dev/config-content
	content: {},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		extractCSS: true,
		transpile: [ 'vee-validate/dist/rules' ],
		// babel: {
		// 	plugins: [ [ '@babel/plugin-proposal-private-property-in-object', { loose: true } ] ],
		//   },
		/*
     ** You can extend webpack config here
     */
		extend (config, ctx) {}
	},

	env: {
		dev: process.env.NODE_ENV !== 'production',
		baseUrl: process.env.BASE_URL,
		FACEBOOK_ID: process.env.FACEBOOK_ID
	},

	publicRuntimeConfig: {
		baseURL: process.env.BASE_URL || 'https://nuxtjs.org'
	},
}
