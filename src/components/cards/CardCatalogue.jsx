import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import catalogueImg from "../../../public/assets/catalogue-img.png";
import Image from "next/image";
import { BsDownload, BsEye } from "react-icons/bs";

export default function CardCatalogue({ openCatalogue }) {
  return (
    <Card className="flex-row w-[310px] h-[310px] md:w-[99%]  md:h-[250px] shadow shadow-gray-600 m-auto ">
      <CardHeader
        shadow={false}
        floated={false}
        className="w-full h-full md:w-[270px] shrink-0 m-0 md:rounded-r-none overflow-hidden"
      >
        <Image
          src={catalogueImg}
          alt="image"
          className="w-full h-full object-cover"
          onClick={()=>openCatalogue(true)}
        />
      </CardHeader>


      <CardBody className="flex md:gap-5 max-w-[700px] w-full  md:py-12 text-start md:justify-between absolute bottom-0 md:static ">
        <div className="w-full md:w-[210px] lg:w-[440px]  flex flex-col justify-between items-start overflow-hidden ">
          <h3 className=" w-full text-sm md:text-lg font-extrabold text-white md:text-black">Catálogo SLAZENGER</h3>
          <p className=" hidden md:block font-normal text-base text-white md:text-black whitespace-nowrap overflow-hidden text-overflow-ellipsis">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dis.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </p>
          <span className="text-gray-500 text-sm">Publicado: 26/06/23</span>
        </div>
        <Button className="md:hidden bg-transparent border-2 px-2 py-0 ">
            <BsDownload size={20} />
          </Button>
        <div className=" hidden md:flex md:max-w-[200px]   flex-col justify-evenly items-center">
          <Button className="flex items-center gap-3 bg-white text-[#235F5B] font-extrabold h-12 w-40 shadow-md shadow-[#235F5B]" >
            <BsDownload size={34} /> Descargar
          </Button>
          <Button className="flex items-center gap-3 bg-white text-[#235F5B] font-extrabold h-12 w-40 shadow-md shadow-[#235F5B]" onClick={()=>openCatalogue(true)}>
            <BsEye size={34}/> Ver catálogo
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
