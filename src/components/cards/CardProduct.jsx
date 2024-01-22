import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import Link from "next/link";

const Productos = ({id, name, price, image, category}) => {

  const [isImageLoading, setIsImageLoading] = React.useState(true);
    // Asumiendo que `price` es un número o una cadena convertible a número
    const formattedPrice = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    }).format(price);


  return (
    <Link href={`/store/${id}`} onClick={()=> {
      setIsImageLoading(true)
      setTimeout(()=>{
        setIsImageLoading(false)
      }, 5000)
    }}>
      <Card className="w-60 h-full md:w-60 md:h-auto  m-auto border-primary border">
        <CardHeader
          className={`relative h-64 m-0 rounded-b-none shadow-none `}
        >
          <Image
            src={image}
            width={500}
            height={500}
            alt={name}
            className={`object-contain  rounded-b-none h-auto w-auto
            ${
              isImageLoading
                ? 'grayscale blur-xl scale-105'
                : 'grayscale-0 blur-0 scale-100'
            }
            `}
            
            onLoadingComplete={() => setIsImageLoading(false)}
            priority={true}
          />
          {isImageLoading && (<div className="absolute w-16 h-16 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"><Spinner className="w-full h-full" color="teal" /></div>)}
        </CardHeader>
        <CardBody className="p-3 border-primary border-t text-left">
          <Typography variant="h5" color="blue-gray">
            {name} 
          </Typography>
          <span className="text-gray-600 text-sm block">{category} </span>
          <p className="text-gray-800 font-light ">{
  price !== null ? (
    <p>{}</p>
  ) : (
    <p></p>
  )
}</p>
          <p
            className="bg-white border text-primary hover:bg-primary transition-colors font-light border-primary  inline-block hover:text-white text-sm rounded-lg p-1 mt-2 shadow-primary shadow-md"
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
