// pages/index.js
import Head from "next/head";
import {
  BsWhatsapp,
} from "react-icons/bs";
import CarouselHero from "@/components/Carousel";
import NavBar from "@/components/navbar/NavBar";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Twenty | Página de inicio</title>
        <link rel="icon" href="./public/logo.jpeg" />
      </Head>



      <header>
        <NavBar />
        <CarouselHero />
      </header>



      <main className="container flex  flex-col items-center justify-center mx-auto py-8 min-h-[80vh]">
        <h1 className="text-4xl text-gray-900 font-bold mb-4">
          Bienvenido a <span className="text-primary">Twenty</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8 px-3 text-center">
          Estamos programando una página increíble para ti.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=5491178311503"
          className="bg-primary flex gap-2 items-center hover:bg-[#47B29C] shadow-xl transition-colors text-white font-bold py-2 px-4 rounded"
        >
          <BsWhatsapp />
          Enviar mensaje por WhatsApp
        </a>
      </main>

      <footer className="bg-primary py-4 h-[10vh] text-white text-center">
        &copy; {new Date().getFullYear()} Twenty. Todos los derechos reservados.
      </footer>
    </div>
  );
}
