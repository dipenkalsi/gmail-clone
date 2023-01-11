import React,{useEffect} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsIcon from '@mui/icons-material/Settings';
import TuneIcon from '@mui/icons-material/Tune';
import { switchTheme } from '../features/themeSlice';
import AppsIcon from '@mui/icons-material/Apps';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, signOut } from '../features/userSlice';
import { selectTheme } from '../features/themeSlice';
const Header = () => {
  const user=useSelector(selectUser);
  const theme=useSelector(selectTheme);

  const dispatch = useDispatch()
  return (
    <div className={`${theme}`}>
    <div className={`header flex items-center justify-between px-2 py-3 border-b fixed top-0 w-full z-40 bg-white dark:bg-[#0d0d0d] ${theme}`}>
      <div className='header_left flex items-center justify-center w-fit dark:text-white'>
        <IconButton color={theme==="dark"?'inherit':""}><MenuIcon/></IconButton>
        <div className='flex items-center justify-center space-x-4 ml-2 cursor-pointer'>
        <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png" alt="" className='h-7 w-auto dark:invert' />
        </div>
      </div>
      <div className='header_middle w-1/2 shadow-sm bg-gray-100 dark:bg-gray-800  py-1 px-1 rounded-lg'>
        <div className='search_mail w-full flex items-center dark:text-white'>
          <IconButton color={theme==="dark"?'inherit':""}>
            <SearchIcon/>
          </IconButton>
          <input type="text" placeholder='Search in mail' className='dark:text-white dark:placeholder:text-gray-100 ml-1 focus:ring-0 focus:outline-0 w-[85%] bg-transparent text-gray-600'/>
          <IconButton color={theme==="dark"?'inherit':""}>
            <TuneIcon/>
          </IconButton>
        </div>
        </div>
        <div className='header_right'>
          <div className='icons_box flex items-center justify-center space-x-1.5 dark:text-white'>
          <IconButton onClick={()=>dispatch(switchTheme())} color={theme==="dark"?'inherit':""} >
            {theme==="light"?<DarkModeIcon/>:<LightModeIcon/>}
          </IconButton>
          <IconButton color={theme==="dark"?'inherit':""}>
            <SettingsIcon/>
          </IconButton>
          <IconButton color={theme==="dark"?'inherit':""}>
            <AppsIcon/>
          </IconButton>
          
          <div className='p-1 hover:bg-black/[0.1] w-fit rounded-full cursor-pointer'>
          <img src={user?.photoURL} alt="" className='w-9 h-9 rounded-full object-cover' onClick={()=>dispatch(signOut())} />
          </div>  
          </div>
        </div>
      
    </div>
    </div>
  )
}

export default Header
