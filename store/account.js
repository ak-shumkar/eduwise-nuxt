import { userService } from '@/_services/user.service'
import Cookies from 'js-cookie'
const user = Cookies.get('user') || {}

export const state = () => ({
    user
})

export const actions = {
    login ({ commit, dispatch }, data) {
        return userService.login(data).then(res => {
            Cookies.set('user', JSON.stringify(res), { expires: 1 })
            commit('SET_USER', res)
        })
    }
}

export const mutations = {
    SET_USER (state, data) {
        state.user = data
    }
}