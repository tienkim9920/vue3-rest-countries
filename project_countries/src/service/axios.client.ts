import axios from 'axios';
import queryString from 'query-string';

// npm install axios
// npm install query-string

const axiosClient = axios.create({
    baseURL: 'https://restcountries.com/v2',
    headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
    paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    return config;
})
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response;
    }
    return response;
}, (error) => {
    // Handle errors
    throw error;
});

export default axiosClient;
