import { userService } from '@/_services/user.service'
import Cookies from 'js-cookie'

export function authHeader () {
	const user = JSON.parse((Cookies.get('user') || '{}'))

	if (user && user.access) 
		return { 'Authorization': 'Bearer ' + user.access }
	 else 
		return {}
	
}

export function handleResponse (response) {
	return response.text().then(text => {
		const data = text && JSON.parse(text)
		if (!response.ok) {
			if (response.status === 401 || response.status === 403) {
				// userService.logout()
				// window.location.href = '/login/'
				// location.reload(true)
			}

			const error = (data && data.message) || response.statusText
			return Promise.reject(error)
		}

		return data
	})
}
