import React from 'react'
import './SearchPage.css';
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className='SearchPage'>
      {/* <h1>Search Page</h1> */}
        <div className='SearchPage_filter'>
            <TuneIcon/>
            <h3>Filter</h3>
        </div>   
            <hr/>
            <ChannelRow 
            image="https://i.pravatar.cc/150?img=3"
            channel="Games"
            Verified
            subs="700K"
            noofVid="102"
            desc="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "/>
            <hr/>
            
            <VideoRow 
             title="Video 1"
             channel= "Game"
             views="1.2M"
             timestamp="3 days"
             channelImage="https://img.youtube.com/vi/aJ0SK8ipbVQ/hqdefault.jpg"
             image='https://img.youtube.com/vi/aJ0SK8ipbVQ/hqdefault.jpg'
             desc='lorem ipsum lorem ipsum...'
           />
       
        {/* <hr/> */}
    </div>
  )
}

export default SearchPage