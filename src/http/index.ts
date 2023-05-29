import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

// const $authHost = axios.create({
//     baseURL: process.env.REACT_APP_API_URL,
//     headers: {
//         'Accept' : 'application/json',
//         'Content-type':'application/json'
//     }
// })
//
// const authInterceptor = (config:any):any => {
//     config.headers.auhorization = `Bearer ${localStorage.getItem('userToken')}`
//     return config
// }

// $authHost.interceptors.request.use(authInterceptor);
// $host.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// $host.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
$host.defaults.headers.common['Accept'] = `application/json`;
$host.defaults.withCredentials = true;

export {
    $host,
};