import BaseApiService from '@/_services/baseApi.service'
class InstitutionService extends BaseApiService {

	create (data) {
		const url = `${process.env.baseUrl}/api/institutions/`
		return this.sendPostRequest(url, data)
	}

	edit (data, id) {
		const url = `${process.env.baseUrl}/api/institutions/${id}/`
		return this.sendPutRequest(url, data)
	}

	getAll () {
		const url = `${process.env.baseUrl}/api/institutions/`
		return this.sendGetRequest(url)
	}

	getById (id) {
		const url = `${process.env.baseUrl}/api/institutions/${id}/`
		return this.sendGetRequest(url)
	}

	delete (id) {
		const url = `${process.env.baseUrl}/api/institutions/${id}/`
		return this.sendDeleteRequest(url)
	}
}

export const institutionService = new InstitutionService()