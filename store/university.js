import { institutionService } from '@/_services/institution.service'
import { programsService } from '@/_services/programs.service'
import { degreesService } from '@/_services/degrees.service'

export const state = () => ({
    universities: [],
    programs: [],
    degrees: [],
    university: {},
    isLoading: false,
})
export const actions = {
    fetchUniversities({ commit }, query) {
        commit('setLoading', true)
        institutionService
            .getAll(query)
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
    fetchUniversity({ commit }, id) {
        commit('setLoading', true)
        institutionService
            .getById(id)
            .then((res) => {
                commit('setUniversity', res)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                commit('setLoading', false)
            })
    },
    fetchPrograms({ commit }, query) {
        commit('setLoading', true)
        programsService
            .getAll(query)
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
    setUniversity(state, payload) {
        state.university = payload
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
    university(state) {
        return state.university
    },
    isLoading(state) {
        return state.isLoading
    },
}
