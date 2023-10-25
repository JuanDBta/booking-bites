import { configureStore } from '@reduxjs/toolkit';
import sectionsReducer from './features/sections/sectionsSlice';
import reservationSlice from'./features/reservations/reservaionSlicer';
const store = configureStore({
  reducer: {
    sections: sectionsReducer,
    reservations: reservationSlice
  },
});

export default store;
