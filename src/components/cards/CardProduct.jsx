import React from "react";
import productImg from "../../../public/assets/Head.png";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const Productos = () => {
  return (
    <>
      <Card className="w-80 h-80 md:w-96 m-auto">
        <CardHeader color="blue-gray" className="relative h-56 m-0 rounded-b-none shadow-none">
          <Image
            src={productImg}
            width={500}
            height={500}
            alt="Producto Imagen"
            className="object-cover rounded-b-none"
          />
        </CardHeader>
        <CardBody className="p-3 ">
          <Typography variant="h5" color="blue-gray" className=" text-left">
            Nombre del producto
          </Typography>
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
