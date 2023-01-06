import React from 'react'
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
const EmailType = () => {
  return (
    <div className='border-b'>
      <div className='options flex items-center justify-start'>
        <div className='flex items-center justify-center space-x-3 border-b-2  font-semibold border-red-700 text-red-700 py-3 pl-5 pr-28 hover:bg-red-50 transition-all ease-in duration-150 cursor-pointer'>
            <InboxIcon/>
            <p>Primary</p>
        </div>
        <div className='flex items-center justify-center space-x-3 font-semibold text-gray-500 hover:bg-gray-50 transition-all ease-in duration-150 cursor-pointer py-3 pl-5 pr-28 border-b-2 border-white hover:border-gray-50'>
            <PeopleAltIcon/>
            <p>Socials</p>
        </div>
        <div className='flex items-center justify-center space-x-3 font-semibold text-gray-500 hover:bg-gray-50 transition-all ease-in duration-150 cursor-pointer py-3 pl-5 pr-28 border-b-2 border-white hover:border-gray-50'>
            <LocalOfferIcon/>
            <p>Promotions</p>
        </div>
      </div>
    </div>
  )
}

export default EmailType
