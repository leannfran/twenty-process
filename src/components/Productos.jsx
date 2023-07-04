import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import {FaArrowRight} from 'react-icons/fa';

import { Swiper, SwiperSlide } from "swiper/react";
import CardProduct from '../components/cards/CardProduct';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Productos = () => {

    const productCatalogue = 5;

    return (
        <>

            <div>

                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-black text-lg font-bold py-3 text-left uppercase'>Productos destacados</h1>
                        <hr className="w-[10rem] border border-primary" />
                    </div>
                    <div>

                        <h2 className='text-black text-lg font-bold flex items-center gap-5'>Ver más productos <FaArrowRight/></h2>
                        
                    </div>
                </div>

                <Swiper className="mySwiper"
                    spaceBetween={70}
                    direction="horizontal"
                    slidesPerView={2.7}
                    pagination={{ clickable: true }}
                    loop={true}
                >

                    {[...Array(productCatalogue)].map((e, i) => (
                        <SwiperSlide key={i}>
                            <CardProduct />
                        </SwiperSlide>
                    ))}


                </Swiper>

            </div>


        </>
    )
}

export default Productos