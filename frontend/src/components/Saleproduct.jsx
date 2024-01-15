import React, { useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../styling/Product.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";




const SaleProductslider = () => {

  const [saleproduct, setSaleProduct] = useState([]);

  const fetchSaleproduct =  async (req, res) => {
    try {
      const response = await axios.get("http://localhost:1213/api/sale");
      setSaleProduct(response.data)
    } catch (error) {
      console.log(error)
    }
}

useState(() => {
  fetchSaleproduct();
})


  return (
    <>
      <div className="sale-head container">
        <div className="dot-sale">
          <span></span>
          <p>Sale</p>
        </div>
        <h2>Summer Sale</h2>
      </div>
      <div className="productslider container">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
            {saleproduct && saleproduct.map((item) => (
          <SwiperSlide>

              <div className="product-cart">
              <div className="product-1">
                <div className="heareye">
                  <div className="sale">
                    <p>- {item.percentage}%</p>
                  </div>
                  <div className="hearth-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
                <div className="productimg">
                  <img src="/Images/Peanut-13.png" alt="" />
                </div>
              </div>
              <div className="add-cart">
                <button>Add To Cart</button>
              </div>
              <div className="product-price">
                <h5>{item.title}</h5>
                <p>
                  ${item.newprice} <del>${item.price}</del>
                </p>
                <div className="rating">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <p>(55)</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
              ))}
          

        </Swiper>
      </div>
      <div className="view-button container">
        <Link to="/allsaleproducts">
          <button>View All Products </button>
        </Link>
      </div>
    </>
  );
};

export default SaleProductslider;