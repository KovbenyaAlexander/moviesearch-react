import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/swiper-bundle.css";
import { connect } from "react-redux";
import SwiperItem from "./SwiperItem/SwiperItem";
import "./Swiper.css";
import "semantic-ui-css/semantic.min.css";
import { Loader } from "semantic-ui-react";
import DataNotFound from "../DataNotFound/DataNotFound";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

function Slider({ data, isLoading }) {
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
      return null;
    });
  }

  return (
    <>
      {isLoading ? <Loader active inline="centered" /> : null}

      {SwiperSlides.length === 0 && !isLoading ? <DataNotFound /> : null}

      {SwiperSlides.length !== 0 ? (
        <Swiper
          spaceBetween={50}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            500: {
              slidesPerView: 1,
            },

            1000: {
              slidesPerView: 2,
            },

            1200: {
              slidesPerView: 3,
            },
            1300: {
              slidesPerView: 4,
            },
          }}
        >
          {SwiperSlides}
        </Swiper>
      ) : null}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps)(Slider);
