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
import { MdOutlineSwipeVertical } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import Newlester from "../components/Newlester";
import { FaStar } from "react-icons/fa";

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
  const stars = Array(5)
    .fill(0)
    .map((_, index) => <FaStar key={index} className="text-yellow-400" />);

  return (
    <Layout>
      <div className=" block fixed right-9 bottom-9 z-10">
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
          <h3 className="text-primary font-black text-xl text-center md:text-4xl ">
            ¡Suscribite a Nuestro Newsletter!
          </h3>

          <Newlester />
          <p className="text-primary font-light text-center text-lg ">
            accede a las últimas noticias, ofertas exclusivas y contenido
            fascinante sobre merchandising personalizado
          </p>
        </section>
        <div className=" text-white py-12">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-8">
            <div className="md:flex-1">
              <img
                src="../assets/clientes.png" // Asegúrate de reemplazar esto con la ruta correcta de la imagen
                alt="Logotipo de Los Pinos Lubricantes SRL"
                className="max-w-xs md:max-w-sm mx-auto mb-6 md:mb-0"
              />
            </div>
            <div className="bg-primary p-6 rounded-lg shadow-lg md:flex-1">
              <h3 className="text-2xl font-semibold mb-4">Judit Torrilla</h3>
              <p className="mb-2 font-bold">
                <span className="font-light">Empresa:</span> Los Pinos
                Lubricantes SRL
              </p>
              <div className="flex items-center mb-4">
                <strong>Nivel de satisfacción: 5/5 </strong>
                <div className="flex ml-2">{stars}</div>
              </div>
              <p className="mb-4">
                <strong>Comentarios:</strong> "Las mochilas industriales son un
                excelente producto, y el trabajo en logos es muy prolijo. El
                asesoramiento de diseño prestando atención a ciertos 'detalles'
                fue muy valioso."
              </p>
              <p className="mb-2">
                <strong>Planes Futuros:</strong> "Estamos planeando promociones
                especiales para el día de la madre, productos para el verano, y
                regalos corporativos para la fiesta de fin de año."
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 bg-gray-100 py-10">
          <p className="text-black font-light text-4xl"> Agenda una llamada</p>

          <p className=" text-primary text-center text-lg  px-3 md:px-20 font-ligth">
            {" "}
            Queremos conocer tu proyecto y entender tus objetivos. <br /> Agenda
            una llamada con nosotros y descubre cómo podemos colaborar para
            alcanzar tus metas de merchandising de manera óptima.
          </p>
          <a
            className="py-4 px-5 rounded-2xl bg-primary text-white font-light text-xl shadow-lg "
            href="https://calendly.com/twenty-merch/twenty-merchandising"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agenda Una Meet
          </a>
        </div>
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
        <div className="bg-white text-center my-20 text-black p-4 ">
          <RiTeamLine className="text-8xl text-center m-auto text-primary" />
          <h6 className="text-3xl font-bold text-primary">
            Quieres ser parte del equipo Twenty?
          </h6>
          <p className="text-xl text-light mt-2">
            Envíanos tu CV a nuestro mail!
          </p>
          <div className="rounded-full mt-2  text-center inline-block m-auto bg-primary p-2">
              <Link  href="mailto: info@twenty.com.ar?subject=Quiero sumarme al equipo">
                <AiOutlineMail size={32} color="white" />
              </Link>
            </div>
        </div>
      </main>
    </Layout>
  );
}
