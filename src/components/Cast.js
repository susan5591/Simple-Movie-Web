import React from 'react'
import '../css/cast.css'
const Cast = (temp) => {
  // console.log(temp)
  const {cast}=temp
  // console.log(cast)
  return (
    <div className='casting-top'>
      {
        cast.map((item,index)=>{
          return(
            <div className='small-img'>
              <img src={item.image} alt='cast' />
              <span className='cname'>{item.cname}</span>
            </div>         
          )
        })
      }
    </div>
  )
}

export default Cast