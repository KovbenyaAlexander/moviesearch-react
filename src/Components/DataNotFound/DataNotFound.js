import React from "react";
import classes from "./DataNotFound.module.css";
function DataNotFound() {
  return (
    <div className={classes["message-container"]}>
      <p className="flow-text">Data not found</p>
    </div>
  );
}

export default DataNotFound;
