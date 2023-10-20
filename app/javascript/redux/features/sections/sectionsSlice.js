import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSections = createAsyncThunk('data/fetchSections', async () => {
    try {
      const response = await fetch('http://localhost:3000/sections');
      if (!response.ok) {
        throw new Error('Error fetching data from the API');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching data from the API');
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
    },
  });

export const { setSections } = sectionsSlice.actions;
export default sectionsSlice.reducer;
