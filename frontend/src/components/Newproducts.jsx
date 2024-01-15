import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";

const NewProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        "http://localhost:1213/api/limitedproducts"
      );
      setProducts(response.data);
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
              <form>
                <div className="product-1">
                  <div className="heareye">
                    <div className="salel"></div>
                    <div className="hearth-icon">
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                  </div>
                  <div className="productimg">
                    <img src={item.imageUrl} alt="" />
                  </div>
                </div>
                <div className="add-cart">
                  <button>Add to cart</button>
                </div>
                <div className="product-price">
                  <h5 name="title">{item.title}</h5>
                  <p name="price">${item.price}</p>
                  <div className="rating">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <p>(55)</p>
                  </div>
                </div>
              </form>
            </div>
          );
        })}
      </div>
      <div className="view-button container">
        <Link to="/allproducts">
          <button>View All Products </button>
        </Link>
      </div>
    </>
  );
};

export default NewProducts;
