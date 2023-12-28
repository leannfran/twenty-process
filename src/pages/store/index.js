import { Layout } from "@/components/layout/Layout";
import React from "react";
import CardProduct from "@/components/cards/CardProduct";
import axios from "axios";
import Pagination from "@/components/Pagination";
import { Breadcrumbs, Card } from "@material-tailwind/react";
import CardSwiper from "@/components/Swiper";
import { useRouter } from "next/router";
import { BreadcrumbsWithIcon } from "@/components/atoms/BreadCrumbs";
import SpeedDial from "../../components/SpeedDial";


const store = () => {
  const router = useRouter();

  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const category = router.query.family || '';

  //* funcion para asignarle el color al boton activo de paginacion
  const getItemProps = (index) => ({
    variant: page === index ? "filled" : "text",
    color: page === index ? "teal" : "blue-gray",
    onClick: () => {
      setPage(index);
      setIsLoading(true);
      /* window.scrollTo({
        top: 0,
        behavior: "smooth",
      }); */
    },
    className: "rounded-full",
  });

  //* funciones para el paginado (puede refactorizarse en una sola funcion)
  const next = () => {
    if (page === 5) return;

    setPage(page + 1);

    setIsLoading(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const prev = () => {
    if (page === 1) return;

    setPage(page - 1);

    setIsLoading(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



  //* peticion a la api
  React.useEffect(() => {
    
    const fetchData = async () => {
      try {
        if (!category) {
          const productRequest = axios.get(
            `https://api.zecatdifapro.com/generic_product?page=${page}`
          );
          const [productResponse] = await axios.all([productRequest]);
          setProducts(productResponse.data.generic_products);
          setTotalPages(productResponse.data.total_pages);
          setIsLoading(false);
        } else {
          const productRequest = await axios.get(
            `https://api.zecatdifapro.com/generic_product?families[]=${category}&page=${page}`
          );
          const [productResponse] = await axios.all([productRequest]);
          setProducts(productResponse.data.generic_products);
          setTotalPages(productResponse.data.total_pages);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page,category]);

  
  function setter(category) {
    router.replace(`/store?family=${category}`, undefined, { shallow: true });
    setPage(1);
    setIsLoading(true);
  }

  return (
    <Layout>
      <div className="hidden md:block fixed right-9 bottom-9 z-10">
        <SpeedDial />
      </div>
      <main className="min-h-screen text-center">
      <BreadcrumbsWithIcon first="store" />
        <section className="flex flex-col 1440px:flex-row w-full">
          <div className=" min-h-screen w-full max-w-[1400px] m-auto">
            <h2 className="text-black text-xl md:text-3xl shadow- py-5">
              Conoce todos nuestros{" "}
              <span className="border-b pb-1 border-primary"> productos</span>!
            </h2>
            <CardSwiper
              vertical={false}
              swiperClass="categories"
              length={3.6}
              setter={setter}
              autoplay
            />
          
            <div className="  bg-gradient-to-t from-primary  justify-evenly  flex flex-wrap gap-4 pb-10   ">
              {isLoading ? (
                Array(20)
                  .fill()
                  .map((_, index) => (
                    <Card
                      className="w-60 h-60 md:w-72 md:h-72 2xl:w-96 m-auto border"
                      key={index}
                    >
                      <div className="bg-white animate-pulse rounded p-4 h-full flex flex-col gap-3">
                        <div className="h-52 w-full bg-gray-300 rounded mb-2"></div>
                        <div className="h-4 w-60 bg-gray-300 rounded"></div>
                        <div className="h-4 w-24 bg-gray-300 rounded"></div>
                      </div>
                    </Card>
                  ))
              ) : products.length < 1 ? (
                
                  <h2 className="text-primary text-center font-extrabold text-3xl col-span-3">Nada por aquí! Pronto actualizaremos los productos de esta categoría.</h2>
                
              ) : (
                products.map((product,i) => (
                  <CardProduct
                  key={i}
                  id={product?.id || ''}
                  name={product?.name || ''}
                  price={product?.price || ''}
                  image={product?.images && Array.isArray(product.images) && product.images.length > 0 ? product.images[0].image_url : ''}
                  category={product?.families && Array.isArray(product.families)
                    ? product.families.map((family) => family.description).join(", ")
                    : ''}
                  loading={isLoading}
                  />
                ))
              )}
            </div>
          </div>
        </section>
        <div className=" w-full flex items-center justify-center py-12">
          <Pagination
            active={page}
            setActive={setPage}
            getItemProps={getItemProps}
            prev={prev}
            next={next}
            totalPages={totalPages}
          />
        </div>
      </main>
    </Layout>
  );
};

export default store;
