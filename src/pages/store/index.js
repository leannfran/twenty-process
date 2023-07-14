import { Layout } from "@/components/layout/Layout";
import React from "react";
import CardProduct from "@/components/cards/CardProduct";
import axios from "axios";
import Pagination from "@/components/Pagination";
import { Card, Spinner } from "@material-tailwind/react";

const store = () => {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [active, setActive] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);


  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: active === index ? "teal" : "blue-gray",
    onClick: () => {
      setActive(index);
      setIsLoading(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    className: "rounded-full",
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);

    setIsLoading(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);

    setIsLoading(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const productRequest = axios.get(
          `https://api.zecatdifapro.com/generic_product?page=${active}`
        );

        const [productResponse] = await axios.all([productRequest]);
        setProducts(productResponse.data.generic_products);
        setTotalPages(productResponse.data.total_pages);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [active]);

  return (
    <Layout>
      <main className="min-h-screen text-center">
        <h1 className="text-black py-10">Tienda</h1>
        <section className="flex flex-col 1440px:flex-row w-full">
          <div className="text-black  w-full py-10 1440px:w-[300px]">
            <h2>Categorias</h2>
            <ul>
              <li>categoria 1</li>
              <li>categoria 2</li>
              <li>categoria 3</li>
              <li>categoria 4</li>
            </ul>
          </div>
          <div className=" min-h-screen w-full max-w-[1400px] m-auto">
            <h2 className="text-black">Productos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-7 py-10 my-10">
              {isLoading
                ? Array(20)
                    .fill()
                    .map((_, index) => (
                      <Card
                        className="w-60 h-60 md:w-80 md:h-80 2xl:w-96 m-auto border"
                        key={index}
                      >
                        <div className="bg-white animate-pulse rounded p-4 h-full flex flex-col gap-3">
                          <div className="h-52 w-full bg-gray-300 rounded mb-2"></div>
                          <div className="h-4 w-60 bg-gray-300 rounded"></div>
                          <div className="h-4 w-24 bg-gray-300 rounded"></div>
                        </div>
                      </Card>
                    ))
                : products.map((product) => (
                    <CardProduct
                      key={product.id}
                      name={product.name}
                      image={product.images[0].image_url}
                      category={product.families
                        .map((family) => family.description)
                        .join(", ")}
                      loading={isLoading}
                    />
                  ))}
            </div>
          </div>
        </section>
        <div className="w-full flex items-center justify-center py-12">
          <Pagination
            active={active}
            setActive={setActive}
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
