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

export default function CardCatalogue({ openCatalogue}) {
  return (
    <Card className="flex-row w-[97%]  h-[250px] shadow shadow-gray-600 m-auto">
      <CardHeader
        shadow={false}
        floated={false}
        className="w-[270px] shrink-0 m-0 rounded-r-none"
      >
        <Image
          src={catalogueImg}
          alt="image"
          className="w-full h-full object-cover"
        />
      </CardHeader>


      <CardBody className="flex w-full py-12 justify-between">
        <div className=" max-w-md flex flex-col justify-between items-start overflow-hidden ">
          <h3 className="font-extrabold text-black">Catálogo SLAZENGER</h3>
          <p className="font-normal text-base text-black whitespace-nowrap overflow-hidden text-overflow-ellipsis">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dis.
          </p>
          <span className="text-gray-700 text-sm">Publicado: 26/06/23</span>
        </div>
        <div className=" max-w-md flex flex-col justify-evenly items-center">
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
