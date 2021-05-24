import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/swiper-bundle.css";
import { connect } from "react-redux";
import SwiperItem from "./SwiperItem/SwiperItem";
import "./Swiper.css";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

function Slider({ data }) {
  let SwiperSlides = [];
  if (data) {
    SwiperSlides = data.map((item, i) => {
      if (item.backdrop_path) {
        return (
          <SwiperSlide key={i}>
            <SwiperItem data={item} />
          </SwiperSlide>
        );
      }
      return undefined;
    });
  }

  return (
    <Swiper
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      breakpoints={{
        500: {
          width: 500,
          slidesPerView: 1,
        },
        600: {
          width: 600,
          slidesPerView: 2,
        },
        800: {
          width: 800,
          slidesPerView: 3,
        },
        1200: {
          width: 1000,
          slidesPerView: 4,
        },
      }}
    >
      {SwiperSlides.length !== 0 ? SwiperSlides : "Loading..."}
    </Swiper>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(Slider);
