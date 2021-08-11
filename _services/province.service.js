import BaseApiService from '@/_services/baseApi.service'
class ProvinceService extends BaseApiService {

	create (data) {
		const url = `${process.env.baseUrl}/api/provinces/`
		return this.sendPostRequest(url, data)
	}

	edit (data, id) {
		const url = `${process.env.baseUrl}/api/provinces/${id}/`
		return this.sendPutRequest(url, data)
	}

	getAll () {
		const url = `${process.env.baseUrl}/api/provinces/`
		return this.sendGetRequest(url)
	}

	getById (id) {
		const url = `${process.env.baseUrl}/api/provinces/${id}/`
		return this.sendGetRequest(url)
	}

	delete (id) {
		const url = `${process.env.baseUrl}/api/provinces/${id}/`
		return this.sendDeleteRequest(url)
	}
}

export const provinceService = new ProvinceService()