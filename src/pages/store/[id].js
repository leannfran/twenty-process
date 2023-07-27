import { BreadcrumbsWithIcon } from "@/components/atoms/BreadCrumbs";
import { Layout } from "@/components/layout/Layout";
import axios from "axios";
import Image from "next/image";
import React from "react";
import { Carousel } from "@material-tailwind/react";
import SpeedDial from "../../components/SpeedDial";
import CardSwiper from "../../components/Swiper";

const ProductDetail = ({ product }) => {

  return (
    <Layout>
      <div className="hidden md:block fixed right-9 bottom-9 z-10">
        <SpeedDial />
      </div>
      <main className="bg-white flex flex-col items-center">
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
          <div className="  px-3 flex flex-col justify-between py-5 ">
            <div>
              <h1 className="font-extrabold text-3xl text-[#0F201E]">
                {product.name}
              </h1>
              <p className="py-10 text-secondary">{product.description}</p>
            </div>
            <div className=" h-32 md:h-12 flex flex-col md:flex-row justify-start gap-4 max-w-[676px]">
              <input
                type="number"
                className="md:w-60 h-full rounded-md p-2 border-2 border-gray-500"
                placeholder="Ingrese Cant. de productos"
              />
              <button className="bg-primary md:w-60 h-full rounded-md text-white font-bold">
                Solicitar cotización
              </button>
            </div>
          </div>
        </section>
        <section className="text-[#0F201E] my-12">
          <div className="m-auto text-center mt-12"> 

          <h2 className="font-extrabold text-2xl inline">Productos </h2>{" "}
          <span className="border-b pb-1 border-primary font-extrabold text-2xl">
            {" "}
            relacionados
          </span>
          </div>
          <div className="w-screen">
            <CardSwiper vertical={false} swiperClass="relatedProducts" length={2.3} actualProductName={product.name}/>
          </div>
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
