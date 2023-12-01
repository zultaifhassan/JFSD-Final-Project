import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, } from '@fortawesome/free-solid-svg-icons';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../styling/Team.css';

// import required modules
import { Pagination } from 'swiper/modules';


const Teamslider = () => {
  return (
    <div className='container'>
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="ceo-img">
            <img src="/Images/z3.png" alt="" />
        </div>
        <div className="ceo-detail">
            <h2>Zultaif Hassan</h2>
            <h3>Founder & CEO</h3>
            <div className="saccounts">
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faHeart} />
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="ceo-img">
            <img src="/Images/z3.png" alt="" />
        </div>
        <div className="ceo-detail">
            <h2>Zultaif Hassan</h2>
            <h3>Founder & CEO</h3>
            <div className="saccounts">
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faHeart} />
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="ceo-img">
            <img src="/Images/z3.png" alt="" />
        </div>
        <div className="ceo-detail">
            <h2>Zultaif Hassan</h2>
            <h3>Founder & CEO</h3>
            <div className="saccounts">
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faHeart} />
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide><div className="ceo-img">
            <img src="/Images/z3.png" alt="" />
        </div>
        <div className="ceo-detail">
            <h2>Zultaif Hassan</h2>
            <h3>Founder & CEO</h3>
            <div className="saccounts">
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faHeart} />
            </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="ceo-img">
            <img src="/Images/z3.png" alt="" />
        </div>
        <div className="ceo-detail">
            <h2>Zultaif Hassan</h2>
            <h3>Founder & CEO</h3>
            <div className="saccounts">
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faHeart} />
            </div>
        </div></SwiperSlide>
    </Swiper>
  </div>
  )
}

export default Teamslider