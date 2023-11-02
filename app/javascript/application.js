// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'
import Main from './components/Main';
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

const SplashPage = () => {
  return (
    <div className='splash_container'>
       <div className='splash_content'>
       <h1 className="splash_title">BookingBites</h1>
       <p>Where Ambience Meets Appetite for Extraordinary Dining Experiences!</p>
      <div className='splash_btn'>
        <button className="splash-button"><Link to="/login">Log In</Link></button>
        <button className="splash-button"><Link to="/register">Sign Up</Link></button>
      </div>
      </div>
    </div>
    
  );
}

const App = () => {
  return (
    <>
          
      
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/home" element={<Main />} />
        <Route path="/sections/:id" element={<SectionDetail />} />
        <Route path="/sections/new" element={<SectionNew />} />
        <Route path="/reservations/new" element={<ReservationNew />} />
        <Route path="/my" element={<Reservations />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/section/reserve/:section_id"element={<ReservationCreate />} />
        <Route path="/restaurant/new" element={<CreateRestaurantForm/>}/>
      </Routes>
    </>
  );
  }
  
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route
          path="/*"
          element={
            <>
              <App />
            </>
          }
        />
      </Routes>
     </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);