// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardCatalogue from "./cards/CardCatalogue";
import Image from "next/image";
import brandLogo from "../../public/assets/slazenger-logo.png";
import CardProduct from "./cards/CardProduct";
import CategoriesProduct from "./CategoriesProduct";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@material-tailwind/react";
import jsonCatalogues from '../data/catalogues.json'
import featuredProducts from '../../featuredProducts.json'

const CardSwiper = ({
  openCatalogue,
  vertical,
  autoplay,
  swiperClass,
  length,
  setter,
  link,
  actualProductName
}) => {
  const [categories, setCategories] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [keyword] = actualProductName ? actualProductName.split(" ") : "";
  const cataloguesTest = 7;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryRequest = axios.get(
          "https://api.zecatdifapro.com/family"
        );
        const relatedProductsRequest = axios.get(
          `https://api.zecatdifapro.com/generic_product?name=${keyword}`
        );
        const [ categoryResponse , relatedProductsResponse ] = await axios.all([
          categoryRequest,
          relatedProductsRequest
        ]);
        setCategories(categoryResponse.data.families.filter((family)=> family.title !== "Próximos Arribos"));
        setRelatedProducts(relatedProductsResponse.data.generic_products);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Swiper
      className={`my-10   ${
        swiperClass === "catalogues"
          ? "h-[350px] md:h-[800px]"
          : swiperClass === "products" || swiperClass === "relatedProducts"
          ? "h-[330px]"
          : "h-[230px]"
      } py-2`}
      direction={vertical ? "vertical" : "horizontal"}
      pagination={{ clickable: true }}
      /*   loop={true} */
      mousewheel={true}
      autoplay={autoplay ? { delay: 3000 } : false}
      modules={[Autoplay, Navigation]}
      spaceBetween={swiperClass == "categories" ? 90 : null}
      breakpoints={{
        0: {
          slidesPerView:
            swiperClass === "catalogues"
              ? 1.1
              : swiperClass === "products" || swiperClass === "relatedProducts"
              ? 1.5
              : swiperClass === "categories"
              ? 2
              : 2,
        },
        400: {
          slidesPerView:
            swiperClass === "catalogues"
              ? 1.2
              : swiperClass === "products" || swiperClass === "relatedProducts"
              ? 1.5
              : swiperClass === "categories"
              ? 2.5
              : 2,
        },
        568: {
          slidesPerView:
            swiperClass === "catalogues"
              ? 1.4
              : swiperClass === "products" || swiperClass === "relatedProducts"
              ? 1.5
              : swiperClass === "categories"
              ? 3.3
              : 2,
        },
        630: {
          slidesPerView:
            swiperClass === "catalogues"
              ? 1.8
              : swiperClass === "products" || swiperClass === "relatedProducts"
              ? 2.0
              : swiperClass === "categories"
              ? 4.2
              : 2,
        },
        720: {
          slidesPerView:
            swiperClass === "products" || swiperClass === "relatedProducts"
              ? 2.2
              : swiperClass === "categories"
              ? 4.2
              : length,
        },
        918: {
          slidesPerView: 
          swiperClass === "products" || swiperClass === "relatedProducts"
              ? 2.7
              : swiperClass === "categories"
              ? 8
              : length,
        },
        918: {
          slidesPerView: 
          swiperClass === "products"
              ? 3.5
              : swiperClass === "categories"
              ? 7
              : length,
        },
      }}
    >
      {isLoading
        ? // Muestra el esqueleto de carga mientras los datos se están cargando
          Array(7)
            .fill()
            .map((_, index) => (
              <SwiperSlide key={index}>
                {swiperClass === "products" || swiperClass === "relatedProducts" ? (
                  <Card className="w-80 h-80 md:w-96 m-auto border">
                    <div className="bg-white animate-pulse rounded p-4 h-full flex flex-col gap-3">
                      <div className="h-52 w-full bg-gray-300 rounded mb-2"></div>
                      <div className="h-4 w-60 bg-gray-300 rounded"></div>
                      <div className="h-4 w-24 bg-gray-300 rounded"></div>
                    </div>
                  </Card>
                ) : swiperClass === "categories" ? (
                  <div className=" flex flex-col items-center justify-center animate-pulse gap-2">
                    <div className="w-32 h-32 bg-gradient-to-t from-teal-500 to-teal-200 rounded-full">                     
                    </div>
                    <div className="h-4 w-24 bg-gray-300 rounded"></div>
                  </div>
                ) : null}
              </SwiperSlide>
            ))
        : swiperClass === "catalogues"
          ? [...Array(cataloguesTest)].map((e, i) => (
            jsonCatalogues.map((items,i) => (
              <SwiperSlide key={i}>


                <CardCatalogue openCatalogue={openCatalogue} items={items} />


              </SwiperSlide>
            ))
          ))
        : swiperClass === "logos"
        ? [...Array(cataloguesTest)].map((e, i) => (
            <SwiperSlide key={i}>
              <div className="px-2 w-30 md:w-60 ">
                <Image src={brandLogo} alt="logo" />
              </div>
            </SwiperSlide>
          ))
        : swiperClass === "products"
        ? featuredProducts.map((product, i) => (
            <SwiperSlide key={i}>
              <CardProduct
                id={product.id}
                name={product.name}
                image={product.image}
                /* category={product.families
                  .map((family) => family.title)
                  .join(", ")} */
                  
              />
            </SwiperSlide>
          ))
        : swiperClass === "relatedProducts"
        ? relatedProducts.map((product, i) => (
          <SwiperSlide key={i}>
          <CardProduct
            id={product.id}
            name={product.name}
            image={product.images[0].image_url}
            category={product.families
              .map((family) => family.title)
              .join(", ")}
              
          />
        </SwiperSlide>
      ))
        : swiperClass === "categories"
        ? categories.map((category, i) => (
            <SwiperSlide key={i}>
              <div className="pl-10 m-auto">
                <CategoriesProduct
                  id={category.id}
                  title={category.title}
                  icon={category.icon_url}
                  setter={setter}
                  link={link}
                />
              </div>
            </SwiperSlide>
          ))
        : null}
    </Swiper>
  );
}

export default CardSwiper;