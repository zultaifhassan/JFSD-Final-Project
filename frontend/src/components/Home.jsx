import React from 'react'
import Slider from './Slider'
import Seervice from './Seervice'
import Productslider from './Productslider'
import Category from './Category'

const Home = () => {
  return (
    <div>
        <Slider />
        <Productslider />
        <Category />
        <Seervice />
    </div>
  )
}

export default Home