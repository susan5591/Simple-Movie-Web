import React from 'react'
import '../css/movies.css'
import {data} from '../data'
import MovieList from './MovieList'
import { BrowserRouter ,Link } from 'react-router-dom'

const Movies = () => {
  const list = data
  return (
    <div className='movies'>
      <div className='flex-page'>
        <div className='movies'>
          <h2 className='heading'>Movies</h2>
        </div>
        <div className='serach'>
          <input className='search' type='text' placeholder='Search...'/>
        </div>
      </div>
      <div className='listing'>
        {
          list.map((item)=>{
            return <MovieList  key={item.id} {...item}/>
          })
        }
      </div>

    </div>
  )
}

export default Movies