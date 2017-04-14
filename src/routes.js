import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursePage'

export default (
  <Route path="/" component={App}> //always load App component, and then nest these other items blow (HomePage, AboutPage), pass them as children based on our routing.
    <IndexRoute component={HomePage}/> // root path for '/'
    <Route path="courses" component={CoursesPage}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);
