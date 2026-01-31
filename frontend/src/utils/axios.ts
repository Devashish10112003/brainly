import axios from 'axios';
const backeendURL=import.meta.env.VITE_BACKEND_URL;

console.log(backeendURL);
console.log()
const instance = axios.create({
  baseURL: backeendURL,
  withCredentials: true
});

export default instance; 