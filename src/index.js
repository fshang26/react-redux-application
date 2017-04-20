// Application's entry point: index.js->routes.js->App.js
// eslint purpose see configureStore.js
/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore.dev';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseActions'; // called a named import
import {loadAuthors} from './actions/authorActions';
import {loadHTabSites} from './actions/htabsitesActions';
//import './styles/sample.css'; // Webpack can import CSS files too!
import './styles/smarticons.css'; // Webpack can import CSS files too!
import './styles/styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

// When would you pass initial state to this configureStore call? If you're wanting to rehydrate your store using some separate state that's pased down from the server or stored in local storage, then this is a good place to do so.
const store = configureStore();
store.dispatch(loadHTabSites());
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);

