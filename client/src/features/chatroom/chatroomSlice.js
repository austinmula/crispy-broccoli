import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import chatroomService from './chatroomService';

const initialState = {
  chatrooms: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

// Fetch chatrooms
export const fetchrooms = createAsyncThunk(
  'users/chatrooms',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await chatroomService.fetchrooms(token);
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

export const chatroomSlice = createSlice({
  name: 'chatroom', // this is the name of our slice
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: {
    [fetchrooms.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchrooms.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.chatrooms = action.payload;
    },
    [fetchrooms.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
  },
});

export const { reset } = chatroomSlice.actions;
export default chatroomSlice.reducer;
