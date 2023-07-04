import React from 'react'
import productImg from "../../../public/assets/Head.png";
import Image from 'next/image';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

const Productos = () => {

    return (
        <>

            <Card className="mt-6 w-96 py-5 mb-0">
                <CardHeader color="blue-gray" className="relative h-56">
                    <Image src={productImg} width={500} height={500} alt='Producto Imagen' className='object-cover'/>
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2 text-left">
                        Nombre del producto
                    </Typography>
                    <Typography className='text-left'>
                        The place is close to Barceloneta Beach and bus stop just 2 min by walk
                        and near to &quot;Naviglio&quot; where you can enjoy the main night life
                        in Barcelona.
                    </Typography>
                </CardBody>
            </Card>


        </>
    )
}

export default Productos