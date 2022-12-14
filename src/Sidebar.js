import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WhatshotRoundedIcon from '@mui/icons-material/WhatshotRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import ThumbUpOffAltRoundedIcon from '@mui/icons-material/ThumbUpOffAltRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

function Sidebar(){
    return(
      <div className='Sidebar'>

        <SidebarRow selected Icon={HomeRoundedIcon} title="Home"/>
        <SidebarRow Icon={WhatshotRoundedIcon} title="Trending"/>
        <SidebarRow Icon={SubscriptionsRoundedIcon} title="Subscription"/>
        <hr></hr>

        <SidebarRow Icon={VideoLibraryRoundedIcon} title="Library"/>
        <SidebarRow Icon={HistoryRoundedIcon} title="History"/>
        <SidebarRow Icon={WatchLaterRoundedIcon} title="Watch Later"/>
        <SidebarRow Icon={ThumbUpOffAltRoundedIcon} title="Liked Videos"/>
        <SidebarRow Icon={ExpandMoreRoundedIcon} title="Show More"/>
        <hr></hr>

      </div> 
    )
}

export default Sidebar;