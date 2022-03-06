import React,{useContext,useState} from 'react'
import { useParams } from 'react-router-dom'
import '../css/details.css'
import {AppContext} from '../context'
import Detail from '../components/Detail'
import Cast from '../components/Cast'

const DetailPage = () => { 
  const [display,setDisplay] = useState(true)
  const {data,watch,setWatch} = useContext(AppContext)
  const {id}= useParams()
  const temp = data.find((item)=>item.id===parseInt(id))
  const {poster} = temp
  const addWatchlist = ()=>{
    setWatch([...watch,temp])
    // console.log(watch)
  }   

  const changeDisplay= ()=>{
    setDisplay(true)
  }

  const changeCast=()=>{
    setDisplay(false)
  }

  return (
    <div className='details'>
    {/* first part */}
      <div className='flex-page'>
        <div className='movies'>
          <h2 className='heading'>Movie Details</h2>
        </div>
        <div className='add-watchlist'>
          <button onClick={addWatchlist}>Add to WatchList</button>
        </div>
      </div>
    {/* second part */}
      <div className='detail-div'>
        {/* left part */}
        <div className='big-pic'>
          <img src={poster} alt='poster' />
        </div>
        {/* right part */}
        <div className='left-side'>
          <div className='left-top'>
            <div className="inside-details">
              <button onClick={changeDisplay}>Details</button>
            </div>
            <div className="inside-details">
              <button onClick={changeCast}>Cast</button>
            </div>
          </div>
          {
            display?<Detail temp={temp}/>:<Cast {...temp}/>
          }       
        </div>        
      </div>     
    </div>
  )
}

export default DetailPage