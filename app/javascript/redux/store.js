import { configureStore } from '@reduxjs/toolkit';
import sectionsReducer from './features/sections/sectionsSlice';

const store = configureStore({
  reducer: {
    sections: sectionsReducer,
  },
});

export default store;
