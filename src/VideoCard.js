import React from 'react';
import './VideCard.css';
import { Avatar } from '@mui/material';

function VideoCard({image, title, timestamp, channel, views, channelImage }) {
  return (
    <div className='videoCard'>
        <img className='videoCard__Thumbnail' src={image} alt=""/>
        <div className='videoCard__info'>
            {/* <AccountCircleOutlinedIcon className="video__avatar" alt={channel} src={channelImage} /> */}
            <Avatar
  alt={channel}
  className="video__avatar"
  src={channelImage}
/>
            <div className='video__text'>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} . {timestamp}
                </p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard