import { SET_DATA, CHANGE_SEARCH_TEXT } from "./actions/actionsTypes";

const initialState = {
  searchText: ``,
  data: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };
    case CHANGE_SEARCH_TEXT:
      return { ...state, searchText: action.payload };
    default:
      return state;
  }
}
