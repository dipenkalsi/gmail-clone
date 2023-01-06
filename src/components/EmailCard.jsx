import React from 'react'
import { IconButton } from '@mui/material'
import CropSquareIcon from '@mui/icons-material/CropSquare';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantSharpIcon from '@mui/icons-material/LabelImportantSharp';
const EmailCard = ({name , subject , body , timestamp}) => {
  return (
    <div className='border-b hover:shadow-md  cursor-pointer transition-all ease-in duration-150 flex justify-between items-center px-3 hover:bg-gray-50 py-0.5'>
      <div className='left flex items-center space-x-2'>
        <div className='text-gray-300'>
            <IconButton size='small' >
                <CropSquareIcon/>
            </IconButton>
            <IconButton size='small' >
                <StarBorderIcon/>
            </IconButton>
            <IconButton size='small' >
                <LabelImportantSharpIcon/>
            </IconButton>
        </div>
        <p className='font-bold text-sm'>{name}</p>
      </div>
      <div className='middle flex items-center justify-center'>
        <p className='font-bold text-sm '>{subject.length>90?subject.split("").slice(0,90).join(""):subject} </p>
        <p className='text-sm  font-semibold text-gray-500'> - {subject.length<=90?body.split("").slice(0,90-subject.length).join(""):""}...</p>
      </div>
      <div className='right'>
        <p className='font-bold text-sm'>{timestamp}</p>
      </div>
    </div>
  )
}

export default EmailCard
