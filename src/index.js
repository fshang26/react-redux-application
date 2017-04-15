// Application's entry point: index.js->routes.js->App.js
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css'; // Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// When would you pass initial state to this configureStore call? If you're wanting to rehydrate your store using some separate state that's pased down from the server or stored in local storage, then this is a good place to do so.
const store = configureStore();

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);

