import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function htabsitesReducer(state = initialState.sites, action) {
  switch (action.type) {
    case types.LOAD_HTABSITES_SUCCESS:
      return action.sites;
    default:
      return state;
  }
}
