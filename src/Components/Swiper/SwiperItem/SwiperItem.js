import classes from "./SwiperItem.module.css";
import "materialize-css";
import Modal from "./Modal/Modal";

function SwiperItem({ data }) {
  const posterURL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator"
          src={`${posterURL}${data.poster_path}`}
          alt="img"
        />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {data.title}
          <i className="material-icons right">more_vert</i>
        </span>
        <p>{/* <a href="#">This is a link</a> */}</p>
      </div>
      <div className={`card-reveal ${classes["swiper__card-reveal"]}`}>
        <span className="card-title grey-text text-darken-4">
          {data.title}
          <i className="material-icons right">close</i>
        </span>
        <p>
          {data.overview}
          {/* <a href="#">This is a link</a> */}
        </p>
        <Modal data={data} />
      </div>
    </div>
  );
}

export default SwiperItem;
