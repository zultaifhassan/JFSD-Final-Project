import React from "react";
import "../styling/About.css";
import Teamslider from "./Teamslider";
import Seervice from "./Seervice";


const About = () => {
  return (
    <>
    <div className="about-store">
      <div className="history">
        <h1>Our Story</h1>
        <div className="para-side">
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millions customers
            across the region.
          </p>
          <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
      </div>
      <div className="about-img">
        <img src="/Images/about.png" alt="" />
      </div>
    </div>

    <div className="customerboxes container">
      <div className="box">
        <h2>10.5k</h2>
        <h5>Sallers active our site</h5>
      </div>
      <div className="box">
      <h2>33k</h2>
        <h5>Mopnthly Produduct Sale</h5>
      </div>
      <div className="box">
      <h2>44.5k</h2>
        <h5>Customer active in our site</h5>
      </div>
      <div className="box">
      <h2>25k</h2>
        <h5>Anual gross sale in our site</h5>
      </div>
    </div>

    <div className="team-members">
      <Teamslider />
    </div>
    <div className="services">
      <Seervice />
    </div>
    </>
  );
};

export default About;
