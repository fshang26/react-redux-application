// traditionally the rootReducer is called index.js
import {combineReducers} from 'redux';
import courses from './courseReducer'; // alias for accessing state.courses (property name) purpose
import authors from './authorReducer';
import htabsites from './htabsitesReducer';
import ajaxCallInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses, // ES6 shorthand property name for courses: courses
  authors,
  htabsites,
  ajaxCallInProgress
});

export default rootReducer;
