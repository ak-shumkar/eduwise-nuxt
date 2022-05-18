import { authHeader, handleResponse } from '@/_helpers/authHeader'
import axios from 'axios'

export default class BaseApiService {
    sendGetRequest(url) {
        return this.sendRequest('GET', url)
    }

    sendDeleteRequest(url) {
        return this.sendRequest('DELETE', url)
    }

    sendPostRequest(url, data) {
        return this.sendRequest('POST', url, data)
    }

    sendPutRequest(url, data) {
        return this.sendRequest('PUT', url, data)
    }

    queryFilter() {
        let q = '?'
        Array.from(arguments).forEach((ar, i, arr) => {
            if (ar.value || ar.value === 0) {
                if (q.length > 1) q += '&'
                q += ar.title + '=' + ar.value
            }
        })
        return q
    }

    sendRequest(method, url, data) {
        let isFormData = false
        if (typeof window !== 'undefined') isFormData = data instanceof FormData
        const requestOptions = {
            method,
            headers: { ...authHeader() },
        }
        if (!isFormData) requestOptions.headers['Content-Type'] = 'application/json'

        if (data) requestOptions.data = isFormData ? data : JSON.stringify(data)

        return axios({ url, ...requestOptions }).then((res) => res.data)
    }
}
