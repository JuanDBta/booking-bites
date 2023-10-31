import { configureStore } from '@reduxjs/toolkit';
import sectionsReducer from './features/sections/sectionsSlice';
import reservationSlice from'./features/reservations/reservationSlice'; 
import restaurantSlicer from './features/restaurants/restaurantSlicer';
import reservationsApiReducer from './features/reservations/reservationsApiSlice';
import userReducer from './features/users/usersSlice';

const store = configureStore({
  reducer: {
    sections: sectionsReducer,
    reservations: reservationSlice,
    restaurants: restaurantSlicer,
    reservationsApi: reservationsApiReducer,
    users: userReducer
  },
});

export default store;
