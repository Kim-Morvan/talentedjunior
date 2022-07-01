import axios from 'axios';

const SERVER_URL = 'http://localhost:5000';

export default axios.create({
    baseURL: SERVER_URL,
});

export const axiosPrivate = axios.create({
    baseURL: SERVER_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: false
});