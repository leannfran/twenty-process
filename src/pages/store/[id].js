import { BreadcrumbsWithIcon } from "@/components/atoms/BreadCrumbs";
import { Layout } from "@/components/layout/Layout";
import axios from "axios";
import Image from "next/image";
import React from "react";
import { Carousel,IconButton } from "@material-tailwind/react";
import SpeedDial from "../../components/SpeedDial";
import CardSwiper from "../../components/Swiper";
import { useCart } from "@/context/cartContext";



const ProductDetail = ({ product }) => {
  const [quantityValue, setQuantityValue] = React.useState(1);
  const { setCartLength } = useCart();
 

  const addToCartLocalStorage = async  (products) => {
    if (quantityValue <= 0) {
      alert('Ingrese cantidad de productos')
      return;
    }
    if (quantityValue > 1000) {
      alert('La cantidad de productos no puede ser mayor a 1000')
      return;
    }
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({...products, quantity: quantityValue});
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartLength(cart.length);
    alert('Producto agregado al carrito')
  };

  


  return (
    <Layout>
      <div className="hidden md:block fixed right-9 bottom-9 z-10">
        <SpeedDial />
      </div>
      <main className="bg-white flex flex-col items-center">
        <BreadcrumbsWithIcon first="store" second={product.name} />
        <section className=" md:px-82  flex flex-col xl:flex-row max-w-[1300px]">
          <Carousel
            transition={{ duration: 1 }}
            loop={true}
            className="h-96  bg-gradient-to-t from-primary sm:h-[500px] md:min-w-[500px] md:h-[500px]"
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="gray"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 left-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="gray"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}
          
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
            <div className=" h-32 xl:h-12 flex flex-col xl:flex-row justify-between gap-4 max-w-[676px]">
              <input type="number" value={quantityValue} className="md:w-60 h-full rounded-md p-2 border-2 border-gray-500 text-black" placeholder="Ingrese Cant. de productos" onChange={(e)=> setQuantityValue(e.target.value)}/>
              <button className="bg-primary hover:bg-secondary transition-colors md:w-60 h-full rounded-md text-center flex justify-center items-center text-white font-bold" onClick={()=> addToCartLocalStorage(product)}>Agregar al carrito cotizador

              </button>
              {/* <Link target={"_blank"} href={`https://wa.me/+5491178311503?text=Hola%20quisiera%20consultar%20el%20precio%20e%20info%20de%20este%20producto:%20${product.name}%20`} className="bg-primary hover:bg-secondary transition-colors md:w-60 h-full rounded-md text-center flex justify-center items-center text-white font-bold">Solicitar cotización</Link> */}

            </div>
          </div>
        </section>
        <section className="text-[#0F201E] my-12">
          <div className="m-auto text-center mt-12"> 

          <h2 className="font-extrabold text-2xl inline">Productos </h2>{" "}
          <span className="border-b pb-1 border-primary font-bold text-2xl">
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
