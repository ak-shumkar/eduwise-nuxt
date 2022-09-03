export const actions = {
    // async nuxtServerInit({ dispatch }) {
    //   await dispatch('news/fetch')
    // },
    async fetchHomeData({ dispatch }) {
        const actions = [
            dispatch('news/fetch'),
            dispatch('categories/fetchAll'),
            dispatch('city/fetchAll'),
        ]
        try {
            await Promise.all(actions)
        } catch (err) {
            console.log(err)
        }
    },
    async fetchUniversitiesData({ dispatch }) {
        const actions = [
            dispatch('news/fetch'),
            dispatch('categories/fetchAll'),
            dispatch('programs/fetchAll'),
        ]
        try {
            await Promise.all(actions)
        } catch (err) {
            console.log(err)
        }
    },
}
