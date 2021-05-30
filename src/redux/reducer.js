import {
  SET_DATA,
  CHANGE_SEARCH_TEXT,
  SET_LOADING_STATUS,
} from "./actions/actionsTypes";

const initialState = {
  searchText: ``,
  data: null,
  isLoading: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };
    case CHANGE_SEARCH_TEXT:
      return { ...state, searchText: action.payload };
    case SET_LOADING_STATUS:
      console.log(action.payload);

      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
