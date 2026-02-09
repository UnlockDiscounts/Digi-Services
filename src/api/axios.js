import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://digiservices-backend-6hc3.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
