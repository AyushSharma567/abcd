import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.mode ===  "development" ?'http://localhost:5000/api':'/api', //dynamic base url
    withCredentials: true, // to send cookies to server requests
});

export default axiosInstance;