import React from 'react'
import { IconButton } from '@mui/material'
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ImageIcon from '@mui/icons-material/Image';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import './compose.css';
const Compose = () => {
  return (
    <div className='fixed bottom-0 right-14 border bg-[#ffffff] z-20 shadow-md rounded-t-xl h-[72%] w-[40%]'>
      <div className='header rounded-t-xl w-full bg-gray-800 text-white text-sm flex pl-3 items-center justify-between'>
        <div>
          <p className='font-semibold text-gray-100 font-mono'>New Message</p>
        </div>
        <div className='flex items-center justify-center text-gray-400'>
          <div className='px-3 h-8 flex items-center justify-center hover:bg-indigo-200 hover:text-black  cursor-pointer transition-all ease-in duration-150'>
            <MinimizeIcon fontSize='tiny'/>
          </div>
          <div className='px-3 h-8 flex items-center justify-center hover:bg-indigo-200 hover:text-black  cursor-pointer transition-all ease-in duration-150'>
            <OpenInFullIcon fontSize='tiny'/>
          </div>
          <div className='px-3 h-8 flex items-center justify-center hover:bg-red-700 hover:text-white hover:rounded-tr-xl cursor-pointer transition-colors ease-in duration-150'>
            <CloseIcon fontSize='tiny'/>
          </div> 
        </div>
      </div>
      <div className='body'>
        <input type="email" placeholder='Recipients' className='w-[95%] focus:ring-0 focus:outline-0 border-b mx-3 font-medium placeholder:text-red-300 text-red-600 py-1 mt-1 text-sm font-mono bg-transparent border-gray-400'/>
        <input type="text" placeholder='Subject' className='w-[95%] focus:ring-0 focus:outline-0 border-b mx-3 font-medium  py-1 mt-1 text-sm  text-gray-600 font-mono bg-transparent border-gray-400'/>
        <textarea placeholder='Message body' className='w-[95%] focus:ring-0 focus:outline-0  mx-3 font-mono text-gray-500 py-1 mt-1 text-sm example bg-transparent' rows="13" style={{resize:"none"}} />
      </div>
      <div className='footer mt-2 flex'>
        <div className='left px-3'>
          <button type='submit' className='bg-blue-700 px-5 py-2 text-white rounded-l-md hover:bg-blue-800 transition-all ease-in duration-150 text-sm font-semibold'>Send</button>
          <button className='bg-blue-700 px-1 pb-1.5 pt-[5.5px] text-white rounded-r-md border-l border-black hover:bg-blue-800 transition-all ease-in duration-150'><ArrowDropDownIcon fontSize='small'/></button>
        </div>
        
        <div className='middle flex '>
          <IconButton size=''>
            <FormatUnderlinedIcon fontSize='small'/>
          </IconButton>
          <IconButton size='' >
            <AttachFileIcon fontSize='small'/>
          </IconButton>
          <IconButton size=''>
            <LinkIcon fontSize='small'/>
          </IconButton>
          <IconButton size=''>
            <InsertDriveFileIcon fontSize='small'/>
          </IconButton>
          <IconButton size=''>
            <InsertEmoticonIcon fontSize='small'/>
          </IconButton>
          <IconButton size=''>
            <ImageIcon fontSize='small'/>
          </IconButton>
          <IconButton size=''>
            <AddToDriveIcon fontSize='small'/>
          </IconButton>
          <IconButton size=''>
            <AutoFixHighIcon fontSize='small'/>
          </IconButton>
        </div>
        <div className='right absolute right-3'>
        <IconButton size=''>
            <MoreVertIcon fontSize='small'/>
          </IconButton>
        <IconButton size=''>
            <DeleteIcon fontSize='small'/>
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Compose
