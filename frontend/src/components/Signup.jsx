import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styling/Form.css";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = signup;

  const onHandle = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("http://localhost:1213/api/user", signup);
    setSignup(data);
    alert("Signup successful");
    navigate('/Login')
  };

  return (
    <>
      <div className="signup-form">
        <div className="iamge-side">
          <img src="/Images/dl.beatsnoop 1.png" alt="" />
        </div>
        <div className="form-side">
          <form onSubmit={onSubmit}>
            <h2>Create an account</h2>
            <p>Enter your details below</p>
            <div className="input-tags">
              <input
                type="text"
                name="name"
                value={name}
                onChange={onHandle}
                placeholder="Name"
                required
              />
              <input
                type="text"
                onChange={onHandle}
                name="email"
                value={email}
                placeholder="Email or Phone Number"
                required
              />
              <input
                type="password"
                value={password}
                name="password"
                onChange={onHandle}
                placeholder="Password"
                required
              />
            </div>
            <div className="form-buttons">
              <button>Create Account</button>
              <div className="google-but">
                {/* <Link to="//https://mail.google.com">
                  <button>
                    <img src="/Images/Icon-Google.png" alt="" />
                    <p>Sign up with Google</p>
                  </button>
                </Link> */}
              </div>
            </div>
          </form>
          <div className="login-link">
            <p>
              Already have account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
