import BaseApiService from '@/_services/baseApi.service'
class NewsService extends BaseApiService {
    create(data) {
        const url = `${process.env.baseUrl}/api/news/`
        return this.sendPostRequest(url, data)
    }

    edit(data, id) {
        const url = `${process.env.baseUrl}/api/news/${id}/`
        return this.sendPutRequest(url, data)
    }

    getAll() {
        const url = `${process.env.baseUrl}/api/news/`
        return this.sendGetRequest(url)
    }

    getById(id) {
        const url = `${process.env.baseUrl}/api/news/${id}/`
        return this.sendGetRequest(url)
    }

    delete(id) {
        const url = `${process.env.baseUrl}/api/news/${id}/`
        return this.sendDeleteRequest(url)
    }
}

export const newsService = new NewsService()
