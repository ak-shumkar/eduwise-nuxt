import { institutionService } from '@/_services/institution.service'
import { programsService } from '@/_services/programs.service'
import { degreesService } from '@/_services/degrees.service'

export const state = () => ({
    universities: [],
    programs: [],
    degrees: [],
    isLoading: false,
})
export const actions = {
    fetchUniversities({ commit }) {
        commit('setLoading', true)
        institutionService
            .getAll()
            .then((res) => {
                commit('setUniversities', res)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                commit('setLoading', false)
            })
    },
    fetchPrograms({ commit }) {
        commit('setLoading', true)
        programsService
            .getAll()
            .then((res) => {
                commit('setPrograms', res)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                commit('setLoading', false)
            })
    },
    fetchDegrees({ commit }) {
        commit('setLoading', true)
        degreesService
            .getAll()
            .then((res) => {
                commit('setDegrees', res)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                commit('setLoading', false)
            })
    },
}
export const mutations = {
    setUniversities(state, payload) {
        state.universities = payload
    },
    setPrograms(state, payload) {
        state.programs = payload
    },
    setDegrees(state, payload) {
        state.degrees = payload
    },
    setLoading(state, payload) {
        state.isLoading = payload
    },
}
export const getters = {
    universities(state) {
        return state.universities
    },
    programs(state) {
        return state.programs
    },
    degrees(state) {
        return state.degrees
    },
    isLoading(state) {
        return state.isLoading
    },
}
