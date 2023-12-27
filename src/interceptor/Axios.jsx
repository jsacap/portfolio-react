import axios from "axios";

const instance = axios.create({
  // baseURL: 'http://localhost:8000'
  baseURL: 'https://portfolio-backend-production-sanchojralegre.up.railway.app'
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `JWT ${accessToken}`;      
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance

// Refresh
const refreshAccessToken = async () => {
  try {
    const refresh_token = localStorage.getItem('refreshToken');
    // const response = await axios.post('http://localhost:8000/auth/jwt/refresh', {
    const response = await axios.post('https://portfolio-backend-production-sanchojralegre.up.railway.app/auth/jwt/refresh', {
      refresh: refresh_token,      
    });

    const newAccessToken = response.data.access;
    const newRefreshToken = response.data.refresh;
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    localStorage.setItem('accessToken', newAccessToken)
    localStorage.setItem('refreshToken', newRefreshToken)
    console.log('Tokens refreshed', newAccessToken, newRefreshToken)

    return newAccessToken, newRefreshToken;
  } catch (error) {
    console.error('Failed to fetch tokens:', error.message);
    throw error;
  }
};

