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
import { FaHandsHelping, FaBullhorn, FaRocket } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {InstagramLogo, FacebookLogo, LinkedinLogo} from '../components/Svgs'
import Image from "next/image";
import schoolBoy from '../../public/assets/AIimages/school-kid.png';
import cheef from '../../public/assets/AIimages/cheef.png';
import oficina from '../../public/assets/AIimages/oficina.png';
import summer from '../../public/assets/AIimages/summer.png';
import textil from '../../public/assets/AIimages/textil.png';
import drinkware from '../../public/assets/AIimages/drinkware.png';
import Entrerprises from "@/components/Entrerprises";


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

      <header>{/*   <CarouselHero />*/}</header>
      <main className="m-auto py-2">
        <div className="flex flex-col md:flex-row p-4 md:p-10  items-start">
          <div className="w-full md:w-1/2 gap-10 md:gap-6 flex flex-col text-center md:text-start">
            <h1 className="animate-fade text-gray-800 font-bold text-4xl md:text-7xl">
              <span className="text-primary">MERCHANDISING </span> PERSONALIZADO
              PARA TU{" "}
              <span className="font-semibold text-primary">EMPRESA</span>
            </h1>
            <p className="text-gray-800">
              Te asesoramos y armamos una propuesta a medida de tu empresa y
              necesidad, déjanos tus datos o envíanos un whatsapp y nos
              pondremos en contacto al instante.
            </p>
            <div className="flex md:justify-start justify-center gap-4">
              <a
                href="#contacto"
                className="bg-primary text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              >
                Contáctanos
              </a>
           
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center  items-start">
            <img
              src="../assets/hero.png"
              alt="Logotipo de Los Pinos Lubricantes SRL"
              className=" w-96"
            />
          </div>
        </div>



        <section className="py-12 ">
          <h1 className="text-gray-800 font-extrabold text-[60px] text-center pb-10">TU MERCH</h1>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <Link
                href="/store?family=125"
                className="bg-white p-0 rounded-2xl shadow-lg overflow-hidden relative h-56 md:h-72 cursor-pointer block"
                aria-label="Ir a Vuelta a Clases"
              >
                <Image
                  src={schoolBoy}
                  alt="chico de guardapolvo"
                  fill
                  className="object-cover"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h2 className="text-white text-3xl md:text-5xl font-bold text-center">
                    VUELTA A CLASES
                  </h2>
                </div>
              </Link>
              

              

              <Link
                href="/store?family=129"
                className="bg-white p-0 rounded-2xl shadow-lg overflow-hidden relative h-56 md:h-72 cursor-pointer block"
                aria-label="Ir a Cocina"
              >
                <Image
                  src={cheef}
                  alt="chico de guardapolvo"
                  fill
                  className="object-cover"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h2 className="text-white text-3xl md:text-5xl font-bold text-center">
                    COCINA
                  </h2>
                </div>
              </Link>


              <Link
                href="/store?family=124"
                className="bg-white p-0 rounded-2xl shadow-lg overflow-hidden relative h-56 md:h-72 cursor-pointer block"
                aria-label="Ir a Summer"
              >
                <Image
                  src={summer}
                  alt="chico de guardapolvo"
                  fill
                  className="object-cover"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h2 className="text-white text-3xl md:text-5xl font-bold text-center">
                    SUMMER
                  </h2>
                </div>
              </Link>

              <Link
                href="/store?family=96"
                className="bg-white p-0 rounded-2xl shadow-lg overflow-hidden relative h-56 md:h-72 cursor-pointer block"
                aria-label="Ir a Nómadas"
              >
                <Image
                  src={drinkware}
                  alt="chico de guardapolvo"
                  fill
                  className="object-cover"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h2 className="text-white text-3xl md:text-5xl font-bold text-center">
                    DRINKWARE
                  </h2>
                </div>
              </Link>

              <Link
                href="/store?family=40"
                className="bg-white p-0 rounded-2xl shadow-lg overflow-hidden relative h-56 md:h-72 cursor-pointer block"
                aria-label="Ir a Nómadas"
              >
                <Image
                  src={oficina}
                  alt="chico de guardapolvo"
                  fill
                  className="object-cover"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h2 className="text-white text-3xl md:text-5xl font-bold text-center">
                    OFICINA
                  </h2>
                </div>
              </Link>

              <Link
                href="/store?family=99"
                className="bg-white p-0 rounded-2xl shadow-lg overflow-hidden relative h-56 md:h-72 cursor-pointer block"
                aria-label="Ir a Nómadas"
              >
                <Image
                  src={textil}
                  alt="chico de guardapolvo"
                  fill
                  className="object-cover"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h2 className="text-white text-3xl md:text-5xl font-bold text-center">
                    TEXTIL
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <Productos />
<Entrerprises/>

        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {/* Columna de Fidelización */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <FaHandsHelping className="text-primary mx-auto text-6xl" />
                <h2 className="text-primary text-5xl font-bold">82%</h2>
                <p className="text-gray-800 mt-2">
                  De los clientes sienten mayor lealtad hacia una marca cuando
                  reciben productos de merchandising.
                </p>
              </div>

              {/* Columna de Merchandising en Exposiciones */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <FaBullhorn className="text-primary mx-auto text-6xl" />
                <h2 className="text-primary text-5xl font-bold">50%</h2>
                <p className="text-gray-800 mt-2">
                  De las empresas reportan un aumento en la atracción de
                  visitantes a sus stands cuando utilizan merchandising
                  efectivo.
                </p>
              </div>

              {/* Columna de Beneficio Clave del Merchandising */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <FaRocket className="text-primary mx-auto text-6xl" />
                <h2 className="text-primary text-5xl font-bold">70%</h2>
                <p className="text-gray-800 mt-2">
                  De las marcas observan un aumento significativo en la
                  recordación de marca cuando integran merchandising en su
                  estrategia de marketing.
                </p>
              </div>
            </div>
          </div>
        </section>

        

        

        <section className="flex flex-col items-center py-20 gap-4">
          <h3 className="text-primary font-black text-xl text-center md:text-4xl ">
            Seguinos en Nuestras Redes
          </h3>
          <div className="flex  gap-3">
          <a
              href="https://www.instagram.com/twenty.arg/"
              className="flex items-center gap-2 bg-primary p-2 rounded-lg transition-colors"
              target="_blank"
            >
              <InstagramLogo/> twenty.arg</a>
              
              
            <a
              href="https://www.linkedin.com/company/twentyarg/"
              className="flex items-center gap-2 bg-primary  p-2 rounded-lg transition-colors"
              target="_blank"
            ><LinkedinLogo />  Twenty Argentina</a>  
          </div>
        </section>

        <section className="flex flex-col items-center py-0 gap-4">
          <h3 className="text-primary font-black text-xl text-center md:text-4xl ">
            ¡Suscribite a Nuestro Newsletter!
          </h3>
          <Newlester />

          <p className="text-primary font-light text-center text-lg ">
            accede a las últimas noticias, ofertas exclusivas y contenido
            fascinante sobre merchandising personalizado
          </p>
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

        
        {/* <Categories /> */}
        <div className="flex md:flex-row flex-col justify-between">

          <div className="bg-white text-center  my-20 text-gray-800 p-4 ">
            <RiTeamLine className="text-8xl text-center m-auto text-primary" />
            <h6 className="text-3xl font-bold text-primary">
              Quieres ser parte del equipo Twenty?
            </h6>
            <p className="text-xl text-light mt-2">
              Envíanos tu CV a nuestro mail!
            </p>
            <div className="rounded-full mt-2  text-center inline-block m-auto bg-primary p-2">
              <Link href="mailto: info@twenty.com.ar?subject=Quiero sumarme al equipo">
                <AiOutlineMail size={32} color="white" />
              </Link>
            </div>
              </div>
            
            <div className="flex flex-col  justify-center items-center gap-4  py-10">
              <p className="text-primary font-bold text-4xl">
                {" "}
                Agenda una llamada
              </p>

              <p className=" text-gray-800 text-center text-lg  px-3 md:px-20 font-ligth">
                {" "}
                Queremos conocer tu proyecto y entender tus objetivos. <br />{" "}
                Agenda una llamada con nosotros y descubre cómo podemos
                colaborar para alcanzar tus metas de merchandising de manera
                óptima.
              </p>
              <a
                className="py-4 px-5 rounded-2xl bg-primary text-white font-light text-xl shadow-lg "
                href="https://calendly.com/twenty-merch/twenty-merchandising"
                target="_blank"
                rel="noopener noreferrer"
                >
                Agenda Una Meet
              </a>
            </div>{" "}
                </div>
                <ContactForm />
      </main>
    </Layout>
  );
}
