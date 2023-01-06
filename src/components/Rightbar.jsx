import React from 'react'
import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Rightbar = () => {
  return (
    <div className='fixed right-0 top-20 h-[86%] border-l flex flex-col items-center justify-between pb-5 px-1'>
      <div className='top space-y-3'>
        <div className='p-3 rounded-full hover:bg-black/[0.05] cursor-pointer'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/768px-Google_Calendar_icon_%282020%29.svg.png" alt="" className='w-5 h-5'/>
        </div>
        <div className='p-3 rounded-full hover:bg-black/[0.05] cursor-pointer'>
            <img src="https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png" alt="" className='w-5 h-5'/>
        </div>
        <div className='p-3 rounded-full hover:bg-black/[0.05] cursor-pointer'>
            <img src="https://play-lh.googleusercontent.com/pjUulZ-Vdo7qPKxk3IRhnk8SORPlgSydSyYEjm7fGcoXO8wDyYisWXwQqEjMryZ_sqK2" alt="" className='w-5 h-5'/>
        </div>
        <div className='p-3 rounded-full hover:bg-black/[0.05] cursor-pointer flex items-center justify-center'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Google_Contacts_icon_%282022%29.svg/1733px-Google_Contacts_icon_%282022%29.svg.png" alt="" className='w-4 h-5'/>
        </div>
      </div>
      <div className='middle'>
        <IconButton>
            <AddIcon/>
        </IconButton>
      </div>
      <div className='bottom'>
      <IconButton>
            <ChevronRightIcon/>
        </IconButton>
      </div>
    </div>
  )
}

export default Rightbar
