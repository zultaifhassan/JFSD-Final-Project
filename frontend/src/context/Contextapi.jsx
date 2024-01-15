import React, { createContext, useContext, useState } from 'react';

const themecontext=createContext()

const PracticeContextApi = ({childeren}) => {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev==="light"?"dark":"light"))
    }

    return (
        <themecontext.Provider value={{theme, toggleTheme}}>
            {childeren}
        </themecontext.Provider>
    )
}


export default PracticeContextApi

export function ChangeTheme(){
    return useContext(themecontext);
}