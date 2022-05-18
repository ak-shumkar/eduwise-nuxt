export const actions = {
    // async nuxtServerInit({ dispatch }) {
    //   await dispatch('news/fetch')
    // },
    async fetchHomeData ({ dispatch }) {
        const actions = [
            dispatch('news/fetch')
        ]
        try {
            await Promise.all(actions)
        } catch (err) {
            console.log(err)
        }
    }
  }
  