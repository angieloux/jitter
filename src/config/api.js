// information from the backend, URL

import axios from 'axios'

const jitterAPI = axios.create({
    baseURL: 'http://localhost:4000'
})

export default jitterAPI