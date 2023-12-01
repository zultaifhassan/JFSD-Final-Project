import React from "react";
import { Link } from "react-router-dom";
import "../styling/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faHeart, faCartShopping, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="navbar">
      <div className="container navbar-2">
        <div className="logo-side">
          <Link to="/"><h3>Ibex Store</h3></Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <FontAwesomeIcon icon={faBarsStaggered} />
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
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>
          <div className="cart-icon">
          <Link to="/whistlist"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></Link>
          <Link to="/addcart"><FontAwesomeIcon icon={faCartShopping} /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
