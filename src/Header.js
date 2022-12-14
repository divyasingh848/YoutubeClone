import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header(){

    const [InputSearch, setInputSearch] = useState(" ");
    return(
        <div className='header'>
           <div className='header__left'>
            <MenuIcon/>
            <Link to={`/`}>
            <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt=''/>
            </Link>
           </div>
           
           <div className='header__input'>  
            <input type="text" onChange={e => setInputSearch(e.target.value)} value={InputSearch} placeholder='Search'/>
            <Link to={`/search/${InputSearch}`}>
            <SearchIcon className='header__inputButton'/>
            </Link>
            {/* <div className='header__mic'><MicIcon /></div> */}
           </div>
          

           <div className='header__icons'>
            <VideoCallIcon className='header__icon'/>
            <AppsIcon className='header__icon'/>
            <NotificationsIcon className='header__icon'/>
            <AccountCircleIcon className='header__icon'/>
           </div>
        </div>
    )
}

export default Header;