import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/restaurants';
const sections= 'sections'

export const fetchSections = createAsyncThunk('data/fetchSections', async () => {
    try {
      const response = await fetch('http://localhost:3000/api/sections');
      if (!response.ok) {
        throw new Error('Error fetching data from the API');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching data from the API');
    }
  });
  export const addSection = createAsyncThunk('sections/addSection', async (newsection) => {
    
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      await axios.post(`${url}/${newsection.restaurant_id}/${sections}`,newsection);
      return newsection;
    } catch (error) {
      return error.message;
    }
  });
  const sectionsSlice = createSlice({
    name: 'sections',
    initialState: [], 
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchSections.fulfilled, (state, action) => {
        return action.payload;
      });
      builder.addCase(addSection.fulfilled, (state, action) => {
        state.sections.push(action.payload);
      });
    },
  });

export const { setSections } = sectionsSlice.actions;
export default sectionsSlice.reducer;