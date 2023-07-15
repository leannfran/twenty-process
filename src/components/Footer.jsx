import React from "react";
import {InstagramLogo, FacebookLogo, LinkedinLogo} from '../components/Svgs'
const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#30807a] via-teal-400 to-teal-200 w-full p-8">
      <div className="grid grid-rows-1 gap-8 md:grid-cols-12 xl:gap-8">
        <div className="md:col-span-12 xl:col-span-4 flex flex-col gap-5">
        <h1 className="text-3xl font-bold ">twenty</h1>
      <p className=" text-left">
      Somos especialistas en productos de merchandising. Ofrecemos atención exclusiva y personalizada a la medida de tu marca, para que te identifiques con nuestros productos y el mensaje que queres brindar a tus clientes.
      </p>
        </div>
        <div className="md:col-span-4 xl:col-span-2">
          <h2 className="font-bold mb-6 uppercase">Menu</h2>
          <nav className="flex flex-col gap-4">
            <a href="#" className="hover:underline">
              Inicio
            </a>
            <a href="#" className="hover:underline">
              Nosotros
            </a>
            <a href="#" className="hover:underline">
              Productos
            </a>

          </nav>
        </div>
        <div className="md:col-span-4 xl:col-span-3">
        <div className="flex flex-col gap-3">
          <a
              href="https://www.instagram.com/twenty.arg/"
              className="flex items-center gap-2 hover:bg-primary p-2 rounded-lg transition-colors"
              target="_blank"
            >
              <InstagramLogo/> twenty.arg</a>
              
              <a
              href="https://www.instagram.com/twenty.arg/"
              className="flex items-center gap-2 hover:bg-primary  p-2 rounded-lg transition-colors"
              target="_blank"
            ><FacebookLogo/>twenty.arg</a>
            <a
              href="https://www.linkedin.com/company/twentyarg/"
              className="flex items-center gap-2 hover:bg-primary  p-2 rounded-lg transition-colors"
              target="_blank"
            ><LinkedinLogo /> Twenty Argentina</a>  
          </div>
       
        </div>
        <div className="md:col-span-4 xl:col-span-3">
          <h4 className="font-bold mb-6 uppercase">Contacto</h4>
          <div className="flex flex-col gap-4">
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Martinez, Buenos Aires
            </p>
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              info@twenty.com.ar         </p>
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            +54 9 11 7831-1503
            </p>
           
         
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col xl:flex-row gap-4 items-center justify-between">
        <p className="text-center md:text-left">
          &copy; 2023
          <span className=" font-bold">twenty</span> Todos los derechos
          reservados.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <a href="#" className=" hover:text-gray-900 transition-colors">
            Creado por
          </a>
          <span className="hidden md:flex">|</span>
          <a
            href="https://www.future-agency.tech/"
            className=" hover:text-gray-900 transition-colors"
          >
            Future Agency
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
