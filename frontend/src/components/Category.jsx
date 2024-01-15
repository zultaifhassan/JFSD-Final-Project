import React from "react";
import { Link } from "react-router-dom";
import "../styling/Home.css";

const Category = () => {
  return (
    <>
      <div className="container category-head">
        <div className="cat-heading">
          <div className="cat-box">
            <span></span>
            <h4>Categories</h4>
          </div>
          <h1>Browse By Category</h1>
        </div>
        <div className="category">
          <Link to="/">
            <div className="items-list">
              <img src="/Images/food1.svg" alt="" />
              <p>Grapes</p>
            </div>
          </Link>
          
          <div className="items-list">
          <img src="/Images/food2.svg" alt="" />
            <p>Apricoat</p>
          </div>
          <div className="items-list">
          <img src="/Images/fruits1.svg" alt="" />
            <p>Peanut</p>
          </div>
          <div className="items-list">
          <img src="/Images/fruits2.svg" alt="" />
            <p>Apples</p>
          </div>
          <div className="items-list">
          <img src="/Images/fruits3.svg" alt="" />
            <p>Orange</p>
          </div>
          <div className="items-list">
          <img src="/Images/fruits4.svg" alt="" />
            <p>Mango</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
