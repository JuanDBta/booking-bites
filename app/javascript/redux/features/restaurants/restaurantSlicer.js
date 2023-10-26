import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/restaurants';


export const fetchrestaurants = createAsyncThunk('data/fetchrestaurants', async () => {
    try {
      const response = await fetch(`${url}`);
      if (!response.ok) {
        throw new Error('Error fetching data from the API');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching data from the API');
    }
  });
  export const addrestaurant = createAsyncThunk('restaurants/addrestaurant', async (newrestaurant) => {
    
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      await axios.post(`${url}`,newrestaurant);
      return newrestaurant;
    } catch (error) {
      return error.message;
    }
  });
  const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: [], 
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchrestaurants.fulfilled, (state, action) => {
        return action.payload;
      });
      builder.addCase(addrestaurant.fulfilled, (state, action) => {
        state.push(action.payload);
      });
    },
  });

export const { setRestaurants } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;