import axios from 'axios';
import { isEmpty } from 'lodash';
import nookies from 'nookies';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const HeaderDefault = () => ({
  baseURL: API_URL,
  timeout: 100000,
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'X-Frame-Options': 'DENY',
  },
});

// errorComposer will compose a handleGlobally function
let api = axios.create(HeaderDefault());

api.interceptors.request.use(function (config) {
  const cookies = nookies.get();
  const { token } = cookies;

  if (isEmpty(token)) {
    return config;
  } else {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use((res) => res?.data);

export { api as axios };
