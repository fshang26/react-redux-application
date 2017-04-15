// traditionally the rootReducer is called index.js
import {combineReducers} from 'redux';
import courses from './courseReducer'; // alias for accessing state.courses (property name) purpose

const rootReducer = combineReducers({
  courses // ES6 shorthand property name for courses: courses
});

export default rootReducer;
