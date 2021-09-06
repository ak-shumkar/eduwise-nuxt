import Vue from 'vue'
import GoogleAuth from 'vue-google-auth'

Vue.use(GoogleAuth, { clientID: '582975739901-ldvoss2s9i4uutgca98g0k5rp6u8fdhn.apps.googleusercontent.com' })
Vue.googleAuth().load()