import { Carousel } from "@material-tailwind/react";
import carouselImg from "../../public/assets/3.png";
import carouselFirst from "../../public/assets/1.png";
import carouselSecond from "../../public/assets/2.png";

import Image from "next/image";
import SpeedDial from "./SpeedDial";

export default function CarouselHero() {
  return (
    <div className="relative ">
      <Carousel transition={{ duration: 1 }} className="h-56 bg-gradient-to-t from-primary md:h-96">
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
      </Carousel>
      <h1 className="hidden  absolute bottom-10 left-5 font-black text-[#09433E] text-xl md:text-5xl">
        MERCHANDISING PERSONALIZADO PARA POTENCIAR TU MARCA
        </h1>
      <div className="absolute right-5 bottom-5 md:hidden">
      <SpeedDial/>

      </div>
    </div>
  );
}
