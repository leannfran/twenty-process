import React from "react";
import Head from "next/head";
import CarouselHero from "../components/Carousel";
import NavBar from "../components/navbar/NavBar";
import CardSwiper from "../components/Swiper";
import CardOpenCatalogue from "../components/cards/CardOpenCatalogue";
import Aptitudes from "../components/Aptitudes";
import Nosotros from "../components/Nosotros";
import Footer from "../components/Footer";
import Productos from "../components/Productos";
import Categories from "../components/Categories";
import ContactForm from "../components/ContactForm";
import SpeedDial from "../components/SpeedDial";

export default function Home() {
  const [showCatalogue, setShowCatalogue] = React.useState(false);

  function handleOpenCatalogue(open) {
    open ? setShowCatalogue(true) : setShowCatalogue(false);
  }

  return (
    <div className="bg-white">
      <Head>
        <title>Twenty | Página de inicio</title>
        <link rel="icon" href="./public/logo.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
       { <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>}
      </Head>

      <div className="hidden md:block fixed right-9 bottom-9 z-10">
        <SpeedDial />
      </div>

      <header className="relative">
        <NavBar />

        <CarouselHero />
        
      </header>
      <main className=" m-auto py-2">
      <h1 className=" animate-fade
 font-black text-[#09433E] p-4 md:p-10 text-3xl md:text-5xl">
        MERCHANDISING PERSONALIZADO PARA POTENCIAR TU MARCA
        </h1>
        <Productos />
        <Categories />

        <Nosotros />
        <Aptitudes />
        <section className="md:w-[80%] md:m-auto  my-10  relative">
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
            style={{ boxShadow: "1px -65px 48px -31px rgba(0,0,0,0.75) inset" }}
            className="w-full h-28 absolute bottom-0 z-10 hidden md:block"
          ></div>
          {showCatalogue && (
            <div className="absolute w-full h-full flex items-center justify-center top-0 z-10">
              <CardOpenCatalogue closeCatalogue={handleOpenCatalogue} />
            </div>
          )}
        </section>

        <section className=" max-w-[1000px]  m-auto">
          <h2 className="text-black text-lg py-3 pl-4 lg:pl-0">
            ALIANZAS DE ÉXITO CON MARCAS LÍDERES
          </h2>
          <hr className="w-28 border border-primary ml-4 lg:ml-0" />
          <CardSwiper autoplay={true} swiperClass="logos" length={4} />
        </section>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
