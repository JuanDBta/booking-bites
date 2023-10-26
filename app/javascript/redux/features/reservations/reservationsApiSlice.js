import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const apiBaseUrl = 'http://localhost:3000/api';
const reservationsEndpoint = 'reservations';
const reservationsApiUrl = `${apiBaseUrl}/${reservationsEndpoint}`;

export const fetchReservationsApi = createAsyncThunk('reservationsApi/fetchReservationsApi', async () => {
    try {
      const response = await axios.get(reservationsApiUrl);
      return response.data;
    } catch (error) {
      throw error.message;
    }
  });

const initialState = {
  reservationsApi: [],
  status: false,
  error: '',
};

const reservationsApiSlice = createSlice({
    name: 'reservationsApi',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchReservationsApi.fulfilled, (state, action) => {
        state.reservationsApi = action.payload;
      });
    },
  });

  export const getReservationsApi = reservationsApiSlice.actions;
  export default reservationsApiSlice.reducer;
  
  