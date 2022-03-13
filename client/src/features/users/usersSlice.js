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
  },
});

export const { reset } = usersSlice.actions;
export default usersSlice.reducer;
