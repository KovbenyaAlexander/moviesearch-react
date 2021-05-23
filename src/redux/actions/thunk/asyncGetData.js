import axios from "axios";
import { set_data } from "../actions";

const asyncGetData = (textForSearch) => {
  if (!textForSearch) {
    textForSearch = `Avengers`;
  }
  const URL = `https://api.themoviedb.org/3/search/multi?api_key=888e6f69f5b71f4265688d6b69d2a141&language=en&query=${textForSearch}`;

  return (dispatch) => {
    axios.get(URL).then((resp) => {
      console.log(resp.data.results);
      dispatch(set_data(resp.data.results));
    });
  };
};

export default asyncGetData;
