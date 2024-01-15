// src/components/AddProduct.js
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../Stylings/Addproduct.css';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    price:"",
    weight: "",
    message: "",
    imageUrl: "",
    title: "",
  })

  const {price, imageUrl, title} =  formData;

  const onHandle = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const onSubmit = async (e) => {
    e.preventDefault(); 
    const data = await axios.post("http://localhost:1213/api/products", formData);
    console.log(data)
    alert('Product Added Successfully')
  }
  
  

  return (
    <div className="addproduct">
      <form onSubmit={onSubmit}>
        <h1>Add Product</h1>
        <input type="text" name="title" value={title} onChange={onHandle} placeholder="Product Name" required />
        <input type="text" name="price" value={price} onChange={onHandle} placeholder="Price" required />
        <input type="text" name="imageUrl" value={imageUrl} onChange={onHandle}  placeholder="Enter Image URL" required />
        <input type="file" />
        <button type="submit">Add Product</button>
        <Link to="/saleform">Sale on Products</Link>
      </form>
    </div>
  );
};

export default AddProduct;
