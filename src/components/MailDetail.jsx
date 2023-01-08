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
const MailDetail = () => {
  const mail=useSelector(selectedMail);
  console.log(mail)
  return (
    <div className='absolute top-20 left-60 z-0 w-[77%] pl-3'>
      <EmailListSetting Icon={ArrowBackIcon}/>
      <div className='header flex items-center justify-between py-2 ml-3 border-b'>
        <div>
            <p className='text-2xl'>{mail.subject}</p>
        </div>
        <div className='flex space-x-3'>
            <IconButton>
                <LocalPrintshopIcon/>
            </IconButton>
            <IconButton>
                <ShareIcon/>
            </IconButton>
        </div>
      </div>
      <div className='sender flex items-center justify-between py-2 ml-3 border-b'>
        <div className='flex items-center space-x-2'>
            <div className='p-1 cursor-pointer rounded-full hover:bg-gray-200 transition-all ease-in duration-150'>
            <img src={mail.senderPhoto} alt="" className='w-10 h-10 rounded-full object-contain'/>
            </div>
            <p className='font-bold'>{mail.name}</p>
            <p className='text-sm'>{mail.from}</p>
        </div>
        <div className='flex items-center'>
            <p className='mr-2 text-sm text-gray-500'>{mail.timestamp}</p>
            <IconButton>
                <ReplyIcon/>
            </IconButton>
            <IconButton>
                <StarIcon/>
            </IconButton>
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
        </div>
      </div>
      <div className='body pb-2 pt-3 ml-3'>
        <p>{mail.body}</p>
      </div>
    </div>
  )
}

export default MailDetail
