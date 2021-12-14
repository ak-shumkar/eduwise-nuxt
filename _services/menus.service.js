import BaseApiService from '@/_services/baseApi.service'
class MenusService extends BaseApiService {

	create (data) {
		const url = `${process.env.baseUrl}/api/menus/`
		return this.sendPostRequest(url, data)
	}

	edit (data, id) {
		const url = `${process.env.baseUrl}/api/menus/${id}/`
		return this.sendPutRequest(url, data)
	}

	getAll () {
		const url = `${process.env.baseUrl}/api/menus/`
		return this.sendGetRequest(url)
	}

	getById (id) {
		const url = `${process.env.baseUrl}/api/menus/${id}/`
		return this.sendGetRequest(url)
	}

	delete (id) {
		const url = `${process.env.baseUrl}/api/menus/${id}/`
		return this.sendDeleteRequest(url)
	}
}

export const menusService = new MenusService()