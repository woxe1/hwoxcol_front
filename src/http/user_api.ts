import axios, { AxiosRequestConfig } from 'axios';


export const USER_API_URL = 'http://192.168.1.183:8080/v1';


const $user_api = axios.create({
    baseURL : USER_API_URL,
    withCredentials: true,
});

$user_api.interceptors.request.use((config) => {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
    return config;
});

// function login(username: string, password: string) {
//     return instance.post('/login', {
//         email: username,
//         password: password
//     });
// }

export default $user_api;