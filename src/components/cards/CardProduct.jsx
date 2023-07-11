import React from "react";
import productImg from "../../../public/assets/Head.png";
import {BsCashCoin} from "react-icons/bs"
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const Productos = ({name,image}) => {

const encodedProductName = encodeURIComponent(name);
  return (
    <>
      <Card className="w-80 h-80 border border-primary  md:w-96 m-auto">
        <CardHeader color="white" className="relative h-56 m-0 p-1 rounded-b-none shadow-none">
          <Image
            src={image}
            width={500}
            height={500}
            alt="Producto Imagen"
            className="object-cover  rounded-b-none"
          />
        </CardHeader>
        <CardBody className="p-3 flex justify-between ">
          <Typography variant="h5" color="blue-gray" className=" text-left">
            {name}
          </Typography>
          <a href={`https://api.whatsapp.com/send?phone=5491178311503&text=Hola%20Twenty%F0%9F%91%8B%0AQuiero%20cotizar%20el%20producto%20${encodedProductName}3A%20`} className=" border border-primary hover:bg-primary transition-colors rounded-full p-2 text-center"> <BsCashCoin className="text-black" /></a>
          {/* <Typography className="text-left">
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography> */}
        </CardBody>
      </Card>
    </>
  );
};

export default Productos;
