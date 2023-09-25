import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import CardSwiper from "./Swiper";
import Link from "next/link";
import {MdOutlineSwipe} from 'react-icons/md'
import { Popover, PopoverContent, PopoverHandler } from "@material-tailwind/react";

const Productos = () => {

  const [openPopover, setOpenPopover] = useState(false)

  const triggers = {

    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),

  };


  return (
    <>
     
        <div className="flex justify-between items-center" id="productos">
          <div className="md:ml-24">
            <h2 className="text-black  flex gap-3 items-center text-lg py-3 pl-4 lg:pl-0">
              PRODUCTOS DESTACADOS{" "}
  

            <Popover
              placement="right-end"
              open={openPopover}
              handler={setOpenPopover}
            >
              <PopoverHandler {...triggers}>
                <span>
                  <MdOutlineSwipe className=" animate-infinite animate-duration-1000 animate-wiggle-more cursor-help" />
                </span>
              </PopoverHandler>
              <PopoverContent {...triggers}>
                <span>Desliza de izquierda a derecha.</span>
              </PopoverContent>
            </Popover>

            </h2>

            <hr className="w-28 border border-primary ml-4  lg:ml-0" />
           <p className="text-black">
             Estamos Actualizando Nuestros productos, Contactenos por WhatsApp tocando <a   className=" font-bold  overline text-primary"        href="https://api.whatsapp.com/send?phone=5491178311503&text=%C2%A1Hola!,%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20que%20ofrece%20Twenty,%20%C2%BFPodr%C3%ADan%20proporcionarme%20m%C3%A1s%20informaci%C3%B3n%20y%20precios?%20%C2%A1Gracias!%20%F0%9F%98%80"
>Aca</a>
             </p> 
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
