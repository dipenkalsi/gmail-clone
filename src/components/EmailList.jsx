import React, { useEffect, useState } from 'react'
import EmailListSetting from './EmailListSetting'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import EmailType from './EmailType'
import EmailCard from './EmailCard'
import { db } from '../firebase'
import { Link } from 'react-router-dom';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import { selectTheme } from '../features/themeSlice';

const EmailList = () => {
  const theme =useSelector(selectTheme);
  const user=useSelector(selectUser);
  const [emails,setEmails]=useState([])
  const performCheck=({id,data})=>{
    return data.to===user.email
  }
  useEffect(()=>{
      db.collection("emails").orderBy("timestamp","desc").onSnapshot(snapshot=>{
        setEmails(snapshot.docs.map(doc=>({
          id:doc.id,
          data:doc.data()
        })))
      })
  },[])
  return (
    <div className={`absolute top-0 pt-20 left-0 pl-[15.5rem] h-full z-0 w-full pr-14 ${theme} ${theme==="dark"?"bg-[#0d0d0d]":""}`}>
      <EmailListSetting Icon={CheckBoxOutlineBlankIcon}/>
      <EmailType/>
      <div>   
        {
          emails.filter(performCheck).length===0?<div className='h-52 text-3xl dark:text-red-200 text-gray-500 w-full flex items-center justify-center'>
          No mails recieved yet.
        </div>:emails.filter(performCheck)?.map(({id,data})=>{
            return <Link to={`/mail/${id}`}>
            <EmailCard key={id} name={data.senderName} subject={data.subject} body={data.message} timestamp={new Date(data.timestamp?.seconds*1000).toLocaleTimeString()} from={data.from} senderPhoto={data.senderPhoto}/>
            </Link>
          })        
        }
      </div>
    </div>
  )
}

export default EmailList
