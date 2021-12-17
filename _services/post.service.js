import BaseApiService from '@/_services/baseApi.service'
class PostService extends BaseApiService {

	create (data) {
		const url = `${process.env.baseUrl}/api/posts/`
		return this.sendPostRequest(url, data)
	}

	edit (data, id) {
		const url = `${process.env.baseUrl}/api/posts/${id}/`
		return this.sendPutRequest(url, data)
	}

	getAll () {
		const url = `${process.env.baseUrl}/api/posts/`
		return this.sendGetRequest(url)
	}

	getById (id) {
		const url = `${process.env.baseUrl}/api/posts/${id}/`
		return this.sendGetRequest(url)
	}

	delete (id) {
		const url = `${process.env.baseUrl}/api/posts/${id}/`
		return this.sendDeleteRequest(url)
	}
}

export const postService = new PostService()