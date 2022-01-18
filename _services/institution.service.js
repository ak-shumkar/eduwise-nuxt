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

	getAll ({ search = '', institution_type = '', city = '' } = {}) {
		const q = this.queryFilter(
			{ title: 'search', value: search },
			{ title: 'institution_type', value: institution_type },
			{ title: 'city', value: city },
		)
		const url = `${process.env.baseUrl}/api/institutions/${q}`
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