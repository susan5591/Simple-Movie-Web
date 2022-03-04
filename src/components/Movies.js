import React, { useState,useContext } from 'react'
import '../css/movies.css'
import {AppContext} from '../context'
import MovieList from './MovieList'
import { BrowserRouter ,Link } from 'react-router-dom'

const Movies = () => {
  const [search,setSerach] = useState('')
  console.log(search)
  const list = useContext(AppContext)
  const temp = list.filter((item)=>item.name.includes(search))
  return (
    <div className='movies'>
      <div className='flex-page'>
        <div className='movies'>
          <h2 className='heading'>Movies</h2>
        </div>
        <div className='serach'>
          <input 
            className='search' 
            type='text' 
            placeholder='Search...'
            value={search} 
            onChange={e=>setSerach(e.target.value)}
          />
        </div>
      </div>
      <div className='listing'>
        {
          search ?temp.map((item)=>{
            return <MovieList  key={item.id} {...item}/>
          }):list.map((item)=>{
            return <MovieList  key={item.id} {...item}/>
          })
        }
      </div>

    </div>
  )
}

export default Movies