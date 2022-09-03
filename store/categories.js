import { categoriesService } from '@/_services/categories.service'

export const state = () => ({
    data: [],
})

export const actions = {
    fetchAll({ commit }) {
        return categoriesService
            .getAll()
            .then((res) => {
                commit('SET_DATA', res)
            })
            .catch((err) => console.log(err))
    },
}

export const mutations = {
    SET_DATA(state, data) {
        state.data = data
    },
}
