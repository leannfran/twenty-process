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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      recusandae aspernatur similique? Omnis odio corrupti iste in.
      Doloribus cumque facere, esse officia autem quasi earum porro nostrum!
      Odit, delectus unde!
    </p>
  </div>
  <div className="flex  w-3/4">
    <div
      className={`relative w-1/3 transition-all  aptitudes flex flex-col items-start  pt-9 text-xl  text-white font-bold shadow-md rounded-l-lg h-96 ${
        isHovered1 ? 'w-full' : ''
      }`}
      onMouseEnter={() => setIsHovered1(true)}
      onMouseLeave={() => setIsHovered1(false)}
    >
        
          <div className="absolute inset-0 bg-gradient-to-r from-primary  rounded-l-lg"></div>

      <h5 className='px-10 z-20'>VALORES</h5>
      {isHovered1 ? <p className='animate-fade animate-once animate-delay-500 text-lg font-light p-10 pr-36'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ab atque laboriosam corrupti nesciunt ducimus. Ad, numquam aspernatur ab expedita sunt dicta incidunt quo perspiciatis iure provident illum quas autem!</p> : null}
    </div>
    <div
      className={`relative aptitudes transition-all w-1/3 flex flex-col items-start pt-9 text-xl text-white font-bold shadow-md rounded-l-lg h-96 ${
        isHovered2 ? 'w-full' : ''
      }`}
      onMouseEnter={() => setIsHovered2(true)}
      onMouseLeave={() => setIsHovered2(false)}
    >
        
          <div className="absolute inset-0 bg-gradient-to-r from-primary  rounded-l-lg"></div>

      <h5 className='px-10 z-20'>COMPROMISO</h5>
      {isHovered2 ? <p className='animate-fade animate-once animate-delay-500 text-lg font-light pr-36 p-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ab atque laboriosam corrupti nesciunt ducimus. Ad, numquam aspernatur ab expedita sunt dicta incidunt quo perspiciatis iure provident illum quas autem!</p> : null}
    </div>
    <div
      className={`relative aptitudes transition-all w-1/3 flex flex-col items-start pt-9 text-xl bg-opacity-70 text-white font-bold shadow-md rounded-l-lg h-96 ${
        isHovered3 ? 'w-full' : ''
      }`}
      
      onMouseEnter={() => setIsHovered3(true)}
      onMouseLeave={() => 
        setIsHovered3(false)}
    >
          <div className="absolute inset-0 bg-gradient-to-r from-primary rounded-l-lg"></div>

      <h5 className='px-10  z-20'>OBJETIVO</h5>
      {isHovered3 ? <p className='animate-fade animate-once animate-delay-500 text-lg font-light pr-36 p-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ab atque laboriosam corrupti nesciunt ducimus. Ad, numquam aspernatur ab expedita sunt dicta incidunt quo perspiciatis iure provident illum quas autem!</p> : null}
    </div>
  </div>
</div>

  );
};

export default Aptitudes;
