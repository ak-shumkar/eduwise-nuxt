// plugins/vue-google-oauth2.js
// file name can be changed to whatever you want
import Vue from 'vue'
import GAuth from 'vue-google-oauth2'

const gauthOption = {
	clientId: '582975739901-ldvoss2s9i4uutgca98g0k5rp6u8fdhn.apps.googleusercontent.com',
	scope: 'profile email',
	prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)