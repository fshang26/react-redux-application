import * as types from './actionTypes';
import htabsitesApi from '../api/mockHTabApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadHTabSitesSuccess(sites) {
  return {type: types.LOAD_HTABSITES_SUCCESS, sites};
}

export function loadHTabSites() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return htabsitesApi.getAllSitess().then(sites =>{
      dispatch(loadHTabSitesSuccess(sites));
    }).catch(error => {
      throw(error);
    });
  };
}
