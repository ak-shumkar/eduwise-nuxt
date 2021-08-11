import BaseApiService from '@/_services/baseApi.service'
class CityService extends BaseApiService {

	create (data) {
		const url = `${process.env.baseUrl}/api/cities/`
		return this.sendPostRequest(url, data)
	}

	edit (data, id) {
		const url = `${process.env.baseUrl}/api/cities/${id}/`
		return this.sendPutRequest(url, data)
	}

	getAll () {
		const url = `${process.env.baseUrl}/api/cities/`
		return this.sendGetRequest(url)
	}

	getById (id) {
		const url = `${process.env.baseUrl}/api/cities/${id}/`
		return this.sendGetRequest(url)
	}

	delete (id) {
		const url = `${process.env.baseUrl}/api/cities/${id}/`
		return this.sendDeleteRequest(url)
	}
}

export const cityService = new CityService()