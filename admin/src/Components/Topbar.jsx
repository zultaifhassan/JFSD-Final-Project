import React from "react";
import "../Stylings/Topbar.css";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="searchicon">
        <input type="text" placeholder="Search" />
        <CiSearch className="icon-sizing" />
      </div>
      <div className="user-logout">
        <button>Logout</button>
        <CiUser />
      </div>
    </div>
  );
};

export default Topbar;
