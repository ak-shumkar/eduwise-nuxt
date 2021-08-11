import BaseApiService from '@/_services/baseApi.service'
class CountryService extends BaseApiService {

	create (data) {
		const url = `${process.env.baseUrl}/api/countries/`
		return this.sendPostRequest(url, data)
	}

	edit (data, id) {
		const url = `${process.env.baseUrl}/api/countries/${id}/`
		return this.sendPutRequest(url, data)
	}

	getAll () {
		const url = `${process.env.baseUrl}/api/countries/`
		return this.sendGetRequest(url)
	}

	getById (id) {
		const url = `${process.env.baseUrl}/api/countries/${id}/`
		return this.sendGetRequest(url)
	}

	delete (id) {
		const url = `${process.env.baseUrl}/api/countries/${id}/`
		return this.sendDeleteRequest(url)
	}
}

export const countryService = new CountryService()