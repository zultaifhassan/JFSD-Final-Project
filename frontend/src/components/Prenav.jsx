import React from 'react';
import {Link} from 'react-router-dom';
import '../styling/Prenav.css';

const Prenav = () => {
  return (
    <div className='prenav'>
        <div className="container">

        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <Link to="/">ShopNow</Link>
        </div>
    </div>
  )
}

export default Prenav