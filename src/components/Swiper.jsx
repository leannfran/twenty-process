// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardCatalogue from "./cards/CardCatalogue";


export default function CardSwiper({ openCatalogue}) {

  const cataloguesTest = 7;

  return (
    <Swiper
      className="mySwiper my-12"
      direction="vertical"
      slidesPerView={2.7}
      pagination={{ clickable: true }}
      loop={true}
      mousewheel={true}
    >
      {[...Array(cataloguesTest)].map((e, i) => (
          <SwiperSlide key={i}>
          <CardCatalogue openCatalogue={openCatalogue}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
