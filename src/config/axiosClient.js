import axios from 'axios'

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

const axiosClient = axios.create({
    baseURL: import.meta.env.VUE_APP_SERVER + '/api/',
    headers
});


export default axiosClient
