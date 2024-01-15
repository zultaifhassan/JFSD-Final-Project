import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
// import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../data/cartSlice";
// import { fetchAllProducts } from "../data/productSlice";
import productList from "../data/productList.json";
// import axios from "axios";

const Productslider = () => {

  const { cartProductIds } = useSelector((state) => state.cart)
  const { addToCart, removeFromCart } = cartSlice.actions
  const dispatch = useDispatch()


  return (
    <>
      <div className="sale-head container">
        <div className="dot-sale">
          <span></span>
          <p>New Products</p>
        </div>
        <h2>Collection of New Products</h2>
      </div>
      <div className="products container">
        {productList.products.map((item) => {
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
                  {!cartProductIds.includes(item.id) && (<button onClick={() => dispatch(addToCart(item.id))}>Add to cart</button>)}
                  {cartProductIds.includes(item.id) && (<button onClick={() => dispatch(removeFromCart(item.id))}>Remove From Cart</button>)}
                </div>
                <div className="product-price">
                  <h5 name='title'>{item.name}</h5>
                  <p name='price' >${item.price}</p>
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

export default Productslider;
