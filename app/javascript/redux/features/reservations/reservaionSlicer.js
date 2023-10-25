import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/sections';
const res= 'reservations'
const initialState = {
  reservations: [],
  status: false,
  error: '',
};


export const addReservation = createAsyncThunk('reservations/addReservation', async (newtable) => {
  try {
    await axios.post(`${url}/${newtable.id}/${res}`,newtable);
    return newtable;
  } catch (error) {
    return error.message;
  }
});



const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
   
    builder.addCase(addReservation.fulfilled, (state, action) => {
      state.reservations.push(action.payload);
    });
  },
});
export const getReservations = (state) => state.reservations.reservations;
export const getStatus = (state) => state.reservations.status;
export const getError = (state) => state.reservations.error;

export default reservationSlice.reducer;