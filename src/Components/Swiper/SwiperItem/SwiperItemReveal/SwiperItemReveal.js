import React from "react";
import classes from "./SwiperItemReveal.module.css";

function SwiperItemReveal({ data }) {
  return (
    <div className={`card-reveal ${classes["swiper__card-reveal"]}`}>
      <span className="card-title grey-text text-darken-4">
        <br />
        <p className={`${classes["reveal-title"]}`}>
          {data.title ? data.title : "Name not found"}
        </p>
        <i className={`material-icons right ${classes["close-reveal"]}`}>
          close
        </i>
      </span>
      <p className={`${classes["reveal-overview"]}`}>
        <br />
        {data.overview ? data.overview : "N/A"}
      </p>
    </div>
  );
}

export default SwiperItemReveal;
