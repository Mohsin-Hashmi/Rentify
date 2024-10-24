// SwiperCom.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import '../swiperCom/SwiperCom.css';
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperCom = () => {
    return (
        <>
            <Swiper
                direction="horizontal"
                modules={[Pagination]}
                spaceBetween={30} // Adjusted for better spacing across breakpoints
                slidesPerView={3} // Default number of slides for larger screens
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                breakpoints={{
                    1169: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    430: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    360:{
                        slidesPerView: 1,
                        spaceBetween: 5,
                    }
                }}
            >
                <SwiperSlide className='swiperSlides'>
                    <h2>John D.</h2>
                    <p>"I had an amazing experience renting a car for my trip. The booking process was quick and easy, and the car was in excellent condition. Highly recommend!"</p>
                </SwiperSlide>
                <SwiperSlide className='swiperSlides'>
                    <h2>Sarah M.</h2>
                    <p>"The customer service was outstanding! They helped me choose the perfect car for my needs and made the whole process smooth. Will definitely rent again!"</p>
                </SwiperSlide>
                <SwiperSlide className='swiperSlides'>
                    <h2>Michael R.</h2>
                    <p>"I rented a car for a weekend getaway, and it was the best decision I made. The car was clean, well-maintained, and fuel-efficient. Great value for money!"</p>
                </SwiperSlide>
                <SwiperSlide className='swiperSlides'>
                    <h2>Emily T.</h2>
                    <p>"The flexibility of choosing pickup and drop-off locations made my trip so much easier. The staff was friendly and very accommodating. Will use this service again!"</p>
                </SwiperSlide>
                <SwiperSlide className='swiperSlides'>
                    <h2>David L.</h2>
                    <p>"This car rental service exceeded my expectations. The online booking system was user-friendly, and the car was ready when I arrived. Thank you for a fantastic experience!"</p>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SwiperCom;
