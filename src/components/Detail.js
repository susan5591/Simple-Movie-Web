import React from 'react'
import '../css/details.css'

const Detail = ({temp}) => {
  console.log(temp)
  const {name,Genre,screenshots,videocard,poster,details,duration} = temp

  return (
    <div>        
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
  )
}

export default Detail