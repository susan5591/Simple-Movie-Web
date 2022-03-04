import React,{useContext} from 'react'
import { AppContext } from '../context'

const WatchList = () => {
  const {watch} =  useContext(AppContext)
  console.log(watch)
  return (
    <div></div>
  )
}

export default WatchList