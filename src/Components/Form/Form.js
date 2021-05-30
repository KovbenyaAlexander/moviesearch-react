import React from "react";
import asyncGetData from "../../redux/actions/thunk/asyncGetData";
import { changeSearchText } from "../../redux/actions/actions";
import { connect } from "react-redux";
import classes from "./Form.module.css";

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
    <>
      <form onSubmit={onSubmitHandler} className={classes["form"]}>
        <div className={`input-field col s12 ${classes["form"]}`}>
          <input
            id="input"
            value={searchText}
            onChange={onChangeHandler}
            type="text"
            className="validate"
          />
          <label htmlFor="input"> Enter movie name:</label>
          <button
            className={`waves-effect btn waves-light btn-small ${classes["button"]}`}
          >
            <i
              className={`material-icons prefix search-icon ${classes["search-icon"]}`}
            >
              search
            </i>
          </button>
        </div>
      </form>
    </>
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
