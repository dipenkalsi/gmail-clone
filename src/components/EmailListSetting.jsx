import React from 'react'
import { IconButton } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const EmailListSetting = () => {
  return (
    <div className='flex items-center justify-between w-full border-b '>
      <div className='left'>
      <IconButton>
            <CheckBoxOutlineBlankIcon/>
        </IconButton>
        <IconButton>
            <RefreshIcon/>
        </IconButton>
        <IconButton>
            <MoreVertIcon/>
        </IconButton>   
      </div>
      <div className='right flex items-center justify-between space-x-4'>
        <p className='text-gray-600'>1-23,321</p>
        <div className='space-x-4'>
            <IconButton>
                <ChevronLeftIcon/>
            </IconButton>
            <IconButton>
                <ChevronRightIcon/>
            </IconButton>
        </div>
      </div>
    </div>
  )
}

export default EmailListSetting
