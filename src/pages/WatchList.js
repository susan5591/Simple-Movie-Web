import React,{useContext} from 'react'
import {AppContext} from '../context'
import '../css/poster.css'
import {Link } from 'react-router-dom'


const WatchList = () => {
  const {watch,setWatch} =  useContext(AppContext)
  // const newData = new Set(watch.map((item)=>item))
  // const arr = Array.from(newData)
  //const arr = [...newData]

  const removeItem = (id) =>{
    const temp = watch.filter((item)=>item.id!==id)
    setWatch(temp)
    console.log(watch)
  }

  return (
    <div className='poster'>
      {
        watch.map((item,index)=>{
          return <div className='poster-under' key={index}>
              {/* <img src={item.poster} alt='watchlist poster' /> */}
              <Link to={`/${item.id}`}><img src={item.poster} alt='watchlist poster' /></Link>
              <button onClick={()=>removeItem(item.id)}>Remove</button>
            </div>
        })
      }
    </div>
  )
}

export default WatchList