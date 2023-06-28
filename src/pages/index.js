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
      </header>
    <main className="">
        <CarouselHero />
      
    </main>

      <footer className="bg-primary py-4 h-[10vh] text-white text-center">
        &copy; {new Date().getFullYear()} Twenty. Todos los derechos reservados.
      </footer>
    </div>
  );
}
