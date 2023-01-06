import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import TuneIcon from '@mui/icons-material/Tune';
import AppsIcon from '@mui/icons-material/Apps';
const Header = () => {
  return (
    <div className='header flex items-center justify-between px-2 py-3 border-b fixed top-0 w-full z-20 bg-white'>
      <div className='header_left flex items-center justify-center w-fit'>
        <IconButton><MenuIcon/></IconButton>
        <div className='flex items-center justify-center space-x-4 ml-2 cursor-pointer'>
        <img src="https://lh3.googleusercontent.com/0rpHlrX8IG77awQMuUZpQ0zGWT7HRYtpncsuRnFo6V3c8Lh2hPjXnEuhDDd-OsLz1vua4ld2rlUYFAaBYk-rZCODmi2eJlwUEVsZgg" alt="" className='h-10 w-auto' />
        <p className='text-2xl text-gray-500 font-normal'>Gmail</p>
        </div>
      </div>
      <div className='header_middle w-1/2 shadow-sm bg-indigo-50 py-1 px-1 rounded-lg'>
        <div className='search_mail w-full flex items-center'>
          <IconButton>
            <SearchIcon/>
          </IconButton>
          <input type="text" placeholder='Search in mail' className='ml-1 focus:ring-0 focus:outline-0 w-[85%] bg-transparent text-gray-600'/>
          <IconButton>
            <TuneIcon/>
          </IconButton>
        </div>
        </div>
        <div className='header_right'>
          <div className='icons_box flex items-center justify-center space-x-1.5'>
          <IconButton>
            <HelpOutlineIcon/>
          </IconButton>
          <IconButton>
            <SettingsIcon/>
          </IconButton>
          <IconButton>
            <AppsIcon/>
          </IconButton>
          
          <div className='p-1 hover:bg-black/[0.1] w-fit rounded-full cursor-pointer'>
          <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className='w-9 h-9 rounded-full object-cover' />
          </div>  
          </div>
        </div>
      
    </div>
  )
}

export default Header
