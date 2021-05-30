import "materialize-css";
import SwiperItemReveal from "./SwiperItemReveal/SwiperItemReveal";
import SwiperItemMainPage from "./SwiperItemMainPage/SwiperItemMainPage";

function SwiperItem({ data }) {
  return (
    <div className="card">
      <SwiperItemMainPage data={data} />
      <SwiperItemReveal data={data} />
    </div>
  );
}

export default SwiperItem;
