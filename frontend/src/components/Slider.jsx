import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../styling/Swiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
  return (
    <>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"

        // style={{
        //   "--swiper-pagination-color": "#FFBA08",
        //   "--swiper-pagination-bullet-inactive-color": "#999999",
        //   "--swiper-pagination-bullet-inactive-opacity": "1",
        //   "--swiper-pagination-bullet-size": "16px",
        //   "--swiper-pagination-bullet-horizontal-gap": "6px"
        // }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}


export default Slider;