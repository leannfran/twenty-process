import { useState } from 'react';

const Aptitudes = () => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    

  return (
   <div className="flex text-black bg-gradient-to-b py-20 from-[#B9D8D6]">
  <div className="flex flex-col pl-4 mt-10 w-1/4">
    <h4 className="text-2xl font-semibold tracking-widest pb-6 inline-block">
      Nuestras Aptitudes
    </h4>
    <p>
      En Twenty, nos destacamos por ofrecer soluciones creativas y personalizadas en el ámbito del merchandising B2B. Trabajamos estrechamente con nuestros clientes para desarrollar estrategias efectivas y productos únicos que impulsen sus marcas y promuevan el éxito en el mercado.
    </p>
  </div>
  <div className="flex w-3/4">
    <div
      className={`relative w-1/3 transition-all aptitudes flex flex-col items-start pt-9 text-xl text-white font-bold shadow-md rounded-l-lg h-96 ${
        isHovered1 ? 'w-full' : ''
      }`}
      onMouseEnter={() => setIsHovered1(true)}
      onMouseLeave={() => setIsHovered1(false)}
      style={{ zIndex: isHovered1 ? 2 : 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary   opacity-70 rounded-l-lg"></div>
      <h5 className="px-10 z-20">VALORES</h5>
      {isHovered1 ? (
        <p className="animate-fade animate-once animate-delay-500 text-lg font-light p-5 pl-10 pr-36">
          En Twenty, nos regimos por un conjunto de valores fundamentales que guían nuestro trabajo diario. Estos valores incluyen la calidad, la innovación, la honestidad y el compromiso con la satisfacción del cliente. Nos enorgullece cumplir con estos valores en cada proyecto que emprendemos.
        </p>
      ) : null}
    </div>
    <div
      className={`relative aptitudes transition-all w-1/3 flex flex-col items-start pt-9 text-xl text-white font-bold shadow-md rounded-l-lg h-96 ${
        isHovered2 ? 'w-full' : ''
      }`}
      onMouseEnter={() => setIsHovered2(true)}
      onMouseLeave={() => setIsHovered2(false)}
      style={{ zIndex: isHovered2 ? 2 : 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary  opacity-70  rounded-l-lg"></div>
      <h5 className="px-10 z-20">COMPROMISO</h5>
      {isHovered2 ? (
        <p className="animate-fade animate-once animate-delay-500 text-lg font-light pr-36 p-5 pl-10">
          Estamos comprometidos con ofrecer a nuestros clientes productos de alta calidad y servicios excepcionales. Nos esforzamos por superar las expectativas y establecer relaciones duraderas basadas en la confianza y la satisfacción mutua. Nuestro compromiso es ser el socio de confianza para todas las necesidades de merchandising B2B de nuestros clientes.
        </p>
      ) : null}
    </div>
    <div
      className={`relative aptitudes transition-all w-1/3 flex flex-col items-start pt-9 text-xl bg-opacity-70 text-white font-bold shadow-md rounded-l-lg h-96 ${
        isHovered3 ? 'w-full' : ''
      }`}
      onMouseEnter={() => setIsHovered3(true)}
      onMouseLeave={() => setIsHovered3(false)}
      style={{ zIndex: isHovered3 ? 2 : 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary opacity-70   rounded-l-lg"></div>
      <h5 className="px-10 z-20">OBJETIVO</h5>
      {isHovered3 ? (
        <p className="animate-fade animate-once animate-delay-500 text-lg font-light pr-20 p-5 pl-10">
         Nuestro objetivo principal es ayudar a nuestros clientes a destacarse en su industria a través de estrategias de merchandising efectivas. Nos esforzamos por ofrecer soluciones innovadoras y personalizadas que impulsen el reconocimiento de marca, aumenten las ventas y fortalezcan la relación con los clientes. Trabajamos incansablemente para lograr los objetivos comerciales de nuestros clientes y convertirnos en su socio de confianza en el ámbito del merchandising B2B.
        </p>
      ) : null}
    </div>
  </div>
</div>


  );
};

export default Aptitudes;
