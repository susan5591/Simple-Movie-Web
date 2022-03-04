import React,{useContext,useState} from 'react'
import { useParams } from 'react-router-dom'
import '../css/details.css'
import {AppContext} from '../context'
import {
  Link
} from "react-router-dom";

const DetailPage = () => {
  const [watch,setWatch] = useState([])
  const list = useContext(AppContext)
  const {id}= useParams()
  const temp = list.find((item)=>item.id===parseInt(id))
  const {name,Genre,screenshots,videocard,poster,details,duration} = temp
  const addWatchlist = ()=>{
    setWatch(poster)
    console.log(watch)
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
          {/* urls */}
          <div className='left-top'>
            <div className="inside-details">
              <Link to={`/${id}`}>Details</Link>
            </div>
            <div className="inside-details">
              <Link to={`/${id}/cast`}>Cast</Link>
            </div>
          </div>
          {/* middle title and video */}
          <div className='left-middle'>
              <div>
                <h2>{name}</h2>
                <p className='paragraph genre'>{Genre}</p>
                <p className='paragraph duration'>{duration}</p>
                <p>{details}</p>
              </div>
              <div className='videocart'>
                <img src={videocard} alt='videocard' />
              </div>
          </div>
          {/* screenshots */}
          <div className='left-bot'>
              <h1>screenshots</h1>
              <div className='screen-shots'>
                {
                  screenshots.map((item,index)=>{
                    return <img key={index} src={item} alt='screenshots'/>
                  })
                }
              </div>
          </div>          
        </div>        
      </div>     
    </div>
  )
}

export default DetailPage