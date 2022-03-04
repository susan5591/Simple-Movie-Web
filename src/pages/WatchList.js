import React,{useContext} from 'react'
import watchContext from './DetailPage'

const WatchList = () => {
  const watch =  useContext(watchContext)
  console.log(watch)
  return (
    <div>susan</div>
  )
}

export default WatchList