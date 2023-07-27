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

const Productos = ({id, name, image, category}) => {

  const [isImageLoading, setIsImageLoading] = React.useState(true);

  return (
    <Link href={`/store/${id}`} >
      <Card className="w-60 h-full md:w-80 md:h-80 2xl:w-96 m-auto border">
        <CardHeader
          className={`relative h-56 m-0 rounded-b-none shadow-none `}
        >
          <Image
            src={image}
            width={500}
            height={500}
            alt={name}
            className={`object-contain  rounded-b-none h-full w-full
            ${
              isImageLoading
                ? 'grayscale blur-xl scale-105'
                : 'grayscale-0 blur-0 scale-100'
            }
            `}
            
            onLoadingComplete={() => setIsImageLoading(false)}
            priority={true}
          />
        </CardHeader>
        <CardBody className="p-3 text-left">
          <Typography variant="h5" color="blue-gray">
            {name}
          </Typography>
          <span className="text-gray-600 text-sm block">{category} </span>
          <p
            className="text-secondary text-sm underline"
          >
            Ver mas{" "}
          </p> 
          {/* <Link
            href={`https://wa.me/+5491178311503?text=Hola%20quisiera%20consultar%20el%20precio%20e%20info%20de%20este%20producto:%20${name}%20${image}`}
            target="_blank"
            className="text-secondary text-sm underline"
          >
            Consultar precio{" "}
          </Link> */}
        </CardBody>
      </Card>
    </Link>
  );
};

export default Productos;
