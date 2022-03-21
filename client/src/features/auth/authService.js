// Login user
import axios from 'axios';

const API_URL = 'http://localhost:4001/auth/';

// register
const register = async (data) => {
  const response = await axios.post(API_URL + 'register', data);
  if (response.data) {
    sessionStorage.setItem('user', JSON.stringify(response.data));
    sessionStorage.setItem('token', JSON.stringify(response.data.token));
    return response.data;
  }
};

// login
const login = async (data) => {
  const response = await axios.post(API_URL + 'login', data);

  if (response.data) {
    sessionStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
  }
};

// Logout user
const logout = () => {
  sessionStorage.removeItem('user');
};

const authService = {
  login,
  logout,
  register,
};

export default authService;
