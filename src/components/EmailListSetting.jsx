import React from 'react'
import { IconButton } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTheme } from '../features/themeSlice';
const EmailListSetting = ({Icon}) => {
  const theme=useSelector(selectTheme);
  const navigate=useNavigate()
  return (
    <div className={`flex items-center justify-between w-full ${theme==="dark"?"":"border-b"} ${theme}`}>
      <div className={`left dark:text-white`}>
      <IconButton onClick={()=>{navigate(-1)}} color={theme==="dark"?"inherit":""}>
            <Icon/>
        </IconButton>
        <IconButton color={theme==="dark"?"inherit":""}>
            <RefreshIcon/>
        </IconButton>
        <IconButton color={theme==="dark"?"inherit":""}>
            <MoreVertIcon/>
        </IconButton>   
      </div>
      <div className='right flex items-center justify-between space-x-4 dark:text-white'>
        <p className='text-gray-600 dark:text-white'>1-50 of 23,542</p>
        <div className='space-x-4 dark:text-white'>
            <IconButton color={theme==="dark"?"inherit":""}>
                <ChevronLeftIcon/>
            </IconButton>
            <IconButton color={theme==="dark"?"inherit":""}>
                <ChevronRightIcon/>
            </IconButton>
        </div>
      </div>
    </div>
  )
}

export default EmailListSetting
