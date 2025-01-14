import axios from 'axios'

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL + '/api/',
    headers
});


export default axiosClient
