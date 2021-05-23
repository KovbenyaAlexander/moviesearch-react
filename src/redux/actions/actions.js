import { SET_DATA, CHANGE_SEARCH_TEXT } from "./actionsTypes";

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
