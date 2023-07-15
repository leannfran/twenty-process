import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
import { BsDownload, BsEye } from "react-icons/bs";
import { BiHappyAlt } from "react-icons/bi";
import { Toaster,toast } from "sonner";

export default function CardCatalogue({ openCatalogue,items}) {

  const onHandlerClickCatalogue = (e) => {

    if(items.id > 8) {

      e.preventDefault();
      toast('¡Opps! Catálogo en mantenimiento', {
        description: 'Disculpa las molestias, nuestro catálogo solo se encuentra en versión descargable."',
        icon: <BiHappyAlt />,
      });

    } else {

      window.open(items.url, '_blank')

    }

  }

  const onButtonClick = () => {
    
    const fileURL = `/pdf/${items.pdf}`; //obtener url del archivo
    
    const link = document.createElement('a'); // creamos una etiqueta a
    link.href = fileURL; // el href será la url del archivo
    link.download = `${items.pdf}`; // se descargara el archivo
  
    link.click(); // al hacer click se descarga el archivo
  };

  return (
    <Card className="flex-row w-[310px] h-[310px] md:w-[99%]  md:h-[250px] shadow shadow-gray-600 m-auto bg-gradient-to-t" id="catalogos">
      <CardHeader
        shadow={false}
        floated={false}
        className="w-full h-full md:w-[270px] shrink-0 m-0 md:rounded-r-none overflow-hidden"
      >
        <Image
          src={items.image}
          width={500}
          height={500}
          alt="image"
          className="w-full h-full object-cover"
          // onClick={()=>openCatalogue(true)}
          quality={100}
          loading="lazy"
        />
      </CardHeader>


      <CardBody className="flex md:gap-5 max-w-[700px] w-full  md:py-12 text-start md:justify-between absolute bottom-0 md:static ">
        <div className="w-full md:w-[210px] lg:w-[440px]  flex flex-col justify-between items-start overflow-hidden ">
          <h3 className=" w-full text-sm md:text-lg font-extrabold text-white md:text-black">{items.name}</h3>
          <p className=" hidden  font-normal text-base text-white md:text-black whitespace-nowrap overflow-hidden text-overflow-ellipsis">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dis.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </p>
          <span className="text-gray-500 text-sm">Publicado: 26/06/23</span>
        </div>

        <Button className={`md:hidden bg-transparent border-2 px-2 py-0 ${items.id > 8 ? 'disabled-link' : ''}`} onClick={onHandlerClickCatalogue}>
        <a href={items.url} className="flex" target="_blank" onClick={(e) => items.id > 8 && e.preventDefault()}>
              <BsEye size={20} />
            </a>
        </Button>

        <Button className="md:hidden bg-transparent border-2 px-2 py-0 ml-2" onClick={onButtonClick}>
            <BsDownload size={20} />
        </Button>

        <div className=" hidden md:flex md:max-w-[200px]   flex-col justify-evenly items-center">

          <Button className="flex items-center gap-3 bg-white text-[#235F5B] font-extrabold h-12 w-40 shadow-md shadow-[#235F5B]" onClick={onButtonClick}>
            <BsDownload size={34} /> Descargar
          </Button>

          <Button className={`flex items-center gap-3 bg-white text-[#235F5B] font-extrabold h-12 w-40 shadow-md shadow-[#235F5B] ${items.id > 8 ? 'disabled-link' : ''}`} onClick={onHandlerClickCatalogue}>
            <a href={items.url} className="flex" target="_blank" onClick={(e) => items.id > 8 && e.preventDefault()}>
              <BsEye size={34} /> Ver catálogo
            </a>
          </Button>

        <Toaster theme="light" position='top-right' duration={9000} closeButton richColors/>
        </div>
      </CardBody>
    </Card>
  );
}
