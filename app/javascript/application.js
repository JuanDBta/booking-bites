// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import store from './redux/store'
import { fetchUser } from './redux/features/users/usersSlice';
import Main from './components/Main';
import NavBar from './components/NavBar';
import SectionDetail from './components/Detail';
import SectionNew from './components/SectionNew';
import ReservationNew from './components/ReservationNew';
import ReservationCreate from './components/ReservationCreate';
import Reservations from './components/Reservations';
import CreateRestaurantForm from './components/CreateRestaurantForm';
import Delete from './components/Delete';
import RegisterUser from './components/RegisterUser';
import Login from './components/Login';
import '../assets/stylesheets/application.css'

function App() {
  /*const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
    const username = JSON.parse(localStorage.getItem('username'));
    if (username) {
      dispatch(fetchUser(username));
    }
  }, [dispatch]);*/
  return (
    <>
          <NavBar className="bar" />
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sections/:id" element={<SectionDetail />} />
        <Route path="/sections/new" element={<SectionNew />} />
        <Route path="/reservations/new" element={<ReservationNew />} />
        <Route path="/my" element={<Reservations />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/section/reserve/:section_id"element={<ReservationCreate />} />
        <Route path="/restaurant/new" element={<CreateRestaurantForm/>}/>
        <Route path="/register" element={<RegisterUser/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
  }
  
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
       <App />
     </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);