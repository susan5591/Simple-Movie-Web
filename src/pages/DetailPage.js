import React from 'react'
import { useParams } from 'react-router-dom'
import '../css/details.css'
import {data} from '../data'

const DetailPage = () => {
  const {tempId}= useParams()
  console.log(tempId)
  const {name,Genre,screenshots,videocard,poster,details,duration} = data
  return (
    <div className='details'>
      <div className='flex-page'>
        <div className='movies'>
          <h2 className='heading'>Movie Details</h2>
        </div>
        <div className='add-watchlist'>
          <button>Add to WatchList</button>
        </div>
      </div>

      <div className='detail-div'>
        <div className='big-pic'>

        </div>
        <div className='left-side'>
          <div className='small-two'>
            <div className='detail-cast'>

            </div>
            <div className='video-cart'>

            </div>
          </div>
          <div className='screenshots'>

          </div>
        </div>        
      </div>     
    </div>
  )
}

export default DetailPage