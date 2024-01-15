import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import axios from 'axios';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../styling/Swiper.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {

  // const [sliderimg, setSliderimg] = useState([])

  // useEffect(() => {

  //   const fetchImages = async () => {
  //     const response = await axios.get('http://localhost:1213/api/upload');
  //     setSliderimg(response.data)
  //   }
  //   fetchImages();
  // }, [])

  return (
    <div className='container home-main-slider'>

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
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"

        style={{
          "--swiper-pagination-bullet-inactive-opacity": "0.5",
        }}
      >

        <SwiperSlide><img src="/Images/11 (2).jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/Images/11 (3).jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/Images/11 (4).jpg" alt="" /></SwiperSlide> 
      </Swiper>
    </div>
  );
}


export default Slider;