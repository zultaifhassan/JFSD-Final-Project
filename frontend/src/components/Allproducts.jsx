import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from 'axios';


const Allproducst = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
        const response = await axios.get("http://localhost:1213/api/products");
        setProducts(response.data)
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="sale-head container">
        <div className="dot-sale">
          <span></span>
          <p>All Products</p>
        </div>
        <h2>Collection of Products</h2>
      </div>
      <div className="products container">
        
            {products.map((item) => {
              return (
                <div className="product-cart1">
                  <div className="product-1">
                    <div className="heareye">
                      <div className="sale1"></div>
                      <div className="hearth-icon">
                        <FontAwesomeIcon icon={faHeart} />
                      </div>
                    </div>
                    <div className="productimg">
                      <img src={item.imageUrl} alt="" />
                    </div>
                  </div>
                  <div className="add-cart">
                    <button>Add To Cart</button>
                  </div>
                  <div className="product-price">
                    <h5>{item.title}</h5>
                    <p>${item.price}</p>
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
              );
            })}
      </div>
    </>
  );
};

export default Allproducst;
