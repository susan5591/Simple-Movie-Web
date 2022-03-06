import React, { useState, useEffect } from 'react'
import {data} from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [watch,setWatch] = useState([])
    // console.log(watch)
    return (
        <AppContext.Provider value={{data,watch,setWatch}}>
          {children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider}