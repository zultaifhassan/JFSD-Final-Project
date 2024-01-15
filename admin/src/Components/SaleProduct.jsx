import React from "react";
import axios from "axios";
import { useState } from "react";
import '../Stylings/Addproduct.css'

const SaleProduct = () => {
  const [saleProduct, setSaleProduct] = useState({
    title: "",
    price: "",
    newprice: "",
    percentage: "",
  });

  const {title, price, newprice, percentage} =  saleProduct;

  const onHandle = (e) => {
    setSaleProduct({...saleProduct,[e.target.name]:e.target.value})
  }


  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("http://localhost:1213/api/sale", saleProduct)
    setSaleProduct(data);
    alert('Sale Product Added Successfully')
  }

  return (
    <div className="addproduct">
      <form onSubmit={onSubmit}>
      <h1>Add Product</h1>
        <input type="text" name="title" value={title} onChange={onHandle} placeholder="Product Name" required />
        <input type="text" name="price" value={price} onChange={onHandle} placeholder="Old Price" required />
        <input type="text" name="newprice" value={newprice} onChange={onHandle} placeholder="New Price" required />
        <input type="text" name="percentage" value={percentage} onChange={onHandle} placeholder="Percentage" required />
        {/* <input type="file" name="image" value={image} onChange={onHandle} /> */}
        <button>Add Product</button>
      </form>
    </div>
  );
};

export default SaleProduct;
