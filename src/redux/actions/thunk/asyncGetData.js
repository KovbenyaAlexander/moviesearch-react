import axios from "axios";
import { set_data, setLoadingStatus } from "../actions";

const asyncGetData = (textForSearch) => {
  if (!textForSearch) {
    textForSearch = `Pirates`;
  }
  const URL = `https://api.themoviedb.org/3/search/multi?api_key=888e6f69f5b71f4265688d6b69d2a141&language=en&query=${textForSearch}`;

  return (dispatch) => {
    dispatch(setLoadingStatus(true));
    axios.get(URL).then((resp) => {
      dispatch(set_data(resp.data.results));
      dispatch(setLoadingStatus(false));
    });
  };
};

export default asyncGetData;
