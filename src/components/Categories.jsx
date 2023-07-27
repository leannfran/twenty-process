import React from "react";
import { FaArrowRight } from "react-icons/fa";
import CardSwiper from "./Swiper";
import Link from "next/link";
import {MdOutlineSwipe} from 'react-icons/md'

const Categories = () => {

  return (
    <>
      <div className="flex py-10 justify-between items-center">
        <div className="md:ml-24">
          <h2 className="text-black text-lg  flex gap-2 items-center py-3 pl-4 lg:pl-0">CATEGORÍAS <MdOutlineSwipe className=" animate-infinite animate-wiggle-more"/> </h2>
          <hr className="w-28 border border-primary ml-4 lg:ml-0" />
        </div>
        <div>
             <Link href="/store" className="text-black text-lg font-light items-center gap-5 hidden md:flex mr-2">
            Ver todo en Categorías <FaArrowRight />
          </Link>
        </div>
      </div>

      <CardSwiper autoplay={true} vertical={false} swiperClass="categories" length={7} link/>
      <Link href="/store" className="md:hidden text-right text-black text-lg font-bold flex items-center justify-end gap-5 mr-2">
        Ver todo en Categorías <FaArrowRight />
      </Link>
    </>
  );
};

export default Categories;
