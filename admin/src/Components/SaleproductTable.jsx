import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Stylings/Producttable.css";
import { CiSearch } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { LiaEdit } from "react-icons/lia";
import axios from "axios";




const SaleproductTable = () => {
  // const { id } = useParams
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get(
      "http://localhost:1213/api/sale"
    );
    setProducts(response.data);
  };
  useEffect(() => {

    fetchProducts();
  }, [fetchProducts]);

  const deleteItem = async (id) => {
    await axios
      .delete(`http://localhost:1213/api/sale/${id}`)
      .then((response) => {
        fetchProducts();
      });
  };

  return (
    <div className="producttable">
      <div className="tableoverlay">
        <div className="searchbar">
          <h3>Sale Products List</h3>
            <Link to='/productlist'><button>Product Table</button></Link>
          <div className="search-input">
            <input type="text" placeholder="Search" />
            <CiSearch />
          </div>
        </div>

        <table>
          <thead>
            <tr>
              {/* <td>ID</td> */}
              <td>ID</td>
              <td>Tiltle</td>
              <td>Old Price</td>
              <td>New Price</td>
              <td>Discount</td>
              <td>Action</td>
            </tr>
          </thead>
          {products.length>0 && products.map((items) => {
            return (
              <tbody>
                <tr>
                  {/* <td>{items._id}</td> */}
                  <td>{items._id}</td>
                  <td>{items.title}</td>
                  <td>${items.price}</td>
                  <td>${items.newprice}</td>
                  <td>-{items.percentage}%</td>
                  <td className="Delete-icon">
                    <AiOutlineDelete onClick={() => deleteItem(items._id)} className="delete-i" />
                    <LiaEdit className="edit-i" />
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
        <Link to='/saleform'><button>Add More Products</button></Link>
      </div>
    </div>
  );
};

export default SaleproductTable;
