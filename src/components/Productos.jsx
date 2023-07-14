import React from "react";
import { FaArrowRight } from "react-icons/fa";
import CardSwiper from "./Swiper";
import Link from "next/link";

const Productos = () => {
  return (
    <>
     
        <div className="flex justify-between items-center">
          <div className="md:ml">
            <h2 className="text-black text-lg py-3 pl-4 lg:pl-0">
              PRODUCTOS DESTACADOS{" "}
            </h2>
            <hr className="w-28 border border-primary ml-4  lg:ml-0" />
          </div>
          <div>
            <Link href="/store">
            <h2 className="text-black text-lg font-bold items-center gap-5 hidden md:flex mr-2">
              Ver más productos <FaArrowRight />
            </h2>
            </Link>
          </div>
        </div>

        <CardSwiper vertical={false} swiperClass="products" length={2.3}/>
        <h2 className="md:hidden text-right text-black text-lg font-bold flex items-center justify-end gap-5 mr-2">
          Ver más productos <FaArrowRight />
        </h2>
      
    </>
  );
};

export default Productos;
