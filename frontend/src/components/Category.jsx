import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreen,
  faComputer,
  faCamera,
  faHeadphones,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
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
              <FontAwesomeIcon icon={faMobileScreen} />
              <p>Mobile</p>
            </div>
          </Link>
          
          <div className="items-list">
            <FontAwesomeIcon icon={faComputer} />
            <p>Computer</p>
          </div>
          <div className="items-list">
            <FontAwesomeIcon icon={faCamera} />
            <p>Camera</p>
          </div>
          <div className="items-list">
            <FontAwesomeIcon icon={faHeadphones} />
            <p>Headphones</p>
          </div>
          <div className="items-list">
            <FontAwesomeIcon icon={faGamepad} />
            <p>Gaming</p>
          </div>
          <div className="items-list">
            <FontAwesomeIcon icon={faMobileScreen} />
            <p>Mobile</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
