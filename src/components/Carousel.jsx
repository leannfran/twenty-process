import { Carousel } from "@material-tailwind/react";
import carouselImg from "../../public/assets/carousel-img.png";
import carouselFirst from "../../public/assets/carouselFirst.png";
import carouselSecond from "../../public/assets/carouselSecond.png";

import Image from "next/image";

export default function CarouselHero() {
  return (
    <div className="relative">
      <Carousel transition={{ duration: 1 }} className="h-56 md:h-96">
        <Image
          src={carouselFirst}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <Image
          src={carouselSecond}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <Image
          src={carouselImg}
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
      <h1 className="absolute bottom-10 left-5 font-bold text-[#09433E] text-xl md:text-4xl">
        Merchandising personalizado para potenciar tu marca
      </h1>
    </div>
  );
}
