import BaseApiService from '@/_services/baseApi.service'
class UserService extends BaseApiService {

    login (data) {
        const url = `${process.env.BASE_URL}/api/auth/jwt/create/`
        return this.sendPostRequest(url, data)
    }

    register (data) {
        const url = `${process.env.BASE_URL}/auth/register/`
        return this.sendPostRequest(url, data)
    }
}

export const userService = new UserService()