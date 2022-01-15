import BaseApiService from '@/_services/baseApi.service'
class ProgramsService extends BaseApiService {
    create(data) {
        const url = `${process.env.baseUrl}/api/programs/`
        return this.sendPostRequest(url, data)
    }

    edit(data, id) {
        const url = `${process.env.baseUrl}/api/programs/${id}/`
        return this.sendPutRequest(url, data)
    }

    getAll() {
        const url = `${process.env.baseUrl}/api/programs/`
        return this.sendGetRequest(url)
    }

    getById(id) {
        const url = `${process.env.baseUrl}/api/programs/${id}/`
        return this.sendGetRequest(url)
    }

    delete(id) {
        const url = `${process.env.baseUrl}/api/programs/${id}/`
        return this.sendDeleteRequest(url)
    }
}

export const programsService = new ProgramsService()
