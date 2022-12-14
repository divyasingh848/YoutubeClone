import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos(){
    return(
      <div className='RecommendedVideos'>
        <h1>Recommended</h1>
      <div className='RecommendedVideos__videos'>
        <VideoCard 
          title="Video 1"
          channel= "Game "
          views="1.2M"
          timestamp="3 days"
          channelImage="https://img.youtube.com/vi/aJ0SK8ipbVQ/hqdefault.jpg"
          image='https://img.youtube.com/vi/aJ0SK8ipbVQ/hqdefault.jpg'
        />
        <VideoCard 
          title="Video 2"
          channel= "Game 2"
          views="66K"
          timestamp="3 days"
          channelImage="https://img.youtube.com/vi/DYdVXqXhWyw/hqdefault.jpg"
          image="https://img.youtube.com/vi/DYdVXqXhWyw/hqdefault.jpg"
        />
        <VideoCard 
          title="Video 5"
          channel= "Game 5"
          views="12M"
          timestamp="3 days"
          channelImage="https://img.youtube.com/vi/Qqx_wzMmFeA/hqdefault.jpg"
          image='https://img.youtube.com/vi/Qqx_wzMmFeA/hqdefault.jpg'
        />
        <VideoCard 
          title="Video 6"
          channel= "Game 6"
          views="3M"
          timestamp="3 days"
          channelImage='https://img.youtube.com/vi/mGdy5tBP_24/hqdefault.jpg'
          image='https://img.youtube.com/vi/mGdy5tBP_24/hqdefault.jpg'
        />
        <VideoCard 
          title="Video 7"
          channel= "Game 7"
          views="4M"
          timestamp="80 days"
          channelImage="https://img.youtube.com/vi/4qIU_yWHLUY/hqdefault.jpg"
          image='https://img.youtube.com/vi/06MyDEikYoM/hqdefault.jpg'
        />
       <VideoCard 
          title="Video 8"
          channel= "Game 8"
          views="9M"
          timestamp="12 days"
          channelImage="https://img.youtube.com/vi/06MyDEikYoM/hqdefault.jpg"
          image='https://img.youtube.com/vi/4qIU_yWHLUY/hqdefault.jpg'
        />
       <VideoCard 
          title="Video 9"
          channel= "Game 9"
          views="7M"
          timestamp="9 days"
          channelImage="https://img.youtube.com/vi/NT299zIk2JY/hqdefault.jpg"
          image='https://img.youtube.com/vi/NT299zIk2JY/hqdefault.jpg'
        />
         <VideoCard 
          title="Video 10"
          channel= "Game 10"
          views="12M"
          timestamp="3 days"
          channelImage="https://img.youtube.com/vi/Qqx_wzMmFeA/hqdefault.jpg"
          image='https://img.youtube.com/vi/Qqx_wzMmFeB/hqdefault.jpg'
        />
        <VideoCard 
          title="Video 11"
          channel= "Game 11"
          views="100"
          timestamp="3 days"
          channelImage='https://img.youtube.com/vi/mGdy5tBP_24/hqdefault.jpg'
          image='https://img.youtube.com/vi/mGdy5tBP_26/hqdefault.jpg'
        />
        <VideoCard 
          title="Video 12"
          channel= "Game 12"
          views="1K"
          timestamp="1 month"
          channelImage='https://img.youtube.com/vi/mGdy5tBP_12/hqdefault.jpg'
          image='https://img.youtube.com/vi/mGdy5tBP_20/hqdefault.jpg'
        />
        </div>
      </div> 
    )
}

export default RecommendedVideos;