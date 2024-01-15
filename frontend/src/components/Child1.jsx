import React from 'react'
import { ChangeTheme } from '../context/Contextapi.jsx';

const Child1 = () => {
    const {theme, toggleTheme} = ChangeTheme();
  return (
    <div>
        <button onClick={toggleTheme}>
            Change Theme
        </button>
        <p>
            Text Change: {theme};
        </p>
    </div>
  )
}

export default Child1