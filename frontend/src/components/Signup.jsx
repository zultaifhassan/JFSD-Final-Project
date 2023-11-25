import React from "react";
import { Link } from "react-router-dom";
import "../styling/Form.css";

const Signup = () => {
  return (
    <div className="signup-form">
      <div className="iamge-side">
        <img src="/Images/dl.beatsnoop 1.png" alt="" />
      </div>
      <div className="form-side">
        <h2>Create an account</h2>
        <p>Enter your details below</p>
        <div className="input-tags">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email or Phone Number" />
          <input type="text" placeholder="Password" />
        </div>
        <div className="form-buttons">
          <button>Create Account</button>
          <div className="google-but">
            <button>
              <Link to="/">
                <img src="/Images/Icon-Google.png" alt="" />
                <p>Sign up with Google</p>
              </Link>
            </button>
          </div>
        </div>
        <div className="login-link">
            <p>Already have account? <Link to="/login">Log in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
