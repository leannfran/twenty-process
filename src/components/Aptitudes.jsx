import { useState } from "react";

const Aptitudes = () => {
  const [isHovered0, setIsHovered0] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const [activeIndex, setActiveIndex] = useState(null);
  const [maxHeights, setMaxHeights] = useState([100, 100, 100, 100]);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);

    const newMaxHeights = [...maxHeights];
    newMaxHeights[index - 1] = activeIndex === index ? 100 : 1000; // Ajusta el valor de 1000 según el tamaño máximo del contenido
    setMaxHeights(newMaxHeights);
  };

  return (
    <div className="flex flex-col md:flex-row text-black bg-gradient-to-b md:py-20 from-[#B9D8D6]">
      <div className=" flex-col md:pl-4 hidden lg:flex px-2 mt-10 md:w-1/4">
        <h4 className="text-2xl text-center font-semibold tracking-widest pb-6 inline-block">
          Nuestras Aptitudes
        </h4>
        <p className="px-5 text-justify text-lg text-light">
          En Twenty, nos destacamos por ofrecer soluciones creativas y
          personalizadas en el ámbito del merchandising B2B. Trabajamos
          estrechamente con nuestros clientes para desarrollar estrategias
          efectivas y productos únicos que impulsen sus marcas y promuevan el
          éxito en el mercado.
        </p>
      </div>

      <div className="hidden lg:flex flex-col md:flex-row w-full md:w-3/4">
        <div
          className={`relative w-1/3 transition-all aptitudes1 flex flex-col items-start pt-9 text-xl text-white font-bold shadow-md rounded-lg md:rounded-l-lg  md:h-96 ${
            isHovered1 ? "w-full" : ""
          }`}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
          style={{ zIndex: isHovered1 ? 2 : 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary   opacity-75 rounded-lg md:rounded-l-lg"></div>
          <h5 className="md:px-10 m-auto md:m-0 z-20">VALORES</h5>
          {isHovered1 ? (
            <p className="animate-fade animate-once animate-delay-500 text-base font-light p-5 md:pl-10 md:pr-36">
              En Twenty, nos regimos por un conjunto de valores fundamentales
              que guían nuestro trabajo diario. Estos valores incluyen la
              calidad, la innovación, la honestidad y el compromiso con la
              satisfacción del cliente. Nos enorgullece cumplir con estos
              valores en cada proyecto que emprendemos.
            </p>
          ) : null}
        </div>

        <div
          className={`relative aptitudes2 transition-all w-1/3 flex flex-col items-start pt-9 text-xl text-white font-bold shadow-md rounded-lg md:rounded-l-lg md:h-96  ${
            isHovered2 ? "w-full" : ""
          }`}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          style={{ zIndex: isHovered2 ? 2 : 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary opacity-75  rounded-lg md:rounded-l-lg"></div>
          <h5 className="md:px-10 m-auto md:m-0 z-20">COMPROMISO</h5>
          {isHovered2 ? (
            <p className="animate-fade animate-once animate-delay-500 text-base font-light md:pr-36 p-5 md:pl-10">
              Estamos comprometidos con ofrecer a nuestros clientes productos de
              alta calidad y servicios excepcionales. Nos esforzamos por superar
              las expectativas y establecer relaciones duraderas basadas en la
              confianza y la satisfacción mutua. Nuestro compromiso es ser el
              socio de confianza para todas las necesidades de merchandising B2B
              de nuestros clientes.
            </p>
          ) : null}
        </div>

        <div
          className={`relative aptitudes3 transition-all w-1/3 flex flex-col items-start pt-9 text-xl bg-opacity-75  text-white font-bold shadow-md rounded-lg md:rounded-l-lg md:h-96 ${
            isHovered3 ? "w-full" : ""
          }`}
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
          style={{ zIndex: isHovered3 ? 2 : 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary2 to-secondary2 opacity-80   rounded-lg md:rounded-l-lg"></div>
          <h5 className="md:px-10 m-auto md:m-0 z-20">OBJETIVO</h5>
          {isHovered3 ? (
            <p className="animate-fade animate-once animate-delay-500 text-base font-light md:pr-20 md:p-5 p-10 md:pl-10">
              Nuestro objetivo principal es ayudar a nuestros clientes a
              destacarse en su industria a través de estrategias de
              merchandising efectivas. Nos esforzamos por ofrecer soluciones
              innovadoras y personalizadas que impulsen el reconocimiento de
              marca, aumenten las ventas y fortalezcan la relación con los
              clientes. Trabajamos incansablemente para lograr los objetivos
              comerciales de nuestros clientes y convertirnos en su socio de
              confianza en el ámbito del merchandising B2B.
            </p>
          ) : null}
        </div>
      </div>

      {/* MOBILE */}

      <div className="lg:hidden mt-10 flex flex-col w-full ">
        <div className="flex flex-col w-full ">
          <div
            className={`relative  aptitudes4 flex flex-col items-start pt-9 text-xl text-white font-bold shadow-md rounded-lg md:rounded-l-lg ${
              activeIndex === 4
                ? " "
                : "h-1/3"
            }`}
            style={{ maxHeight: `${maxHeights[3]}px` }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-primary to-primary opacity-75 rounded-lg md:rounded-l-lg"
              onClick={() => handleClick(4)}
            ></div>
            <h5 className="md:px-10 m-auto pb-5 z-20">APTITUDES</h5>
            {activeIndex === 4 ? (
              <p className="animate-fade animate-once animate-delay-500 text-lg font-light p-5 md:pl-10 md:pr-36">
                En Twenty, nos destacamos por ofrecer soluciones creativas y
                personalizadas en el ámbito del merchandising B2B. Trabajamos
                estrechamente con nuestros clientes para desarrollar estrategias
                efectivas y productos únicos que impulsen sus marcas y promuevan
                el éxito en el mercado.
              </p>
            ) : null}
          </div>

          <div
            className={`relative  aptitudes1 flex flex-col items-start pt-9 text-xl text-white font-bold shadow-md rounded-lg md:rounded-l-lg ${
              activeIndex === 1
                ? " "
                : "h-1/3"
            }`}
            style={{ maxHeight: `${maxHeights[0]}px` }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-75 rounded-lg md:rounded-l-lg"
              onClick={() => handleClick(1)}
            ></div>
            <h5 className="md:px-10 m-auto pb-5 z-20">VALORES</h5>
            {activeIndex === 1 ? (
              <p className="animate-fade animate-once animate-delay-500 text-lg font-light p-5 md:pl-10 md:pr-36">
                En Twenty, nos regimos por un conjunto de valores fundamentales
                que guían nuestro trabajo diario. Estos valores incluyen la
                calidad, la innovación, la honestidad y el compromiso con la
                satisfacción del cliente. Nos enorgullece cumplir con estos
                valores en cada proyecto que emprendemos.
              </p>
            ) : null}
          </div>

          <div
            className={`relative aptitudes2 flex flex-col items-start pt-9 text-xl text-white font-bold shadow-md rounded-lg md:rounded-l-lg ${
              activeIndex === 2
                ? ""
                : "h-1/3"
            }`}
            style={{ maxHeight: `${maxHeights[1]}px` }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary opacity-75 rounded-lg md:rounded-l-lg"
              onClick={() => handleClick(2)}
            ></div>
            <h5 className="md:px-10 m-auto pb-5 z-20">COMPROMISO</h5>
            {activeIndex === 2 ? (
              <p className="animate-fade animate-once animate-delay-500 text-lg font-light md:pr-36 p-5 md:pl-10">
                Estamos comprometidos con ofrecer a nuestros clientes productos
                de alta calidad y servicios excepcionales. Nos esforzamos por
                superar las expectativas y establecer relaciones duraderas
                basadas en la confianza y la satisfacción mutua. Nuestro
                compromiso es ser el socio de confianza para todas las
                necesidades de merchandising B2B de nuestros clientes.
              </p>
            ) : null}
          </div>

          <div
            className={`relative  aptitudes3 flex flex-col items-start pt-9 text-xl bg-opacity-75 text-white font-bold shadow-md rounded-lg md:rounded-l-lg ${
              activeIndex === 3
                ? "0"
                : "h-1/3"
            }`}
            style={{ maxHeight: `${maxHeights[2]}px` }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-secondary2 to-secondary2 opacity-80 rounded-lg md:rounded-l-lg"
              onClick={() => handleClick(3)}
            ></div>
            <h5 className="md:px-10 m-auto pb-5 z-20">OBJETIVO</h5>
            {activeIndex === 3 ? (
              <p className="animate-fade animate-once animate-delay-500 text-lg font-light md:pr-20 md:p-5 p-10 md:pl-10">
                Nuestro objetivo principal es ayudar a nuestros clientes a
                destacarse en su industria a través de estrategias de
                merchandising efectivas. Nos esforzamos por ofrecer soluciones
                innovadoras y personalizadas que impulsen el reconocimiento de
                marca, aumenten las ventas y fortalezcan la relación con los
                clientes. Trabajamos incansablemente para lograr los objetivos
                comerciales de nuestros clientes y convertirnos en su socio de
                confianza en el ámbito del merchandising B2B.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aptitudes;
