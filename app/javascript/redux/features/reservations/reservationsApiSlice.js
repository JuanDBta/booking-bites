import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchReservationsApi = createAsyncThunk('data/fetchReservationsApi', async () => {
    try {
      const response = await fetch('https://bookingbites.onrender.com/api/reservations');
      if (!response.ok) {
        throw new Error('Error fetching data from the API');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching data from the API');
    }
  });

  const reservationsApiSlice = createSlice({
    name: 'reservationsApi',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchReservationsApi.fulfilled, (state, action) => {
        return action.payload;
      });
    },
  });

export const { setReservationsApi } = reservationsApiSlice.actions;
export default reservationsApiSlice.reducer;
