import axios from './axios.client'

export const getAll = () => {
    const url = '/all'
    return axios.get(url)
};