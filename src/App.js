import Form from "./Components/Form/Form";
import Slider from "./Components/Swiper/Swiper";
import asyncGetData from "./redux/actions/thunk/asyncGetData";
import { connect } from "react-redux";

function App({ getInitDataFromApi }) {
  getInitDataFromApi();

  return (
    <div className="App">
      <Form />
      <Slider />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInitDataFromApi: () => dispatch(asyncGetData()),
  };
};

export default connect(null, mapDispatchToProps)(App);
