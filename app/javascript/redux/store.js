import { configureStore } from '@reduxjs/toolkit';
import sectionsReducer from './features/sections/sectionsSlice';
import reservationSlice from'./features/reservations/reservationSlice'; 
const store = configureStore({
  reducer: {
    sections: sectionsReducer,
    reservations: reservationSlice
  },
});

export default store;
