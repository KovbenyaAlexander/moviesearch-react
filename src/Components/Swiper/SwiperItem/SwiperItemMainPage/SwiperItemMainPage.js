import classes from "./SwiperItemMainPage.module.css";
import starIcon from "../../../../assets/img/star.svg";

function SwiperItemMainPage({ data }) {
  const posterURL = "https://image.tmdb.org/t/p/w500";

  let movieTitle = data.title;
  if (data.title && data.title.length > 50) {
    movieTitle = `${data.title.slice(0, 50)}...`;
  }
  return (
    <>
      <div className="card-image waves-effect waves-block waves-light">
        {data.poster_path ? (
          <img
            className="activator"
            src={`${posterURL}${data.poster_path}`}
            alt="img"
          />
        ) : null}
      </div>
      <div
        className={`${classes["card-content__header"]} activator card-title`}
      >
        {data.release_date ? (
          <span>{data.release_date.slice(0, 4)}</span>
        ) : (
          "N/A"
        )}
        <div>
          <img className={classes["icon"]} src={starIcon} alt="icon" />
          {data.vote_average ? data.vote_average : "N/A"}
        </div>
        <i className={`material-icons right ${classes["add-info-icon"]}`}>
          more_vert
        </i>
      </div>
      <div className="card-content">
        <span
          className={`card-title activator grey-text text-darken-4 ${classes["movie-title"]}`}
        >
          {movieTitle ? movieTitle : "Name not found"}
        </span>
      </div>
    </>
  );
}

export default SwiperItemMainPage;
