import React from 'react'
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useSelector } from 'react-redux';
import { selectTheme } from '../features/themeSlice'; 
const EmailType = () => {
  const theme=useSelector(selectTheme);
  return (
    <div className={ `${theme==="dark"?"":"border-b"} ${theme}`}>
      <div className='options flex items-center justify-start'>
        <div className='flex items-center justify-center space-x-3 border-b-2  font-semibold dark:border-red-300 dark:hover:border-red-700 border-red-700 text-red-700 dark:text-red-300 py-3 pl-5 pr-28 dark:hover:bg-red-700 dark:hover:text-red-100 hover:bg-red-50 transition-all ease-in duration-150 cursor-pointer'>
            <InboxIcon/>
            <p>Primary</p>
        </div>
        <div className='flex items-center dark:hover:border-gray-800 justify-center space-x-3 font-semibold dark:hover:bg-gray-800 dark:text-gray-100 text-gray-500 hover:bg-gray-50 transition-all ease-in duration-150 cursor-pointer py-3 pl-5 pr-28 border-b-2 border-white dark:border-[#00001a] hover:border-gray-50'>
            <PeopleAltIcon/>
            <p>Socials</p>
        </div>
        <div className='flex items-center dark:hover:border-gray-800 justify-center space-x-3 font-semibold dark:hover:bg-gray-800 dark:text-gray-100 text-gray-500 hover:bg-gray-50 transition-all ease-in duration-150 cursor-pointer py-3 pl-5 pr-28 border-b-2 border-white dark:border-[#00001a] hover:border-gray-50'>
            <LocalOfferIcon/>
            <p>Promotions</p>
        </div>
      </div>
    </div>
  )
}

export default EmailType
