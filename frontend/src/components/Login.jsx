import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:1213/api/login", formData);
      alert('User logged in successfully!');
      if(response.role === "admin") {
        navigate('/Admin')
      } else {
        navigate('/Customer')

      }

    } catch (error) {
      alert('Error during login');
    }
  };


  return (
    <>
      <div className="signup-form">
        <div className="iamge-side">
          <img src="/Images/dl.beatsnoop 1.png" alt="" />
        </div>

        <div className="form-side login-form">
        <form onSubmit={handleLogin}>
          <h2>Log in to Ibex Store</h2>
          <p>Enter your details below</p>
          <div className="input-tags">
            <input type="text" name="email" onChange={handleInputChange} placeholder="Email or Phone Number" required />
            <input type="password" name="password" onChange={handleInputChange} placeholder="Password" required />
          </div>
          <div className="login-buttons">
            <button>Log In</button>
            <Link to="/">Forget Password?</Link>
          </div>
        </form>
        </div>
      </div>
    </>
  );
};

export default Login;
