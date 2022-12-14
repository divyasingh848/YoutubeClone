import React from 'react'
import './ChannelRow.css'
import { Avatar } from '@mui/material';

function ChannelRow({image, channel, verified, subs, noofVid, desc}) {
  return (
    <div className='ChannelRow'>
       <div className='ChannelRow__first'> 
            <Avatar
                alt={channel}
                className="video__avatar"
                src={image}
            /> {verified} 
        </div>

       <div className='ChannelRow__second'>
        <h3>{channel}</h3>
        <p>{subs} . {noofVid}</p>
        <p>{desc}</p>
       </div> 
    </div>
  )
}

export default ChannelRow