import React from 'react';
import { Link } from 'react-router-dom';
import '../Stylings/Sidebar.css';
import { RxDashboard } from "react-icons/rx";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineShopping } from "react-icons/ai";
import { PiUsersThin } from "react-icons/pi";
import { CiSquareQuestion } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <div className="logo">
            <h2>Ibex Store</h2>
        </div>
        <div className="menu-list">
            <ul>
                <Link to="/"><RxDashboard /><li>Dashoard</li></Link>
                <Link to="/product"><IoIosAddCircleOutline /><li>Add Product</li></Link>
                <Link to="/productlist"><AiOutlineShopping /><li>Product List</li></Link>
                <Link to="/customertable"><PiUsersThin /><li>Customers</li></Link>
                <Link to="/querytable"><CiSquareQuestion /><li>Quries</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar