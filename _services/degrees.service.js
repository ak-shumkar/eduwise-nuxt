import BaseApiService from '@/_services/baseApi.service'
class DegreesService extends BaseApiService {
    create(data) {
        const url = `${process.env.baseUrl}/api/degrees/`
        return this.sendPostRequest(url, data)
    }

    edit(data, id) {
        const url = `${process.env.baseUrl}/api/degrees/${id}/`
        return this.sendPutRequest(url, data)
    }

    getAll() {
        const url = `${process.env.baseUrl}/api/degrees/`
        return this.sendGetRequest(url)
    }

    getById(id) {
        const url = `${process.env.baseUrl}/api/degrees/${id}/`
        return this.sendGetRequest(url)
    }

    delete(id) {
        const url = `${process.env.baseUrl}/api/degrees/${id}/`
        return this.sendDeleteRequest(url)
    }
}

export const degreesService = new DegreesService()
