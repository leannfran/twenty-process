import { Layout } from '@/components/layout/Layout';
import React from 'react';
import CardProduct from '@/components/cards/CardProduct';
import axios from 'axios';

const store = () => {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const productRequest = axios.get(
          "https://api.zecatdifapro.com/generic_product?page=15&limit=6"
        );
        
        const [productResponse] = await axios.all([
          productRequest,
        ]);
        setProducts(productResponse.data.generic_products);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  return (
    <Layout> 

      <main className='min-h-screen text-center'>
        <h1 className='text-black py-10'>Tienda</h1>
        <section className='flex flex-col 1440px:flex-row w-full'>
          <div className='text-black  w-full py-10 1440px:w-[300px]'>
            <h2 >Categorias</h2>
            <ul>
              <li>categoria 1</li>
              <li>categoria 2</li>
              <li>categoria 3</li>
              <li>categoria 4</li>
            </ul>
          </div>
          <div className=' min-h-screen w-full max-w-[1400px] m-auto'>
          <h2 className='text-black'>Productos</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-7 py-10 my-10'>
            {products.map((product) => (
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
      </main>

    </Layout>
  );
};

export default store;