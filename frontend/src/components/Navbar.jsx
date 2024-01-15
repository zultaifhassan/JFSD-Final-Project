import React from "react";
import { Link } from "react-router-dom";
import "../styling/Navbar.css";
import { FiSearch } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useSelector } from "react-redux";

const Navbar = () => {

  const { cartProductIds } = useSelector((state) => state.cart)
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="navbar">
      <div className="container navbar-2">
        <div className="logo-side">
          <Link to="/">
            <h3>Ibex Store</h3>
          </Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <HiBars3BottomRight className="faBars" />
        </div>
        <div className={`center-links  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
        <div className="search-area">
          <div className="input-box">
            <input type="text" placeholder="What are you looking for?" />
            <FiSearch className="faSearch" />
          </div>
          <div className="cart-icon">
            <Link to="/whistlist">
              <IoIosHeartEmpty className="iconhearth" />
            </Link>
            <div className="cart-number">
              <p>{cartProductIds.length}</p>
              <Link to="/addcart">
                <IoCartOutline className="iconCart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
