import axios from 'axios';

console.log()
const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true
});

export default instance; 