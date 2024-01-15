import React from 'react'
import Slider from './Slider'
import Seervice from './Seervice'
import Productslider from './Productslider'
import Category from './Category'
import SaleProductslider from './Saleproduct'
import NewProducts from './Newproducts'


const Home = () => {
  return (
    <div>
        <Slider />
        <Productslider />
        <NewProducts />
        <SaleProductslider />
        <Category />
        <Seervice />
    </div>
  )
}

export default Home