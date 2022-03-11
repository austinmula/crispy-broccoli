import axios from 'axios';

const API_URL = 'http://localhost:4001/api/chatroom/';

const fetchrooms = async (token) => {
  const config = {
    headers: {
      token: token,
    },
  };

  const response = await axios.get(API_URL, config);
  console.log(response.data);
  return response.data;
};

const chatroomService = {
  fetchrooms,
};

export default chatroomService;
