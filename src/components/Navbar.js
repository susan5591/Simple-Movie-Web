import React from 'react'
import { BrowserRouter ,Link } from 'react-router-dom'
import {MdPerson} from 'react-icons/md';
import '../css/navbar.css'

const Navbar = () => {
  return (
      <div className='navbar'>
          <div className='nav-links'>
              <ul>
                  <li><Link to='/'>Movies</Link></li>
                  <li><Link to='/watchlist'>WatchList</Link></li>
              </ul>
          </div>
          <div>
              <MdPerson className='icon'/>
          </div>
      </div>
  )
}

export default Navbar