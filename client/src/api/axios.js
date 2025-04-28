import axios from 'axios';

export default function createApi() {
  const api = axios.create({
    baseURL: '/api',
  });

  api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return api;
}
