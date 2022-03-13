import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import profileService from './profileService';

const initialState = {
  profile: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

// Fetch profile
export const getprofile = createAsyncThunk(
  'profile/user',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await profileService.getprofile(token);
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

export const profileSlice = createSlice({
  name: 'profile', // this is the name of our slice
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: {
    [getprofile.pending]: (state) => {
      state.isLoading = true;
    },
    [getprofile.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.profile = action.payload;
    },
    [getprofile.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
  },
});

export const { reset } = profileSlice.actions;
export default profileSlice.reducer;
