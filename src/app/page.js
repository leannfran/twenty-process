// pages/index.js

import Head from "next/head";
import Image from "next/image"
import {BsWhatsapp, BsLinkedin, BsInstagram} from "react-icons/bs"

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Twenty | Página de inicio</title>
        <link rel="icon" href="./public/logo.jpeg" />
      </Head>

        <header className="w-full bg-primary shadow-xl p-4 grid md:grid-cols-12 gap-4 items-center justify-center">
          <h1 className="md:col-span-2 text-white flex justify-center md:justify-start font-extralight  text-xl">
            twenty merchandising.
          </h1>
          <nav className="md:col-span-8 flex items-center gap-4 justify-center">
            <a
              href="#"
              className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
            <Image className="rounded-full" src="/logo.jpeg" alt="Logo" width={50} height={0} />
            </a>
           
          </nav>
          <div className="md:col-span-2 text-white flex items-center justify-center md:justify-end gap-4">
            
            <a href="https://www.linkedin.com/company/twentyarg/">
            <BsLinkedin/>
            </a>
            <a href="https://www.instagram.com/twenty.arg/">
              <BsInstagram />
            </a>
          </div>
        </header>

      <main className="container flex  flex-col items-center justify-center mx-auto py-8 min-h-[80vh]">
        <h1 className="text-4xl text-gray-900 font-bold mb-4">Bienvenido a <span className="text-primary">Twenty</span></h1>
        <p className="text-lg text-gray-700 mb-8 px-3 text-center">
          Estamos programando una página increíble para ti.
        </p>
        <a href="https://api.whatsapp.com/send?phone=5491178311503" className="bg-primary flex gap-2 items-center hover:bg-[#47B29C] shadow-xl transition-colors text-white font-bold py-2 px-4 rounded">
        <BsWhatsapp/>
        Enviar mensaje por WhatsApp
        </a>
      </main>

      <footer className="bg-primary py-4 h-[10vh] text-white text-center">
        &copy; {new Date().getFullYear()} Twenty. Todos los derechos reservados.
      </footer>
    </div>
  );
}
