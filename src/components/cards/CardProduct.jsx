import React from "react";
import productImg from "../../../public/assets/Head.png";
import { BsCashCoin } from "react-icons/bs";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";

const Productos = ({ name, image, category , loading }) => {
  return (
    <>
      <Card className="w-60 h-60 md:w-80 md:h-80 2xl:w-96 m-auto border">
        <CardHeader
          className={`relative h-56 m-0 rounded-b-none shadow-none bg-gray-600  ${loading && "blur-lg animate-pulse"} `}
        >
          <Image
            src={image}
            width={500}
            height={500}
            alt="Producto Imagen"
            className="object-cover  rounded-b-none "
          />
        </CardHeader>
        <CardBody className="p-3 text-left">
          <Typography variant="h5" color="blue-gray">
            {name}
          </Typography>
          <span className="text-gray-600 text-sm block">{category} </span>
          <Link
            href={`https://wa.me/+5491178311503?text=Hola%20quisiera%20consultar%20el%20precio%20e%20info%20de%20este%20producto:%20${name}%20${image}`}
            target="_blank"
            className="text-secondary text-sm underline"
          >
            Consultar precio{" "}
          </Link>
        </CardBody>
      </Card>
    </>
  );
};

export default Productos;
