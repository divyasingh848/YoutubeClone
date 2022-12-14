import React from 'react'
import './VideoRow.css'
import { Avatar } from '@mui/material'

function VideoRow({image, title, timestamp, channel, views, desc }) {
  return (
   <div className='videoRow'>
    <div className='videoRow__first'> 
         <Avatar
             alt={channel}
             className="video__avatar"
             src={image}
         />
     </div>

    <div className='videoRow__second'>
        <h3>{title}</h3>
        <p>{views} . {timestamp}</p>
        <p>{desc}</p>
    </div> 
 </div>
  )
}

export default VideoRow