import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/sections';
const initialState = {
  reservations: [],
  status: false,
  error: '',
};




const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
   
  },
});


export default reservationSlice.reducer;