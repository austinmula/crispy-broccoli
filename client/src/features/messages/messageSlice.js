import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import messageService from './messageService';

const initialState = {
  messages: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

// Fetch messages
export const fetchmessages = createAsyncThunk(
  'users/messages',
  async (chatroom_id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await messageService.fetchmessages(token, chatroom_id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// post a message
export const sendmessage = createAsyncThunk(
  'users/postmsg',
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const sentBy = thunkAPI.getState().auth.user.user_id;
      const name = thunkAPI.getState().auth.user.name;
      return await messageService.sendmessage(token, data, sentBy, name);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const messageSlice = createSlice({
  name: 'mensaje', // this is the name of our slice
  initialState,
  reducers: {
    reset: (state) => initialState,
    appendMessage: (state, action) => {
      state.messages = [...state.messages, action.payload];
    },
  },
  extraReducers: {
    [fetchmessages.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchmessages.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.messages = action.payload;
    },
    [fetchmessages.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
    [sendmessage.pending]: (state) => {
      state.isLoading = true;
    },
    [sendmessage.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.messages.push(action.payload);
    },
    [sendmessage.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
  },
});

export const { reset, appendMessage } = messageSlice.actions;
export default messageSlice.reducer;
