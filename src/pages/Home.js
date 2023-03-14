import React from 'react'
import AppsIcon from '@mui/icons-material/Apps';
/*import AccountCircleIcon from '@mui/icons-material/AccountCircle';*/
import { Avatar } from '@mui/material';
import "./Home.css";
import Search from './Search.js'
import {Link} from 'react-router-dom'


function Home() {
  return (
    <div className='home'>
        <div className='home_header'>
            <div className='home_headerLeft'>
                <Link to ='/about'>About</Link>
                <Link to='/store'>Store</Link>
            </div>
            <div className='home_headerRight'>
              <Link to='/gmail'>Gmail</Link>
              <Link y0 ='/images'>Images</Link>
              <AppsIcon/>
              <Avatar/>
            </div>      
         </div>
         <div className="home_body">
              <img src="./images/g2.jpg" alt="logo"/>
            
            <div className='home_inputContainer'>
            
              <Search />
            </div>
         </div>
        
      
    </div>
  )
}

export default Home

