import axios from 'axios';

const API_URL = 'http://localhost:4001/api/users/';

const getprofile = async (token) => {
  const config = {
    headers: {
      token: token,
    },
  };

  const response = await axios.get(API_URL + 'profile', config);
  console.log(response.data);
  return response.data;
};

const profileService = {
  getprofile,
};

export default profileService;
