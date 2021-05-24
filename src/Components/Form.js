import React from "react";
import asyncGetData from "../redux/actions/thunk/asyncGetData";
import { changeSearchText } from "../redux/actions/actions";
import { connect } from "react-redux";

function Form({ asyncGetData, changeSearchText, searchText }) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    asyncGetData(searchText);
  };

  const onChangeHandler = (e) => {
    const searchText = e.target.value;
    changeSearchText(searchText);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>
        Enter movie name:
        <input type="text" value={searchText} onChange={onChangeHandler} />
      </label>
      <input type="submit" value="Search" />
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    asyncGetData: (searchText) => {
      dispatch(asyncGetData(searchText));
    },
    changeSearchText: (text) => {
      dispatch(changeSearchText(text));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
