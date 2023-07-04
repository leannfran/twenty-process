import React from "react";
import Head from "next/head";
import CarouselHero from "@/components/Carousel";
import NavBar from "@/components/navbar/NavBar";
import CardSwiper from "@/components/Swiper";
import CardOpenCatalogue from "@/components/cards/CardOpenCatalogue";
import Aptitudes from "../components/Aptitudes";
import Productos from "../components/Productos";
import Categories from "../components/Categories";
import {
  BsWhatsapp,
} from "react-icons/bs";
import Nosotros from "../components/Nosotros";


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
      </Head>
      <header>
        <NavBar />
        <CarouselHero />
      </header>
      <main className="max-w-[1000px] m-auto py-20">

        <Productos/>
        <Categories/>

        <Nosotros/>
        <Aptitudes/>
        <section className="w-full my-10  relative">
          <h2 className="text-black text-lg py-3">
            DESCARGÁ NUESTROS CATÁLOGOS
          </h2>
          <hr className="w-1/4 border border-primary" />
          <CardSwiper openCatalogue={handleOpenCatalogue} />
          <div
            style={{ boxShadow: "1px -65px 48px -31px rgba(0,0,0,0.75) inset" }}
            className="w-full h-28 absolute bottom-0 z-10"
          ></div>
          {showCatalogue && (
            <div className="absolute w-full h-full flex items-center justify-center top-0 z-10">
              <CardOpenCatalogue closeCatalogue={handleOpenCatalogue} />
            </div>
          )}
        </section>
      
    </main>

      <footer className="bg-primary py-4 h-[10vh] text-white text-center">
        &copy; {new Date().getFullYear()} Twenty. Todos los derechos reservados.
      </footer>
    </div>
  );
}
