import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://brainly-backend:5000/api/v1',
  withCredentials: true
});

export default instance; 