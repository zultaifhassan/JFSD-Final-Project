import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import "../styling/Product.css";

const AllSaleProducts = () => {
  const [saleproduct, setSaleProduct] = useState([]);

  const fetchSaleproduct = async (req, res) => {
    try {
      const response = await axios.get("http://localhost:1213/api/sale");
      setSaleProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useState(() => {
    fetchSaleproduct();
  });

  return (
    <>
      <div className="sale-head container">
        <div className="dot-sale">
          <span></span>
          <p>Sale</p>
        </div>
        <h2>Summer Sale</h2>
      </div>
      <div className="products container">
        {saleproduct.map((item) => {
          return (
            <div className="product-cart1">
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
                  <img src={item.image} alt="" />
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
          );
        })}
      </div>
    </>
  );
};

export default AllSaleProducts;
