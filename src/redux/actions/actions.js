import {
  SET_DATA,
  CHANGE_SEARCH_TEXT,
  SET_LOADING_STATUS,
} from "./actionsTypes";

export function set_data(data) {
  return {
    type: SET_DATA,
    payload: data,
  };
}

export function changeSearchText(text) {
  return {
    type: CHANGE_SEARCH_TEXT,
    payload: text,
  };
}

export function setLoadingStatus(status) {
  return {
    type: SET_LOADING_STATUS,
    payload: status,
  };
}
