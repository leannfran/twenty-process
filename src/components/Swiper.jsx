// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardCatalogue from "./cards/CardCatalogue";
import Image from "next/image";
import brandLogo from "../../public/assets/slazenger-logo.png"


export default function CardSwiper({ openCatalogue , vertical , autoplay , swiperClass , length }) {

  const cataloguesTest = 7;

  return (
    <Swiper
      className={`my-12 ${swiperClass === "catalogues" ? "h-[350px] md:h-[800px]" : "h-[200px]"}`}
      direction={vertical ? "vertical" : "horizontal"}
      pagination={{ clickable: true }}
      loop={true}
      mousewheel={true}
      autoplay={autoplay ? {delay: 3000} : false}
      modules={[Autoplay, Navigation]}
      breakpoints={{
        0: {
          slidesPerView: swiperClass === "catalogues" ? 1.1 : 2
        },
        400: {
          slidesPerView: swiperClass === "catalogues" ? 1.2 : 2
        },
        568: {
          slidesPerView: swiperClass === "catalogues" ? 1.4 : 2
        },
        630: {
          slidesPerView: swiperClass === "catalogues" ? 1.8 : 2
        },
        720: {
          slidesPerView: length,
        },
      }}
    >
      {swiperClass === "catalogues"
    ? [...Array(cataloguesTest)].map((e, i) => (
        <SwiperSlide key={i}>
          <CardCatalogue openCatalogue={openCatalogue} />
        </SwiperSlide>
      ))
    : swiperClass === "logos" ? [...Array(cataloguesTest)].map((e, i) => (
        <SwiperSlide key={i}>
          <div className="px-12 w-30 md:w-60 ">
            <Image src={brandLogo}  alt="logo"/>
          </div>
        </SwiperSlide>
      )) : null}
    </Swiper>
  );
}
