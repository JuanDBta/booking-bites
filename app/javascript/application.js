// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'
import Main from './components/Main';


ReactDOM.render(
  <Provider store={store}>
  <Main/>
  </Provider>,
  document.getElementById('root'),
);