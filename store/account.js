import { userService } from '@/_services/user.service'
import Cookies from 'js-cookie'

const user = JSON.parse(JSON.stringify(Cookies.get('user')) || '{}') || {}

export const state = () => ({
	user
})

export const actions = {
	login ({ commit, dispatch }, data) {
		return userService.login(data).then(res => {
			Cookies.set('user', JSON.stringify(res), { expires: 1 })
			commit('SET_USER', res)
		})
	},
	google ({ commit, dispatch }, data) {
		return userService.google(data).then(({ access_token: access, refresh_token: refresh, user }) => {
			const res = { access, refresh, user }
			Cookies.set('user', JSON.stringify(res), { expires: 1 })
			commit('SET_USER', res)
		})
	},
	reset ({ commit }) {
		commit('SET_USER', {})
		Cookies.remove('user')
	}
}

export const mutations = {
	SET_USER (state, data) {
		state.user = data
	}
}