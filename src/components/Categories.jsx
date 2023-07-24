import React from "react";
import { FaArrowRight } from "react-icons/fa";
import CardSwiper from "./Swiper";

const Categories = () => {

  return (
    <>
      <div className="flex py-10 justify-between items-center">
        <div className="md:ml-24">
          <h2 className="text-black text-lg py-3 pl-4 lg:pl-0">CATEGORÍAS </h2>
          <hr className="w-28 border border-primary ml-4 lg:ml-0" />
        </div>
        <div>
          <h2 className="text-black text-lg font-light items-center gap-5 hidden md:flex mr-2">
            Ver todo en Categorías <FaArrowRight />
          </h2>
        </div>
      </div>

      <CardSwiper vertical={false} swiperClass="categories" length={4.6} link/>
      <h2 className="md:hidden text-right text-black text-lg font-bold flex items-center justify-end gap-5 mr-2">
        Ver todo en Categorías <FaArrowRight />
      </h2>
    </>
  );
};

export default Categories;
