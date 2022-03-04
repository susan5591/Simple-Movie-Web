import React, { useState, useContext } from 'react'
import {data} from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [watch,setWatch] = useState([])
    return (
        <AppContext.Provider value={{data,watch,setWatch}}>
          {children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider}