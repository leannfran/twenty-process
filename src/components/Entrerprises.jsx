import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Entrerprises() {
  return (
    <>
      <div className="text-gray-800 pt-12 w-full md:hidden">
        <h1 className="text-primary font-extrabold px-10 text-[20px]/7 md:text-[30px] text-center pb-10">
          ALGUNAS DE LAS EMPRESAS QUE NOS ELIGEN
        </h1>
        <div className=" mx-auto w-full p-0">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true, enabled: false }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="flex flex-col md:flex-row items-center md:space-x-8 "
          >
            <SwiperSlide>
              <Link
                href="/store/4560"
                className="flex flex-col md:flex-row items-center md:space-x-8 md:pb-12 cursor-pointer"
                aria-label="Ir a Woowup"
              >
                <h3 className="text-2xl font-semibold mb-4 md:hidden">
                  Woowup
                </h3>
                <div className="md:flex-1 overflow-hidden ">
                  <img
                    src="/assets/AIimages/woowup.png"
                    alt="Logotipo de Los woup"
                    className="w-full h-44 md:h-64 object-cover mx-auto mb-6 md:mb-0 transform scale-[120%] md:scale-[110%]"
                  />
                </div>
                <div className=" text-start w-full  p-6 d  md:flex-1">
                  <h3 className="text-2xl font-semibold mb-4 hidden md:block">
                    Woowup
                  </h3>
                  <div className="flex items-center mb-4">
                    <strong>Nivel de satisfacción: 5/5 </strong>
                  </div>
                  <p className="mb-4">
                    <strong>Comentarios:</strong> "Que las chicas siempre
                    estuvieron muy atentas en todo lo que necesite, cumplieron
                    con los tiempos de entrega y me ayudaron con las cajas hasta
                    el auto jaja gracias!! Los productos todos de muy buena
                    calidad "
                  </p>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link
                href="/store/4673"
                className="flex flex-col md:flex-row items-center md:space-x-8 cursor-pointer"
                aria-label="Ir a Banco Comafi"
              >
                <h3 className="text-2xl font-semibold mb-4 md:hidden">
                  Banco Comafi
                </h3>
                <div className="md:flex-1 overflow-hidden ">
                  <img
                    src="/assets/AIimages/comafi.png"
                    alt="Logotipo de Banco Comafi"
                    className="w-full  h-44 md:h-64 object-cover mx-auto mb-6 md:mb-0 transform scale-[120%] md:scale-[110%]"
                  />
                </div>
                <div className=" text-start w-full  p-6  md:flex-1">
                  <h3 className="text-2xl font-semibold mb-4 hidden md:block">
                    Banco Comafi
                  </h3>
                  <div className="flex items-center mb-4">
                    <strong>Nivel de satisfacción: 5/5 </strong>
                  </div>
                  <p className="mb-4">
                    <strong>Comentarios:</strong> " 5/5!"
                  </p>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col md:flex-row items-center md:space-x-8 ">
                <h3 className="text-2xl font-semibold mb-4 md:hidden">
                  Los Pinos Lubricantes SRL
                </h3>
                <div className="md:flex-1 overflow-hidden ">
                  <img
                    src="/assets/AIimages/los-pinos.png"
                    alt="Logotipo de Los Pinos Lubricantes SRL"
                    className="w-full h-44 md:h-64 object-cover mx-auto mb-6 md:mb-0 transform scale-[120%] md:scale-[110%]"
                  />
                </div>
                <div className=" text-start w-full  p-6  md:flex-1">
                  <h3 className="text-2xl font-semibold mb-4 hidden md:block">
                    Los Pinos Lubricantes SRL
                  </h3>
                  <div className="flex items-center mb-4">
                    <strong>Nivel de satisfacción: 5/5 </strong>
                  </div>
                  <p className="mb-4">
                    <strong>Comentarios:</strong> "Las mochilas industriales son
                    un excelente producto, y el trabajo en logos es muy prolijo.
                    El asesoramiento de diseño prestando atención a ciertos
                    'detalles' fue muy valioso."
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/*  <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center md:space-x-8 ">
              <div className="md:flex-1">
                <img
                  src="/assets/clientes3.png"
                  alt="Logotipo de Smiles Trading Group"
                  className="max-w-xs md:max-w-sm mx-auto mb-6 md:mb-0"
                />
              </div>
              <div className="-primary text-start w-full  p-6 d  md:flex-1"> 
                <h3 className="text-2xl font-semibold mb-4">Smiles Trading Group</h3>
                <div className="flex items-center mb-4">
                  <strong>Nivel de satisfacción: 5/5 </strong>
                </div>
                <p className="mb-4">
                  <strong>Comentarios:</strong> "Muy Buena atencion por
                  WhatsApp"
                </p>
              </div>
            </div>
          </SwiperSlide>

         

          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center md:space-x-8 ">
              <div className="md:flex-1">
                <img
                  src="/assets/clientes4.png"
                  alt="Logotipo de Sebigus"
                  className="max-w-xs md:max-w-sm mx-auto mb-6 md:mb-0"
                />
              </div>
              <div className="-primary text-start w-full  p-6 d  md:flex-1"> 
                <h3 className="text-2xl font-semibold mb-4">Sebigus</h3>
                <div className="flex items-center mb-4">
                  <strong>Nivel de satisfacción: 5/5 </strong>
                </div>
                <p className="mb-4">
                  <strong>Comentarios:</strong> "Muy Buena atencion por
                  WhatsApp"
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center md:space-x-8 ">
              <div className="md:flex-1">
                <img
                  src="/assets/cliente-5.png"
                  alt="Logotipo de Metzer"
                  className="max-w-xs md:max-w-sm mx-auto mb-6 md:mb-0"
                />
              </div>
              <div className="-primary text-start w-full  p-6 d  md:flex-1"> 
                <h3 className="text-2xl font-semibold mb-4">Metzer</h3>
                <div className="flex items-center mb-4">
                  <strong>Nivel de satisfacción: 5/5 </strong>
                </div>
                <p className="mb-4">
                  <strong>Comentarios:</strong> "Predisposición"
                </p>
              </div>
            </div>
          </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="text-gray-800 pt-12 w-full ">
          <h1 className="text-primary font-extrabold px-10 text-[20px]/7 md:text-[30px] text-center pb-10">
            ALGUNAS DE LAS EMPRESAS QUE NOS ELIGEN
          </h1>
        </div>
        <div>
          <div className="mx-auto w-full px-4 md:px-10 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/store/4560" className="block" aria-label="Ir a Woowup">
                <article className="group relative overflow-hidden rounded-2xl shadow-lg bg-black cursor-pointer">
                  <img
                    src="/assets/AIimages/woowup.png"
                    alt="Logotipo de Woowup"
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/35 transition duration-500 group-hover:bg-black/65" />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 via-fuchsia-500/30 to-transparent" />
                    <div className="absolute -inset-32 bg-gradient-to-r from-transparent via-white/15 to-transparent rotate-12 translate-x-[-35%] group-hover:translate-x-[35%] transition-transform duration-1000" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="text-2xl font-semibold">Woowup</h3>
                    <div className="mt-2 text-sm font-semibold">
                      Nivel de satisfacción: 5/5
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/90">
                      <span className="font-semibold">Comentarios:</span> "Que las
                      chicas siempre estuvieron muy atentas en todo lo que
                      necesite, cumplieron con los tiempos de entrega y me
                      ayudaron con las cajas hasta el auto jaja gracias!! Los
                      productos todos de muy buena calidad"
                    </p>
                  </div>
                </article>
              </Link>

              <Link
                href="/store/4673"
                className="block"
                aria-label="Ir a Banco Comafi"
              >
                <article className="group relative overflow-hidden rounded-2xl shadow-lg bg-black cursor-pointer">
                  <img
                    src="/assets/AIimages/comafi.png"
                    alt="Logotipo de Banco Comafi"
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/35 transition duration-500 group-hover:bg-black/65" />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 via-fuchsia-500/30 to-transparent" />
                    <div className="absolute -inset-32 bg-gradient-to-r from-transparent via-white/15 to-transparent rotate-12 translate-x-[-35%] group-hover:translate-x-[35%] transition-transform duration-1000" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="text-2xl font-semibold">Banco Comafi</h3>
                    <div className="mt-2 text-sm font-semibold">
                      Nivel de satisfacción: 5/5
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/90">
                      <span className="font-semibold">Comentarios:</span> "5/5!"
                    </p>
                  </div>
                </article>
              </Link>

              <article className="group relative overflow-hidden rounded-2xl shadow-lg bg-black">
                <img
                  src="/assets/AIimages/los-pinos.png"
                  alt="Logotipo de Los Pinos Lubricantes SRL"
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/35 transition duration-500 group-hover:bg-black/65" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 via-fuchsia-500/30 to-transparent" />
                  <div className="absolute -inset-32 bg-gradient-to-r from-transparent via-white/15 to-transparent rotate-12 translate-x-[-35%] group-hover:translate-x-[35%] transition-transform duration-1000" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-2xl font-semibold">
                    Los Pinos Lubricantes SRL
                  </h3>
                  <div className="mt-2 text-sm font-semibold">
                    Nivel de satisfacción: 5/5
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/90">
                    <span className="font-semibold">Comentarios:</span> "Las
                    mochilas industriales son un excelente producto, y el
                    trabajo en logos es muy prolijo. El asesoramiento de diseño
                    prestando atención a ciertos 'detalles' fue muy valioso."
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
