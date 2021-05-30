import {
  SET_DATA,
  CHANGE_SEARCH_TEXT,
  SET_LOADING_STATUS,
} from "./actions/actionsTypes";

let lastRequest = "";

if (JSON.parse(localStorage.getItem("lastRequest"))) {
  lastRequest = JSON.parse(localStorage.getItem("lastRequest"));
}

const initialState = {
  searchText: lastRequest,
  data: null,
  isLoading: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };
    case CHANGE_SEARCH_TEXT:
      localStorage.setItem("lastRequest", JSON.stringify(action.payload));
      return { ...state, searchText: action.payload };
    case SET_LOADING_STATUS:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
