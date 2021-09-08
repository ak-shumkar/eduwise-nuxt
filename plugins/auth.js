import Vue from 'vue'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios'
 
Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
	baseUrl: 'https://eduwise.education', // Your API domain
  
	providers: {
		facebook: {
			clientId: '4267151433377906', // your Facebook App ID e.g. 12345667890
			redirectUri: 'https://eduwise.education/', // Your client app URL
			responseType: 'token',
			authorizationEndpoint: 'https://www.facebook.com/v3.0/dialog/oauth',
		}
	}
})
