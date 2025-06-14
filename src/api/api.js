import axios from "axios";

// Durante o desenvolvimento, use o IP da sua máquina local (host do backend)
const API_HOST = process.env.EXPO_PUBLIC_API_HOST

const api = axios.create({
    baseURL: API_HOST,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

// Interceptor para enviar token se precisar
api.interceptors.request.use(
    (config) => {
        const token = null; // ou pegue do async storage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
