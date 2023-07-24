import { BreadcrumbsWithIcon } from "@/components/atoms/BreadCrumbs";
import { Layout } from "@/components/layout/Layout";
import axios from "axios";
import Image from "next/image";
import React from "react";
import { Carousel } from "@material-tailwind/react";
import SpeedDial from "../../components/SpeedDial";

const ProductDetail = ({ product }) => {
  return (
    <Layout>
      <div className="hidden md:block fixed right-9 bottom-9 z-10">
        <SpeedDial />
      </div>
      <main className="bg-white min-h-screen flex flex-col items-center">
        <BreadcrumbsWithIcon first="store" second={product.name} />
        <section className="  flex flex-col xl:flex-row max-w-[1300px]">
          <Carousel
            transition={{ duration: 1 }}
            loop={true}
            className="h-96 bg-gradient-to-t from-primary sm:h-[500px] md:min-w-[600px] md:h-[600px]"
          >
            {product.images.map((image) => (
              <Image
                key={image.id}
                src={image.image_url}
                alt="product image"
                className="h-full w-full object-cover sm:object-contain"
                width={500}
                height={500}
                priority
              />
            ))}
          </Carousel>
          <div className="text-secondary  px-3 flex flex-col justify-between py-5 ">
            <div>

            <h1 className="font-extrabold text-3xl ">{product.name}</h1>
            <p className="py-10">{product.description}</p>
            </div>
            <div className=" h-32 xl:h-12 flex flex-col xl:flex-row justify-between gap-4 max-w-[676px]">
              <input type="number" className="md:w-60 h-full rounded-md p-2 border-2 border-gray-500" placeholder="Ingrese Cant. de productos"/>
              <button className="bg-primary md:w-60 h-full rounded-md text-white font-bold">Solicitar cotización</button>
            </div>
          </div>
        </section>
        <section>
          <h2>Productos relacionados</h2>
        </section>
      </main>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const response = await axios.get(
      `https://api.zecatdifapro.com/generic_product/${id}`
    );
    const product = response.data.generic_product;

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default ProductDetail;
