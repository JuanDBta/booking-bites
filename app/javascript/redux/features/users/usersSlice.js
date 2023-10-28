import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://localhost:3000/api/';

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
        return error;
      }
    },
  )

export const createUser = createAsyncThunk(
  'users/createUser',
  async (data) => {
    try {
      const response = await fetch(${url}users/, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('User not created !!!');
      }
      return await response.json();
    } catch (error) {
      return error;
    }
  },
);
const initialState = {
  id: null,
  username: null,
  name: null,
  loginError: false,
};
export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.id = null;
      state.username = null;
      state.name = null;
      localStorage.setItem('username', JSON.stringify(null));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        if (payload.username) {
          state.id = payload.id;
          state.username = payload.username;
          state.name = payload.name;
          localStorage.setItem('username', JSON.stringify(payload.username));
        }
      })
      .addCase(fetchUser.rejected, (state) => {
        state.loginError = true;
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        if (payload.username) {
          state.id = payload.id;
          state.username = payload.username;
          state.name = payload.name;
          localStorage.setItem('username', JSON.stringify(payload.username));
        }
      })
      .addCase(createUser.rejected, (state) => {
        state.loginError = true;
      });
  },
});
export const { logout } = usersSlice.actions;

export default usersSlice.reducer;