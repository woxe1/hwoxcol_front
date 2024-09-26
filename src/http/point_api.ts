import axios, { AxiosRequestConfig } from 'axios';


export const POINT_API_URL = 'http://192.168.1.183:8090/v1';


const $point_api = axios.create({
    baseURL : POINT_API_URL,
    withCredentials: true,
});

$point_api.interceptors.request.use((config) => {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
    return config;
});


export default $point_api;