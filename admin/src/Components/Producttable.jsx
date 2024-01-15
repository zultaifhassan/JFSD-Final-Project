import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Stylings/Producttable.css";
import { CiSearch } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { LiaEdit } from "react-icons/lia";
import axios from "axios";

const Producttable = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:1213/api/products");
    console.log(response)
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:1213/api/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="producttable">
      <div className="tableoverlay">
        <div className="searchbar">
          <h3>Products List</h3>
          <Link to="/saletable">
            <button>Sale Table</button>
          </Link>
          <div className="search-input">
            <input type="text" placeholder="Search" />
            <CiSearch />
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Image</td>
              <td>Title</td>
              <td>Price</td>
              <td>Action</td>
            </tr>
          </thead>
          {products.length > 0 &&
            products.map((item) => (
              <tbody key={item._id}>
                <tr>
                  <td>{item._id}</td>
                  <img
                     src={item.imageUrl}
                     alt={item.title}
                     width="40"
                     height="40"
                  />
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td className="Delete-icon">
                    <AiOutlineDelete
                      onClick={() => deleteItem(item._id)}
                      className="delete-i"
                    />
                    <LiaEdit className="edit-i" />
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
        <Link to="/product">
          <button>Add More Products</button>
        </Link>
      </div>
    </div>
  );
};

export default Producttable;
