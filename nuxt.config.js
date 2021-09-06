import path from 'path'
import fs from 'fs'
export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'eduwise-nuxt',
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
		'~/static/vendors/mdi/css/materialdesignicons.min.css',
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [ '~/plugins/vee-validate', '~/plugins/element-ui', 
		{ src: '~/plugins/vue-google-oauth2', ssr: false }
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		'@nuxtjs/auth-next',
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',
		// https://go.nuxtjs.dev/content
		'@nuxt/content',
		'@nuxtjs/toast',
	],
	toast: {
		position: 'top-right',
		duration: 3000
	},

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},

	router: {
		trailingSlash: true
	},

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		manifest: {
			lang: 'en'
		}
	},

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
		baseUrl: process.env.BASE_URL
	},

	publicRuntimeConfig: {
		baseURL: process.env.BASE_URL || 'https://nuxtjs.org'
	},
	auth: {
		strategies: {
			social: {
			  scheme: 'oauth2',
			  endpoints: {
					authorization: 'https://accounts.google.com/o/oauth2/auth',
					token: undefined,
					userInfo: 'https://www.googleapis.com/oauth2/v3/userinfo',
					logout: 'https://example.com/logout'
			  },
			  token: {
					property: 'access_token',
					type: 'Bearer',
					maxAge: 1800
			  },
			  refreshToken: {
					property: 'refresh_token',
					maxAge: 60 * 60 * 24 * 30
			  },
			  responseType: 'token',
			  grantType: 'authorization_code',
			  accessType: undefined,
			  redirectUri: undefined,
			  logoutRedirectUri: undefined,
			  clientId: 'SET_ME',
			  scope: [ 'openid', 'profile', 'email' ],
			  state: 'UNIQUE_AND_NON_GUESSABLE',
			  codeChallengeMethod: '',
			  responseMode: '',
			  acrValues: '',
			  // autoLogout: false
			},
			facebook: {
				endpoints: {
			  		userInfo: 'https://graph.facebook.com/v6.0/me?fields=id,name,email'
				},
				clientId: '668282920423634',
				scope: [ 'public_profile', 'email' ]
		  },
		  }
	  }

	// server: {
	// 	https: {
	// 	  key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
	// 	  cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
	// 	}
	//   }
}
