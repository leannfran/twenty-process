import React, { useState } from "react";
import CarouselHero from "../components/Carousel";
import CardSwiper from "../components/Swiper";
import CardOpenCatalogue from "../components/cards/CardOpenCatalogue";
import Aptitudes from "../components/Aptitudes";
import Nosotros from "../components/Nosotros";
import Productos from "../components/Productos";
import Categories from "../components/Categories";
import ContactForm from "../components/ContactForm";
import SpeedDial from "../components/SpeedDial";
import { Layout } from "@/components/layout/Layout";
import {MdOutlineSwipeVertical} from "react-icons/md"
import { Popover, PopoverContent, PopoverHandler } from "@material-tailwind/react";
import Newlester from "../components/Newlester";
export default function Home() {
  
  const [showCatalogue, setShowCatalogue] = React.useState(false);
  const [openPopover, setOpenPopover] = useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  function handleOpenCatalogue(open) {
    open ? setShowCatalogue(true) : setShowCatalogue(false);
  }

  return (
    <Layout>
      <div className="hidden md:block fixed right-9 bottom-9 z-10">
        <SpeedDial />
      </div>

      <header>
        <CarouselHero />
      </header>
      <main className=" m-auto py-2">
        <h1
          className=" animate-fade
 font-light text-gray-900 text-center p-4 md:p-10 text-xl md:text-4xl"
        >
          <span className="font-semibold text-primary">MERCHANDISING </span>{" "}
          PERSONALIZADO PARA{" "}
          <span className="font-semibold text-primary">POTENCIAR </span> TU
          MARCA
        </h1>

        <Productos />
        <Categories />
        <section
          className="md:w-[80%] md:m-auto mt-28 my-10  relative"
          id="catalogues"
        >
          <h2 className="text-black flex gap-4 text-lg py-3 pl-4 lg:pl-0">
            DESCARGÁ NUESTROS CATÁLOGOS
            <Popover
              placement="right-end"
              open={openPopover}
              handler={setOpenPopover}
            >
              <PopoverHandler {...triggers}>
                <span>
                  <MdOutlineSwipeVertical className=" animate-wiggle-more animate-infinite cursor-help" />
                </span>
              </PopoverHandler>
              <PopoverContent {...triggers}>
                <span>Desliza de arriba hacia abajo.</span>
              </PopoverContent>
            </Popover>
          </h2>
          <hr className="w-28 border border-primary ml-4 lg:ml-0" />

          <div className="">
            <CardSwiper
              openCatalogue={handleOpenCatalogue}
              vertical={false}
              navigation
              swiperClass="catalogues"
              length={2}
            />
          </div>
          <div
            style={{
              boxShadow: "1px -65px 48px -31px rgba(255,255,255,0.75) inset",
            }}
            className="h-28 absolute bottom-0 z-10  md:block"
          ></div>
          {showCatalogue && (
            <div className="absolute w-full h-full flex items-center justify-center top-0 z-10">
              <CardOpenCatalogue closeCatalogue={handleOpenCatalogue} />
            </div>
          )}
        </section>
        <section className="flex flex-col items-center py-20 gap-4">
            <h3 className="text-primary font-black text-xl text-center md:text-4xl ">¡Suscribite a Nuestro Newsletter!</h3>

              <Newlester/>
            <p className="text-primary font-light text-center text-lg ">accede a las últimas noticias, ofertas exclusivas y contenido fascinante sobre merchandising personalizado</p>

        </section>

        <Nosotros />
        <Aptitudes />

        {/*<section className=" max-w-[1000px]  m-auto">
          <h2 className="text-black text-lg py-3 pl-4 lg:pl-0">
            ALIANZAS DE ÉXITO CON MARCAS LÍDERES
          </h2>
          <hr className="w-28 border border-primary ml-4 lg:ml-0" />
          <CardSwiper autoplay={true} swiperClass="logos" length={4} />
        </section>*/}

        <ContactForm />
      </main>
    </Layout>
  );
}
