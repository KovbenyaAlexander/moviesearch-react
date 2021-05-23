import React from "react";
import asyncGetData from "../redux/actions/thunk/asyncGetData";
import { connect } from "react-redux";

const onChangeHandler = () => {
  console.log(`++`);
};

function Form({ asyncGetData }) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    asyncGetData();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>
        Enter movie name:
        <input type="text" onChange={onChangeHandler} />
      </label>
      <input type="submit" value="Send" />
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    asyncGetData: () => {
      dispatch(asyncGetData());
    },
  };
};
export default connect(null, mapDispatchToProps)(Form);
