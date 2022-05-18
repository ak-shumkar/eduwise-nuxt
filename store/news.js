import { newsService } from '@/_services/news.service'

export const state = () => ({
    news: [],
    oneNew: {},
    isLoading: false,
})
export const actions = {
    fetch({ commit }, query) {
        commit('setLoading', true)
        newsService
            .getAll(query)
            .then((res) => {
                commit('setItems', res)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                commit('setLoading', false)
            })
    },
    fetchById({ commit }, id) {
        commit('setLoading', true)
        newsService
            .getById(id)
            .then((res) => {
                commit('setItem', res)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                commit('setLoading', false)
            })
    }
}
export const mutations = {
    setItems(state, payload) {
        state.news = payload
    },
    setItem (state, payload) {
        state.oneNew = payload
    },
    setLoading(state, payload) {
        state.isLoading = payload
    },
}
export const getters = {
    news(state) {
        return state.news
    },
    oneNew(state) {
        return state.oneNew
    },
    isLoading(state) {
        return state.isLoading
    },
}
