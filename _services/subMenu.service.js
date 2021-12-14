import BaseApiService from '@/_services/baseApi.service'
class SubMenuService extends BaseApiService {

	create (data) {
		const url = `${process.env.baseUrl}/api/submenus/`
		return this.sendPostRequest(url, data)
	}

	edit (data, id) {
		const url = `${process.env.baseUrl}/api/submenus/${id}/`
		return this.sendPutRequest(url, data)
	}

	getAll () {
		const url = `${process.env.baseUrl}/api/submenus/`
		return this.sendGetRequest(url)
	}

	getById (id) {
		const url = `${process.env.baseUrl}/api/submenus/${id}/`
		return this.sendGetRequest(url)
	}

	delete (id) {
		const url = `${process.env.baseUrl}/api/submenus/${id}/`
		return this.sendDeleteRequest(url)
	}
}

export const subMenuService = new SubMenuService()