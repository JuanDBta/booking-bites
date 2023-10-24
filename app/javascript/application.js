// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'
import Main from './components/Main';
import NavBar from './components/NavBar';
import SectionDetail from './components/Detail';
import SectionNew from './components/SectionNew';
import ReservationNew from './components/ReservationNew';
import Reservations from './components/Reservations';
import { FaTwitter } from 'react-icons/fa';
import { ImFacebook } from 'react-icons/im';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { BsVimeo } from 'react-icons/bs';
import { FaPinterestP } from 'react-icons/fa';
import '../assets/stylesheets/application.css'

function App() {
  return (
    <>
      <header className="app-header">
        <div className="logo-title">
          <h1 className="title-header">BookingBites</h1>
          <NavBar className="bar" />
        </div>
        
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="twitter-icon" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <ImFacebook className="facebook-icon" />
          </a>
          <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer">
            <TiSocialGooglePlus className="google-icon" />
          </a>
          <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer">
            <BsVimeo className="v-icon" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <FaPinterestP className="pinterest-icon" />
          </a>
        </div>

      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sections/:id" element={<SectionDetail />} />
        <Route path="/sections/new" element={<SectionNew />} />
        <Route path="/reservations/new" element={<ReservationNew />} />
        <Route path="/my" element={<Reservations />} />
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