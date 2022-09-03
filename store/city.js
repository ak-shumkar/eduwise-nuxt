import { cityService } from '@/_services/city.service'

export const state = () => ({
    data: [],
})

export const actions = {
    fetchAll({ commit }) {
        cityService
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
