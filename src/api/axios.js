import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://digiservices-backend-main.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
