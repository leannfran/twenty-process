import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import CategoriesProduct from '../components/CategoriesProduct';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Categories = () => {

    const categories = 8;

    return (
        <>

            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-black text-lg font-bold py-3 text-left uppercase'>Categorías</h1>
                    <hr className="w-[6rem] border border-primary" />
                </div>
                <div>

                    <h2 className='text-black text-lg font-bold flex items-center gap-5'>Ver todo en Categorías <FaArrowRight /></h2>

                </div>

            </div>

            <Swiper className="mySwiper"
                direction="horizontal"
                spaceBetween={60}
                slidesPerView={4.7}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                }}
                Modules={[Pagination, Scrollbar, A11y]}
                centeredSlides={true}
            >

                {[...Array(categories)].map((e, i) => (
                    <SwiperSlide key={i}>
                        <CategoriesProduct />
                    </SwiperSlide>
                ))}


            </Swiper>

            <div className='swiper-pagination'></div>

        </>
    )
}

export default Categories