import { configureStore } from '@reduxjs/toolkit';
import sectionsReducer from './features/sections/sectionsSlice';
import reservationSlice from'./features/reservations/reservationSlice'; 
import restaurantSlicer from './features/restaurants/restaurantSlicer';
const store = configureStore({
  reducer: {
    sections: sectionsReducer,
    reservations: reservationSlice,
    restaurants: restaurantSlicer
  },
});

export default store;
