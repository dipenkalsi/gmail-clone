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
  console.log(emails)
  return (
    <div className={`absolute top-0 pt-20 left-60 h-full z-0 w-[77%] pl-3 ${theme} ${theme==="dark"?"bg-[#00001a]":""}`}>
      <EmailListSetting Icon={CheckBoxOutlineBlankIcon}/>
      <EmailType/>
      <div>
        {
          emails.filter(performCheck)?.map(({id,data})=>{
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
