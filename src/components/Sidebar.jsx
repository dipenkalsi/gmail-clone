import React,{useState} from 'react'
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import VideocamIcon from '@mui/icons-material/Videocam';
import AddIcon from '@mui/icons-material/Add';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import DraftsIcon from '@mui/icons-material/Drafts';
import { openCompose, selectShowCompose } from '../features/mailSlice';
import CategoryIcon from '@mui/icons-material/Category';
import Compose from './Compose';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { Link } from 'react-router-dom';
import { selectTheme } from '../features/themeSlice';
const Sidebar = () => {
  const [active,setActive]=useState(true);
  const location=useLocation();
  console.log(active)
  const user=useSelector(selectUser);
  const theme=useSelector(selectTheme);
  const showCompose = useSelector(selectShowCompose);
  const dispatch=useDispatch();
  return (
    <>
    {showCompose&&<Compose setShowCompose={showCompose}/>}
    <div className={`fixed left-0 top-16 pt-4 h-full w-60 ${theme==="dark"?"bg-[#00001a] dark":""}`}>
    <button className='flex mt-1 justify-center items-center space-x-2 text-lg border py-2 px-5 ml-2  hover:bg-red-50 transition-all ease-in duration-150 text-red-600 dark:text-red-200 dark:hover:bg-red-700 rounded-full shadow-sm dark:hover:border-red-700 ' onClick={()=>dispatch(openCompose())}>
        <CreateIcon/>
        <p>Compose</p>
    </button>

    <div className=' mt-3 border-b pb-3'>
      <Link to="/">
        <SidebarOption Icon={InboxIcon} title="Inbox" number="224" active={location.pathname==="/"}/>
        </Link>
        <SidebarOption Icon={StarIcon} title="Starred" number="224" />
        <SidebarOption Icon={WatchLaterIcon} title="Snoozed" number="224" />
        <SidebarOption Icon={LabelImportantIcon} title="Important" number="224" />
        <Link to="/sent">
        <SidebarOption Icon={SendIcon} title="Sent" number="224" active={location.pathname==="/sent"}/>
        </Link>
        <SidebarOption Icon={DraftsIcon} title="Draft" number="224" />
        <SidebarOption Icon={CategoryIcon} title="Categories" number="224" />   
    </div>
    <div className='border-b pb-1'>
        <p className='ml-4 text-gray-700 font-md font-bold mt-1 mb-1 dark:text-red-100'>Meet</p>
        <SidebarOption Icon={VideocamIcon} title="Start a meeting" number="224" />   
        <SidebarOption Icon={KeyboardIcon} title="Join a meeting" number="224" />   

    </div>
    <div >
    <p className='ml-4 text-gray-700 dark:text-red-100 font-md font-bold mt-1 mb-1'>Hangouts</p>
    <div className='flex items-center justify-between text-gray-600 transition-all ease-in duration-150 dark:text-gray-100 dark:hover:text-gray-600 hover:bg-gray-50 cursor-pointer pr-3 rounded-r-full'>
        <div className='flex items-center justify-center pl-3 space-x-2'>
        <div className='p-1 hover:bg-black/[0.1] w-fit rounded-full cursor-pointer'>
          <img src={user.photoURL} alt="" className='w-9 h-9 rounded-full object-cover' />
        </div>  
        <div className='flex items-center justify-center'>
        <p>{user.displayName}</p>
        <ArrowDropDownIcon color='inherit'/>
        </div>
        </div>
        <AddIcon/>
    </div>
    </div>
    </div>
    </>
  )
}

export default Sidebar
