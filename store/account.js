import { userService } from '@/_services/user.service'
import Cookies from 'js-cookie'

const user = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : {}

export const state = () => ({
	user
})

export const actions = {
	login ({ commit, dispatch }, data) {
		return userService.login(data).then(res => {
			return dispatch('getUser', res)
		})
	},
	google ({ commit, dispatch }, data) {
		return userService.google(data).then(({ access_token: access, refresh_token: refresh }) => {
			const res = { access, refresh }
			return dispatch('getUser', res)
		})
	},
	facebook ({ commit, dispatch }, data) {
		return userService.facebook(data).then(({ access_token: access, refresh_token: refresh }) => {
			const res = { access, refresh }
			return dispatch('getUser', res)
		})
	},
	reset ({ commit }) {
		commit('SET_USER', {})
		Cookies.remove('user')
	},
	getUser ({ commit }, tokens) {
		Cookies.set('user', JSON.stringify({ ...tokens }), { expires: 1 })
		return userService.me().then(res => {
			Cookies.set('user', JSON.stringify({ user: res, ...tokens }), { expires: 1 })
			commit('SET_USER', { user: res, ...tokens })
		}).catch(err => {
			return err
		})
	}
}

export const mutations = {
	SET_USER (state, data) {
		state.user = data
	}
}

export const getters = {
	user ({ user }) {
		return user
	}
}