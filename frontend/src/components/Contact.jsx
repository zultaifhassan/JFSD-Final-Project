import React from "react";
import "../styling/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
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
      <div className="contact-side">
        <div className="inner-contact">
            <div className="first-input">
              <input type="text" placeholder="Your Name"/>
              <input type="email" placeholder="Your Mail"/>
              <input type="text" placeholder="Your Phone"/>
            </div>
            <div className="second-text">
              <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            </div>
            <div className="message-but">
              <button>Send Message</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
