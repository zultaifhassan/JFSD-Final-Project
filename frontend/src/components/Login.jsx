import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="signup-form">
      <div className="iamge-side">
        <img src="/Images/dl.beatsnoop 1.png" alt="" />
      </div>
      <div className="form-side login-form">
        <h2>Log in to Ibex Store</h2>
        <p>Enter your details below</p>
        <div className="input-tags">
          <input type="text" placeholder="Email or Phone Number" />
          <input type="text" placeholder="Password" />
        </div>
        <div className="login-buttons">
          <button>Log In</button>
              <Link to="/">
                Forget Password?
              </Link>
        </div>
      </div>
    </div>
  )
}

export default Login