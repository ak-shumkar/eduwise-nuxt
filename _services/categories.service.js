import BaseApiService from '@/_services/baseApi.service'

const prefix = 'categories'

class CategoriesService extends BaseApiService {
    create(data) {
        const url = `${process.env.baseUrl}/api/${prefix}`
        return this.sendPostRequest(url, data)
    }

    edit(data, id) {
        const url = `${process.env.baseUrl}/api/${prefix}/${id}/`
        return this.sendPutRequest(url, data)
    }

    getAll() {
        const url = `${process.env.baseUrl}/api/${prefix}/`
        return this.sendGetRequest(url)
    }

    getById(id) {
        const url = `${process.env.baseUrl}/api/${prefix}/${id}/`
        return this.sendGetRequest(url)
    }

    delete(id) {
        const url = `${process.env.baseUrl}/api/${prefix}/${id}/`
        return this.sendDeleteRequest(url)
    }
}

export const categoriesService = new CategoriesService()
