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
import '../assets/stylesheets/application.css'

function App() {
    return (
      <>
        <header className="app-header">
          <div className="logo-title">
            <img src="/reservations.png" className="App-logo" alt="logo" />
            <h1 className="title-header">BookingBites</h1>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Main />} />
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