import { Layout } from "@/components/layout/Layout";
import React from "react";
import CardProduct from "@/components/cards/CardProduct";
import useSWR from "swr";
import Pagination from "@/components/Pagination";
import { Breadcrumbs, Card } from "@material-tailwind/react";
import CardSwiper from "@/components/Swiper";
import { useRouter } from "next/router";
import { BreadcrumbsWithIcon } from "@/components/atoms/BreadCrumbs";
import SpeedDial from "../../components/SpeedDial";
import Image from "next/image";
import banner from "../../../public/assets/7.png";
import CategoryContainer from "@/components/CategoryContainer";

const store = () => {
  const router = useRouter();

  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const category = Array.isArray(router.query.family)
    ? router.query.family[0]
    : router.query.family || "";

  const fetcher = async (url) => {
    const r = await fetch(url);
    const json = await r.json();
    if (!r.ok) {
      const err = new Error(json?.message || json?.error || "Request failed");
      err.status = r.status;
      err.info = json;
      throw err;
    }
    return json;
  };
  const {
    data,
    isLoading: isLoadingSWR,
    error,
  } = useSWR(
    `/api/products?page=${page}${category ? `&family=${category}` : ""}`,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 5000,
      shouldRetryOnError: true,
      errorRetryCount: 8,
      errorRetryInterval: 1500,
    }
  );

  const products = data?.generic_products || [];
  React.useEffect(() => {
    if (data?.total_pages) setTotalPages(data.total_pages);
  }, [isLoadingSWR, data]);

  // Cuando cambia la categoría, volver a la página 1 y mostrar skeleton
  React.useEffect(() => {
    setPage(1);
  }, [category]);

  // Prefetch siguiente página para transición más rápida
  React.useEffect(() => {
    if (page === 1) {
      // Prefetch sin romper el render si falla
      fetcher(
        `/api/products?page=2${category ? `&family=${category}` : ""}`
      ).catch(() => {});
    }
  }, [page, category]);

  // Mantener skeleton hasta tener data (aunque haya errores/transitorios por backend lento)
  const showSkeleton = !data;

  //* funcion para asignarle el color al boton activo de paginacion
  const getItemProps = (index) => ({
    variant: page === index ? "filled" : "text",
    color: page === index ? "teal" : "blue-gray",
    onClick: () => {
      setPage(index);
      /* window.scrollTo({
        top: 0,
        behavior: "smooth",
      }); */
    },
    className: "rounded-full",
  });

  //* funciones para el paginado (puede refactorizarse en una sola funcion)
  const next = () => {
    if (page >= totalPages) return;

    setPage(page + 1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const prev = () => {
    if (page === 1) return;

    setPage(page - 1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SWR maneja la petición y el cacheo

  function setter(category) {
    if (`${router.query.family || ""}` === `${category}`) return;
    router.replace(`/store?family=${category}`);
    setPage(1);
  }

  return (
    <Layout>
      <div className="hidden md:block fixed right-9 bottom-9 z-10">
        <SpeedDial />
      </div>
      <main className="min-h-screen text-center">
        <BreadcrumbsWithIcon first="store" />
        <section className="flex flex-col 1440px:flex-row w-full">
          <div className=" min-h-screen w-full  m-auto">
            <Image src={banner} alt="Store Banner" />
            {/* <h2 className="text-black text-xl md:text-3xl shadow- py-5">
              Conoce todos nuestros{" "}
              <span className="border-b pb-1 border-primary"> productos</span>!
            </h2> 
            <CardSwiper
              vertical={false}
              swiperClass="categories"
              length={3.6}
              setter={setter}
              autoplay
            />*/}
            <div className="desktop:flex max-w-[1700px]  m-auto">
              <CategoryContainer setter={setter} activeId={category} />

              <div className=" pt-10 bg-gradient-to-t from-primary  justify-evenly  flex flex-wrap gap-4 pb-10 desktop:px-10 ">
                {showSkeleton ? (
                  Array(20)
                    .fill()
                    .map((_, index) => (
                      <Card
                        className="w-60 h-60 md:w-72  md:h-72 2xl:w-96 m-auto border"
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
                  <h2 className="text-primary text-center font-extrabold text-3xl col-span-3">
                    Nada por aquí! Pronto actualizaremos los productos de esta
                    categoría.
                  </h2>
                ) : (
                  products.map((product, i) => (
                    <CardProduct
                      key={i}
                      id={product?.id || ""}
                      name={product?.name || ""}
                      price={product?.price || ""}
                      image={
                        product?.images &&
                        Array.isArray(product.images) &&
                        product.images.length > 0
                          ? product.images[0].image_url
                          : ""
                      }
                      category={
                        product?.families && Array.isArray(product.families)
                          ? product.families
                              .map((family) => family.description)
                              .join(", ")
                          : ""
                      }
                      loading={showSkeleton}
                    />
                  ))
                )}
              </div>
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
