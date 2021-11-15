import Vue from 'vue'

const vueFb = {}
vueFb.install = function install (Vue, options) {
	(function (d, s, id){
		const fjs = d.getElementsByTagName(s)[0]
		if (d.getElementById(id)) {return}
		const js = d.createElement(s)
		js.id = id
		js.src = 'https://connect.facebook.net/en_US/sdk.js'
		fjs.parentNode.insertBefore(js, fjs)
		console.log('setting fb sdk')
	}(document, 'script', 'facebook-jssdk'))

	window.fbAsyncInit = function onSDKInit () {
		FB.init(options)
		FB.AppEvents.logPageView()
		Vue.FB = FB
		window.dispatchEvent(new Event('fb-sdk-ready'))
	}
	Vue.FB = undefined
}

Vue.use(vueFb, {
	appId: '1548784208791836',
	autoLogAppEvents: true,
	xfbml: true,
	version: 'v2.9'
})