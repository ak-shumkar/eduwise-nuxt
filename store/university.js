import { institutionService } from '@/_services/institution.service'

export const state = () => ({
    universities: [],
})
export const actions = {
    fetchUniversities({ commit }) {
        institutionService
            .getAll()
            .then((res) => {
                commit('setUniversities', res)
            })
            .catch((err) => {
                console.log(err)
            })
    },
}
export const mutations = {
    setUniversities(state, payload) {
        state.universities = payload
    },
}
export const getters = {
    universities(state) {
        return state.universities
    },
}
