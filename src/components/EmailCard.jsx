import React from 'react'
import { IconButton } from '@mui/material'
import CropSquareIcon from '@mui/icons-material/CropSquare';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantSharpIcon from '@mui/icons-material/LabelImportantSharp';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {openMessage} from '../features/mailSlice'
import { useSelector } from 'react-redux';
import { selectTheme } from '../features/themeSlice';

const EmailCard = ({name , subject , body , timestamp , from , senderName , senderPhoto ,to}) => {
  const theme=useSelector(selectTheme);
  const location=useLocation()
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
  }
  return (
    <div className={`border-b hover:shadow-md  cursor-pointer transition-all ease-in duration-150 flex justify-between items-center px-3 ${theme==="dark"?"dark:hover:bg-gray-800 shadow-white":""} hover:bg-gray-50 py-0.5 ${theme}`} onClick={setMail}>
      <div className='left flex items-center space-x-2'>
        <div className='text-gray-300 dark:text-white'>
            <IconButton size='small' color={theme==="dark"?"inherit":""} >
                <CropSquareIcon/>
            </IconButton>
            <IconButton size='small' color={theme==="dark"?"inherit":""}  >
                <StarBorderIcon/>
            </IconButton>
            <IconButton size='small' color={theme==="dark"?"inherit":""}  >
                <LabelImportantSharpIcon/>
            </IconButton>
        </div>
        <p className='font-bold text-sm dark:text-white'>{location.pathname==="/"?name:to}</p>
      </div>
      <div className='middle flex items-center justify-center'>
        <p className='font-bold text-sm dark:text-white'>{subject.length>90?subject.split("").slice(0,90).join(""):subject} </p>
        <p className='text-sm  font-semibold text-gray-500 dark:text-gray-300'> - {subject.length<=90?body.split("").slice(0,90-subject.length).join(""):""}...</p>
      </div>
      <div className='right'>
        <p className='font-bold text-sm dark:text-white'>{timestamp}</p>
      </div>
    </div>
  )
}

export default EmailCard
