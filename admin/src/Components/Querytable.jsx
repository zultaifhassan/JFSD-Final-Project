import React, { useEffect, useState } from "react";
import "../Stylings/Producttable.css";
import { CiSearch } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { LiaEdit } from "react-icons/lia";
import axios from "axios";

const Querytable = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:1213/api/query");
    console.log(response)
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:1213/api/query/${id}`);
    fetchProducts();
  };

  return (
    <div className="producttable">
      <div className="tableoverlay">
        <div className="searchbar">
          <h3>Quries List</h3>
          <div className="search-input">
            <input type="text" placeholder="Search" />
            <CiSearch />
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Message</td>
              <td>Action</td>
            </tr>
          </thead>
          {products.length > 0 &&
            products.map((item) => (
              <tbody key={item.name}>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.message}</td>
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
      </div>
    </div>
  );
};

export default Querytable;
