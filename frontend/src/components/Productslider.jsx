import React from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye, faStar } from "@fortawesome/free-solid-svg-icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../styling/Product.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Productslider = () => {
  return (
    <>
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
          <SwiperSlide>
            <div className="product-cart">
              <div className="product-1">
                <div className="sale">
                  <p>- 30%</p>
                </div>
                <div className="heareye">
                  <div className="eye-icon">
                    <FontAwesomeIcon icon={faEye} />
                  </div>
                  <div className="hearth-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
              <div className="add-cart">
                <Link to="/addcart">Add To Cart</Link>
              </div>
              <div className="product-price">
                <h5>AK-900 Wired Keyboard</h5>
                <p>
                  $300 <del>$430</del>
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
          <SwiperSlide>
            <div className="product-cart">
              <div className="product-1">
                <div className="sale">
                  <p>- 30%</p>
                </div>
                <div className="heareye">
                  <div className="eye-icon">
                    <FontAwesomeIcon icon={faEye} />
                  </div>
                  <div className="hearth-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
              <div className="add-cart">
                <Link to="/addcart">Add To Cart</Link>
              </div>
              <div className="product-price">
                <h5>AK-900 Wired Keyboard</h5>
                <p>
                  $300 <del>$430</del>
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
          <SwiperSlide>
            <div className="product-cart">
              <div className="product-1">
                <div className="sale">
                  <p>- 30%</p>
                </div>
                <div className="heareye">
                  <div className="eye-icon">
                    <FontAwesomeIcon icon={faEye} />
                  </div>
                  <div className="hearth-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
              <div className="add-cart">
                <Link to="/addcart">Add To Cart</Link>
              </div>
              <div className="product-price">
                <h5>AK-900 Wired Keyboard</h5>
                <p>
                  $300 <del>$430</del>
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
          <SwiperSlide>
            <div className="product-cart">
              <div className="product-1">
                <div className="sale">
                  <p>- 30%</p>
                </div>
                <div className="heareye">
                  <div className="eye-icon">
                    <FontAwesomeIcon icon={faEye} />
                  </div>
                  <div className="hearth-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
              <div className="add-cart">
                <Link to="/addcart">Add To Cart</Link>
              </div>
              <div className="product-price">
                <h5>AK-900 Wired Keyboard</h5>
                <p>
                  $300 <del>$430</del>
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
          <SwiperSlide>
            <div className="product-cart">
              <div className="product-1">
                <div className="sale">
                  <p>- 30%</p>
                </div>
                <div className="heareye">
                  <div className="eye-icon">
                    <FontAwesomeIcon icon={faEye} />
                  </div>
                  <div className="hearth-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
              <div className="add-cart">
                <Link to="/addcart">Add To Cart</Link>
              </div>
              <div className="product-price">
                <h5>AK-900 Wired Keyboard</h5>
                <p>
                  $300 <del>$430</del>
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
          <SwiperSlide>
            <div className="product-cart">
              <div className="product-1">
                <div className="sale">
                  <p>- 30%</p>
                </div>
                <div className="heareye">
                  <div className="eye-icon">
                    <FontAwesomeIcon icon={faEye} />
                  </div>
                  <div className="hearth-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
              <div className="add-cart">
                <Link to="/addcart">Add To Cart</Link>
              </div>
              <div className="product-price">
                <h5>AK-900 Wired Keyboard</h5>
                <p>
                  $300 <del>$430</del>
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
          <SwiperSlide>
            <div className="product-cart">
              <div className="product-1">
                <div className="sale">
                  <p>- 30%</p>
                </div>
                <div className="heareye">
                  <div className="eye-icon">
                    <FontAwesomeIcon icon={faEye} />
                  </div>
                  <div className="hearth-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
              <div className="add-cart">
                <Link to="/addcart">Add To Cart</Link>
              </div>
              <div className="product-price">
                <h5>AK-900 Wired Keyboard</h5>
                <p>
                  $300 <del>$430</del>
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
        </Swiper>
      </div>
      <div className="view-button container">
          <Link to='/'><button>View All Products </button></Link>
      </div>
    </>
  );
};

export default Productslider;
