import React, { useState } from "react";
import "../styling/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'


const Contact = () => {

  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",

  })

  const {name, email, phone, message}= query;

  const handleChange = (e) => {
    setQuery({...query,[e.target.name]:e.target.value})
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("http://localhost:1213/api/query", query)
    setQuery(data);
    alert('Your Query Submitted Succesfully')
  }


  return (
    <>
    <div className="container contact-form">
      <div className="side-bar">
        <div className="inner-div">
          <div className="phone-call">
            <div className="phone-icone">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <p>Call To Us</p>
          </div>
          <div className="para-number">
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
          <div className="underline"></div>
          <div className="phone-call">
            <div className="phone-icone">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <p>Call To Us</p>
          </div>
          <div className="para-number">
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
      </div>
        <form onSubmit={onSubmit}>
      <div className="contact-side">
        <div className="inner-contact">
            <div className="first-input">
              <input type="text" name="name" value={name} onChange={handleChange} placeholder="Your Name" required/>
              <input type="email" name="email" value={email} onChange={handleChange} placeholder="Your Mail" required/>
              <input type="text" name="phone" value={phone} onChange={handleChange} placeholder="Your Phone" required/>
            </div>
            <div className="second-text">
              <textarea name="message" value={message} onChange={handleChange} cols="30" rows="10" placeholder="Your Message" required></textarea>
            </div>
            <div className="message-but">
              <button>Send Message</button>
            </div>
        </div>
      </div>
        </form>
    </div>
    </>
  );
};

export default Contact;
