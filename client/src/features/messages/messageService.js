import axios from 'axios';

const API_URL = 'http://localhost:4001/api/messages/';

const fetchmessages = async (token, chatroom_id) => {
  const config = {
    headers: {
      token: token,
    },
  };

  const response = await axios.get(API_URL + chatroom_id, config);
  console.log(response.data);
  return response.data;
};

const sendmessage = async (token, data, sentBy, name) => {
  const config = {
    headers: {
      token: token,
    },
  };

  const newdata = { ...data, sentBy: sentBy, username: name };
  console.log(newdata);

  const response = await axios.post(API_URL + 'create', newdata, config);
  // console.log(response.data);
  return response.data;
};

const messageService = {
  fetchmessages,
  sendmessage,
};

export default messageService;
