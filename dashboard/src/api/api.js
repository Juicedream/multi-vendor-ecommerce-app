import axios from 'axios';
import { backendBaseUrl } from '../utils/constants';

const api = axios.create({
    baseURL: backendBaseUrl
});

export default api