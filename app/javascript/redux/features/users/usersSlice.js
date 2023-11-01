import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://localhost:3000/api/';
const users= 'users'

export const fetchUser = createAsyncThunk(
    'users/fetchUser',
    async (username) => {
      try {
        const response = await fetch(`${url}users/?username=${username}`);
        if (!response.ok) {
          throw new Error('User does not exist');
        }
        const res = await response.json();
        return res;
      } catch (error) {
        return error.message;
      }
    },
  )

  export const createUser = createAsyncThunk(
    'users/createUser',
    async (data, thunkAPI) => {
      try {
        const response = await fetch(`${url}${users}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          const errorResponse = await response.json();
          throw new Error(errorResponse.errors[0]);
        }
        return await response.json();
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
const initialState = {
  id:null,
  username: null,
  name: null,
  loginError: false,
  error: null,
};
export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.username = null;
      state.name = null;
      state.id = null;
      localStorage.setItem('username', JSON.stringify(null));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        if (payload.username) {
          state.username = payload.username;
          state.name = payload.name;
          state.id = payload.id;
          state.loginError = false;
          state.error = null;
          localStorage.setItem('username', JSON.stringify(payload.username));
        }
      })
      .addCase(fetchUser.rejected, (state) => {
        state.loginError = true;
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        if (payload.username) {
          state.username = payload.username;
          state.name = payload.name;
          state.loginError = false;
          state.error = null;
          localStorage.setItem('username', JSON.stringify(payload.username));
        }
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loginError = true;
        state.error = action.payload;
      });
      
      
  },
});
export const { logout } = usersSlice.actions;

export default usersSlice.reducer;