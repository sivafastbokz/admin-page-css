import axios from 'axios';
import ServerConfigs from '../configs/serverCofigs';

const isDevelopment =process.env.NODE_ENV === 'development'
const baseURL = isDevelopment ? ServerConfigs : 'https://booking-app-backend-2z33.onrender.com'

const axiosClient = axios.create({
  baseURL
})

export default axiosClient;