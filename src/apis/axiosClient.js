import axios from 'axios';

const axiosClient = axios.create({
    baseURL:
        'https://be-project-reactjs.onrender.com/api/v1/product?page=1&limit=10',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosClient;
