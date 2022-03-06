import React,{useContext} from 'react'
import {AppContext} from '../context'
import '../css/poster.css'

const WatchList = () => {
  const {watch} =  useContext(AppContext)
  const newData = new Set(watch.map((item)=>item))
  // console.log(newData)
  const arr = Array.from(newData)

  console.log(arr)

  return (
    <div className='poster'>
      {
        arr.map((item)=>{
          return <div className='poster-under'>
              <img src={item.poster} alt='watchlist poster' />
            </div>
        })
      }
    </div>
  )
}

export default WatchList