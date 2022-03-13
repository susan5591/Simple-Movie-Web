import React from 'react'
import {Link} from 'react-router-dom'
import '../css/movielist.css'

const MovieList = (item) => {
    //console.log(item)
    const {id,poster} = item
    return (
        <div key={id} className='movie-list'>
            <div className='list-movie'>
                <Link to={`/${id}`}><img src={poster} alt='logo' /></Link>
            </div>
        </div>
    )
}

export default MovieList