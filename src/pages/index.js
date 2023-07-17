import React from "react";
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

export default function Home() {
  const [showCatalogue, setShowCatalogue] = React.useState(false);

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
 font-black text-[#09433E] p-4 md:p-10 text-3xl md:text-5xl"
        >
          MERCHANDISING PERSONALIZADO PARA POTENCIAR TU MARCA
        </h1>

        <Productos />
        <section
          className="md:w-[80%] md:m-auto  my-10  relative"
          id="catalogues"
        >
          <h2 className="text-black text-lg py-3 pl-4 lg:pl-0">
            DESCARGÁ NUESTROS CATÁLOGOS
          </h2>
          <hr className="w-28 border border-primary ml-4 lg:ml-0" />
          <div className="hidden md:block">
            <CardSwiper
              openCatalogue={handleOpenCatalogue}
              vertical={true}
              swiperClass="catalogues"
              length={2.7}
              height="800px"
            />
          </div>
          <div className="md:hidden">
            <CardSwiper
              openCatalogue={handleOpenCatalogue}
              vertical={false}
              swiperClass="catalogues"
              length={2}
            />
          </div>
          <div
            style={{
              boxShadow: "1px -65px 48px -31px rgba(255,255,255,0.75) inset",
            }}
            className="w-full h-28 absolute bottom-0 z-10 hidden md:block"
          ></div>
          {showCatalogue && (
            <div className="absolute w-full h-full flex items-center justify-center top-0 z-10">
              <CardOpenCatalogue closeCatalogue={handleOpenCatalogue} />
            </div>
          )}
        </section>
        {/*<Categories />*/}
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
