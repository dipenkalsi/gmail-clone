import React from 'react'
import { IconButton } from '@mui/material'
import CropSquareIcon from '@mui/icons-material/CropSquare';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantSharpIcon from '@mui/icons-material/LabelImportantSharp';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {openMessage} from '../features/mailSlice'

const EmailCard = ({name , subject , body , timestamp , from , senderName , senderPhoto ,to}) => {
  const location=useLocation()
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const setMail=()=>{
    dispatch(openMessage({
      name,
      subject,
      body,
      timestamp,
      from,
      senderName,
      senderPhoto,
      to
    }))
    // navigate("/mail")
  }
  return (
    <div className='border-b hover:shadow-md  cursor-pointer transition-all ease-in duration-150 flex justify-between items-center px-3 hover:bg-gray-50 py-0.5' onClick={setMail}>
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
        <p className='font-bold text-sm'>{location.pathname==="/"?name:to}</p>
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
