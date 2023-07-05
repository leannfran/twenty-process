import React from 'react'
import Image from 'next/image';
import Cup from "../../public/assets/Cup.png";

const CategoriesProduct = () => {

    return (
        <>

            <div className='py-5 flex items-center justify-center'>

                <div>

                    <div>
                        <Image src={Cup} width={300} height={300} alt='Vaso Imagen' title='Vaso Imagen' className='object-cover bg-gradient-to-t from-teal-500 to-teal-200 rounded-full w-2/4' />
                        <h1 className='text-secondary2 uppercase mt-5 font-semibold'>Producto</h1>
                    </div>

                </div>



            </div>

        </>
    )
}

export default CategoriesProduct;