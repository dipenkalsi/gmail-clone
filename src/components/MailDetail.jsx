import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ShareIcon from '@mui/icons-material/Share';
import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import EmailListSetting from './EmailListSetting'
import StarIcon from '@mui/icons-material/Star';
import ReplyIcon from '@mui/icons-material/Reply';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';
import { selectedMail } from '../features/mailSlice'
import { selectTheme } from '../features/themeSlice';
const MailDetail = () => {
  const mail=useSelector(selectedMail);
  const theme = useSelector(selectTheme);
  console.log(mail)
  return (
    <div className={`absolute top-0 pt-20 h-full left-60 z-0 w-[77%] pl-3 ${theme} ${theme==="dark"?"bg-[#00001a]":""}`}>
      <EmailListSetting Icon={ArrowBackIcon}/>
      <div className='header flex items-center justify-between py-2 ml-3 border-b'>
        <div>
            <p className='text-2xl dark:text-white'>{mail.subject}</p>
        </div>
        <div className='flex space-x-3 dark:text-white'>
            <IconButton color={theme==="dark"?"inherit":""}>
                <LocalPrintshopIcon/>
            </IconButton>
            <IconButton color={theme==="dark"?"inherit":""}>
                <ShareIcon/>
            </IconButton>
        </div>
      </div>
      <div className='sender flex items-center justify-between py-2 ml-3 border-b'>
        <div className='flex items-center space-x-2'>
            <div className='p-1 cursor-pointer rounded-full hover:bg-gray-200 transition-all ease-in duration-150'>
            <img src={mail.senderPhoto} alt="" className='w-10 h-10 rounded-full object-contain'/>
            </div>
            <p className='font-bold dark:text-white'>{mail.name}</p>
            <p className='text-sm dark:text-white'>{mail.from}</p>
        </div>
        <div className='flex items-center'>
            <p className='mr-2 text-sm text-gray-500 dark:text-white'>{mail.timestamp}</p>
            <div className='dark:text-white'>
            <IconButton color={theme==="dark"?"inherit":""}>
                <ReplyIcon/>
            </IconButton>
            <IconButton color={theme==="dark"?"inherit":""}>
                <StarIcon/>
            </IconButton>
            <IconButton color={theme==="dark"?"inherit":""}>
                <MoreVertIcon/>
            </IconButton>
            </div>
        </div>
      </div>
      <div className='body pb-2 pt-3 ml-3'>
        <p className='dark:text-white'>{mail.body}</p>
      </div>
    </div>
  )
}

export default MailDetail
