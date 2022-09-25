import axios from 'axios';
import interceptors from './interceptors';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

interceptors(axiosInstance);

export default axiosInstance;
