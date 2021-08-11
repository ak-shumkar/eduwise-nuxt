import BaseApiService from '@/_services/baseApi.service'
class UserService extends BaseApiService {

    login (data) {
        const url = `${process.env.baseUrl}/api/auth/jwt/create/`
        return this.sendPostRequest(url, data)
    }

    register (data) {
        const url = `${process.env.baseUrl}/api/auth/users/`
        return this.sendPostRequest(url, data)
    }
}

export const userService = new UserService()