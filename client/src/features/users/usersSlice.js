import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import usersService from './usersService';

const initialState = {
  users: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

// Fetch users
export const fetchallusers = createAsyncThunk(
  'users/userdata',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await usersService.fetchallusers(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Edit a user
export const edituserdetails = createAsyncThunk(
  'users/edit',
  async (user_data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await usersService.edituserdetails(token, user_data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Delete A user
export const deleteuser = createAsyncThunk(
  'users/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await usersService.deleteuser(token, id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      console.log(message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const usersSlice = createSlice({
  name: 'users', // this is the name of our slice
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: {
    [fetchallusers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchallusers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.users = action.payload;
    },
    [fetchallusers.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
    [edituserdetails.pending]: (state) => {
      state.isLoading = true;
    },
    [edituserdetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.users = state.users.map((user) =>
        user.user_id === action.payload.user_id ? (user = action.payload) : user
      );
    },
    [edituserdetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
    [deleteuser.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteuser.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.isSuccess = true;
      state.users = state.users.filter(
        (user) => user.user_id !== action.payload.user_id
      );
    },
    [deleteuser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
  },
});

export const { reset } = usersSlice.actions;
export default usersSlice.reducer;
