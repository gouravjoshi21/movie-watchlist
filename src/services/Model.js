import axios from 'axios'

async function Model({ request, url = null, api = null, data = {} }) {
    try {
        let response
        let headers = {}

        switch (request) {
            case 'GET':
                response = await axios.get(fullUrl)
                break
            case 'POST':
                response = await axios.post(fullUrl, data)
                break
            case 'PUT':
                response = await axios.put(fullUrl, data)
                break
            case 'PATCH':
                response = await axios.patch(fullUrl, data)
                break
            case 'DELETE':
                response = await axios.delete(fullUrl)
                break
            default:
                throw new Error('Invalid request type!')
        }

        return response
    } catch (error) {
        throw new error()
    }
}

export default Model
