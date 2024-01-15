import React, { useState } from 'react';
import '../styling/counter.css'

const Counter = () => {

    const [counter, setCounter] = useState(1)

    const handleAdd =  () => {
        setCounter(counter + 1);
    }

    const handleMinus = () => {
        setCounter(counter - 1);
    }


  return (
    <div className='counter'>
        <button onClick={handleMinus}>-</button>
        <p>{counter}</p>
        <button onClick={handleAdd}>+</button>
    </div>
  )
}

export default Counter