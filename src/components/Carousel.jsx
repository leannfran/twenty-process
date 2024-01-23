import { Carousel } from "@material-tailwind/react";
import carouselImg from "../../public/assets/9.png";
import carouselFirst from "../../public/assets/7.png";
import carouselSecond from "../../public/assets/8.png";
import carouselNavidad from "../../public/assets/11.png";


import Image from "next/image";
import SpeedDial from "./SpeedDial";

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function CarouselHero() {
  return (
    <div className="relative ">
       <Swiper  
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper text-black"

      >
        
        <SwiperSlide>  <Image
          src={carouselFirst}
          alt="image portada"
          className="h-full w-full object-cover"
          priority
        /></SwiperSlide>
        <SwiperSlide> <Image
          src={carouselSecond}
          alt="image 2"
          className="h-full w-full object-cover"
          priority
        /></SwiperSlide>
        <SwiperSlide> <Image
          src={carouselImg}
          alt="image 3"
          className="h-full w-full object-cover"
          priority
        /></SwiperSlide>
        
      </Swiper>
    
      
      {/*<Carousel transition={{ duration: 1 }} className="h-56 bg-gradient-to-t from-primary md:h-96">
        <Image
          src={carouselFirst}
          alt="image 1"
          className="h-full w-full object-cover"
          priority
        />
        <Image
          src={carouselSecond}
          alt="image 2"
          className="h-full w-full object-cover"
          priority
        />
        <Image
          src={carouselImg}
          alt="image 3"
          className="h-full w-full object-cover"
          priority
        />
  </Carousel>*/}
      <h1 className="hidden  absolute bottom-10 left-5 font-black text-[#09433E] text-xl md:text-5xl">
        MERCHANDISING PERSONALIZADO PARA POTENCIAR TU MARCA
        </h1>
      <div className="absolute right-5 bottom-5 md:hidden">
      <SpeedDial/>

      </div>
    </div>
  );
}


