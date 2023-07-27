import React from "react";
import { FaArrowRight } from "react-icons/fa";
import CardSwiper from "./Swiper";
import Link from "next/link";
import {MdOutlineSwipe} from 'react-icons/md'

const Productos = () => {
  return (
    <>
     
        <div className="flex justify-between items-center" id="productos">
          <div className="md:ml-24">
            <h2 className="text-black  flex gap-3 items-center text-lg py-3 pl-4 lg:pl-0">
              PRODUCTOS DESTACADOS{" "} <MdOutlineSwipe className=" animate-infinite animate-duration-1000 animate-wiggle-more" />
            </h2>
            <hr className="w-28 border border-primary ml-4  lg:ml-0" />
          </div>

          <div>
            <Link href="/store">
            <h2 className="text-black text-lg font-light items-center gap-5 hidden md:flex mr-2">
              Ver más productos <FaArrowRight />
            </h2>
            </Link>
          </div>
        </div>

        <CardSwiper autoplay={true} vertical={false} swiperClass="products" length={2.3}/>
        <Link href='/store'>
        <h2 className="md:hidden text-right text-black  text-lg font-light flex items-center justify-end gap-5 mr-2">
          Ver más productos <FaArrowRight />
        </h2>
        </Link>
      
    </>
  );
};

export default Productos;
