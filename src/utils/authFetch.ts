import axios from 'axios';

const authFetch = axios.create({
  baseURL: 'https://ergast.com/api/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default authFetch;
